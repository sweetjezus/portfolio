const navItems = document.querySelectorAll(".nav__item");
const sections = document.querySelectorAll(".section");

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    // remover .active de todos os ícones
    navItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");

    // descobrir o ID da section (via href)
    const sectionId = item.querySelector("a").getAttribute("href").slice(1);

    // alternar as sections
    sections.forEach((section) => {
      section.classList.remove("active");
      if (section.id === sectionId) {
        section.classList.add("active");
      }
    });
  });
});

// fechar pagina
document.getElementById("close-page-btn").addEventListener("click", () => {
  window.location.href = "https://www.google.com"; // Redireciona para o google
});

emailjs.init("HO5DvXNVIe15rFMoy");

import { fetchProjects } from "./fetchProjects.js";

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("contact-form");
  const statusMsg = document.getElementById("contact-status");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_6tf4sq8", "template_7wth6wl", form).then(
      () => {
        statusMsg.innerHTML = `✔️ Your message has been sent successfully. I’ll get back to you as soon as I can.`;
        statusMsg.style.color = "#00ff88";

        form.reset();
      },
      (err) => {
        statusMsg.innerHTML = `❌ There was an error sending your message. Please try again later.`;
        statusMsg.style.color = "#ff5555";
      }
    );
  });

  const container = document.getElementById("stacked-projects");

  try {
    const projects = await fetchProjects();

    projects.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card", "flex-container__item");
      card.innerHTML = `
       
        <img src="${project.imageUrl}" alt="${project.title}" loading="lazy"/>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p class="stack-text"><span>Stack:</span>${project.stack}</p>
        <div class="project-links">
          ${
            project.liveLink && project.liveLink !== "NA"
              ? `<a href="${project.liveLink}" target="_blank" class="project__btn project__btn--animated">Website Link</a>`
              : ""
          }
          ${
            project.liveDemo && project.liveDemo !== "NA"
              ? `<a href="${project.liveDemo}" target="_blank" class="project__btn project__btn--animated">Live Demo</a>`
              : ""
          }
          ${
            project.codeLink && project.codeLink !== "NA"
              ? `<a href="${project.codeLink}" target="_blank" class="project__btn project__btn--animated">Code</a>`
              : ""
          }
          
        
      `;
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = "<p>Erro ao carregar projetos.</p>";
    console.error("Erro ao buscar projetos:", err);
  }
});
