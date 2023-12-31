import {
  nextJSIcon,
  emailIcon,
  locationIcon,
  githubIcon,
  linkedIn
} from './public/icons/index.js';

const inicio_icon_github = document.getElementById('inicio-icon-github');
const inicio_icon_email = document.getElementById('inicio-icon-email');
const inicio_icon_linkedIn = document.getElementById('inicio-icon-linkedIn');
const proyectos = document.getElementById('proyectos-section');
const email_icon = document.getElementById('contacto-email-icon');
const location_icon = document.getElementById('contacto-location-icon');
const contacto_github_icon = document.getElementById('contacto-github-icon');
const contacto_linkedIn_icon = document.getElementById(
  'contacto-linkedIn-icon'
);

email_icon.innerHTML = emailIcon;
location_icon.innerHTML = locationIcon;
inicio_icon_github.innerHTML = githubIcon;
inicio_icon_linkedIn.innerHTML = linkedIn;
contacto_github_icon.innerHTML = githubIcon;
contacto_linkedIn_icon.innerHTML = linkedIn;
inicio_icon_email.innerHTML = emailIcon;

const PROJECTS = [
  {
    title: 'Rick-Mort',
    description: 'Rick-Mort',
    link: 'https://jose-orihuela-ponce.github.io/Rick-Morty/',
    github: '',
    image: './public/images/rick_morty_image.webp',
    tags: [nextJSIcon, nextJSIcon]
  },
  {
    title: 'Rick-Mort',
    description: 'Rick-Mort',
    link: 'https://pocke-api-nextjs.vercel.app/',
    github: '',
    image: './public/images/pocke_api.webp',
    tags: [nextJSIcon, nextJSIcon]
  },
  {
    title: 'Rick-Mort',
    description: 'Rick-Mort',
    link: 'https://jose-orihuela-ponce.github.io/Tienda-front-electronics/',
    github: '',
    image: './public/images/shop-electronics.webp',
    tags: [nextJSIcon, nextJSIcon]
  },
  {
    title: 'Rick-Mort',
    description: 'Rick-Mort',
    link: 'https://nextjs-libros-typescript.vercel.app/',
    github: '',
    image: './public/images/libreria_midudev.webp',
    tags: [nextJSIcon, nextJSIcon]
  }
];

const renderProyects = PROJECTS.map((el) => {
  return `
    <article>
         <a href="${el.link}" target="_blank" rel="noopener noreferrer" >
          <picture>
          <img
            class="proyectos-container-img"
            src="${el.image}"
            alt=""
          />
          <div class="proyectos-container-info">
          <p class="proyectos-container-info-title">${el.title}</p>
            <ul class="proyectos-container-info-tags">${el.tags
              ?.map((el) => `<li>${el}</li>`)
              .join('')}</ul>
            <p class="proyectos-container-description">${el.description}</p>
          </div>
          </picture>
         </a>
    </article>
  `;
});
proyectos.innerHTML = renderProyects.join('');

{
  /* */
}
