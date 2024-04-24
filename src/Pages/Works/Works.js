import React, { useEffect } from "react";
import "./index.css";
import arrow from "../../icons/Logo.svg";
import Contact from "../../сomponents/contactSection/Contact";
import { useContentfulEntries } from "../../api/contentful/useContentfulFetch";

// Компонент для отдельного проекта
const ProjectCard = ({ img, category, title, description }) => (
  <div className="project__card">
    {/* Изображение добавлено через инлайн стиль */}
    <div
      className="project__image"
      style={{ backgroundImage: `url(${img})` }}
    />
    <h3 className="h3 project__header">{category}</h3>
    <h2 className="h2 project__subheader">{title}</h2>
    <p className="p1">{description}</p>
  </div>
);

// Компонент для секции с проектами
const ProjectsSection = ({ projects }) => (
  <div className="project__section">
    {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
    ))}
  </div>
);

// Компонент для контактной формы
// const ContactForm = () => (
//   <form className="contact__form">
//     {/* Форма контактов с полями ввода */}
//     <input type="text" placeholder="Name" />
//     <input type="phone" placeholder="Phone" />
//     <input type="email" placeholder="Email" />
//     <textarea placeholder="How we can help you?"></textarea>
//     <button type="submit">Get in touch</button>
//   </form>
// );

// Главный компонент страницы Work
const Work = () => {
  const { data: projectsData } = useContentfulEntries("work");
  // Данные для проектов, предполагается динамическая загрузка или статическое определение

  if (!projectsData) {
    return null;
  }

  return (
    <div className="work__page">
      <h1 className="h1 work__header">OUR WORK</h1>
      <ProjectsSection projects={projectsData} />
      <Contact />
    </div>
  );
};

export default Work;
