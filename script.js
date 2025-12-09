document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const title = section.querySelector("h2");
    const content = section.querySelector("div");

    if (!title || !content) return;

    content.classList.add("collapse-content");

    title.classList.remove("active");
    content.classList.remove("open");

    title.addEventListener("click", () => {
      const isOpen = content.classList.contains("open");
      title.classList.toggle("active", !isOpen);
      content.classList.toggle("open", !isOpen);
    });
  });
});