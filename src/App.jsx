import React, {useState} from 'react';
import photo from './assets/1677603369334.jpg';
import styles from './App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import mongo from './assets/mongodb-original-wordmark.svg'
import mysql from './assets/mysql-original-wordmark.svg'
import postgre from './assets/postgresql-icon-1987x2048-v2fkmdaw.png'
import ts from './assets/typescript-icon.svg'
import next from './assets/nextjs.svg'
import express from './assets/express-original-wordmark.svg'
import html from './assets/file-type-html.svg'
import css from './assets/file-type-css.svg'
import js from './assets/javascript-js.svg'
import react from './assets/react.svg'
import git from './assets/git.svg'
import node from './assets/node-js.svg'
import wp from './assets/wordpress.svg'

function App() {
  const [selectedTab, setSelectedTab] = useState('proyectos');

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Portafolios Gabriel Leal</h1>
        <img className={styles.image} src={photo} alt="#photo" />
        <nav className={styles.nav}>
          <a className={styles.icons} href="https://www.linkedin.com/in/gabriel-lea-n/"><FontAwesomeIcon  icon={faLinkedin} /></a>
          <a className={styles.icons} href="https://github.com/ParkerPiter"><FontAwesomeIcon  icon={faGithub} /></a>
        </nav>
      </header>
      <main>
      <div className={styles.tabs}>
          <button className={selectedTab === 'proyectos' ? styles.activeTab : ''} onClick={() => setSelectedTab('proyectos')}>Proyectos</button>
          <button className={selectedTab === 'contacto' ? styles.activeTab : ''} onClick={() => setSelectedTab('contacto')}>Contacto</button>
          <button className={selectedTab === 'sobre mi' ? styles.activeTab : ''} onClick={() => setSelectedTab('sobre mi')}>Sobre Mi</button>
        </div>
        {selectedTab === 'proyectos' && (
          <section>
            <h2 className={styles.titles}>Proyectos</h2>
            <div className={styles.buttonsContainer}>
              <a className={styles.buttons} href="https://zio-pagos.netlify.app/" target="_blank" rel="noopener noreferrer">Zio Pagos</a>
              <a className={styles.buttons} href="https://intelitect.netlify.app/" target="_blank" rel="noopener noreferrer">Intelitec</a>
              <a className={styles.buttons} href="https://intelisport.netlify.app/" target="_blank" rel="noopener noreferrer">Intesport</a>
              <a className={styles.buttons} href="https://notes-manager-test.netlify.app/" target="_blank" rel="noopener noreferrer">Task Manager</a>
              <a className={styles.buttons} href="https://poke-news.netlify.app/" target="_blank" rel="noopener noreferrer">Poke News</a>
              <a className={styles.buttons} href="https://resonant-moxie-76fc5f.netlify.app/" target="_blank" rel="noopener noreferrer">Consultoria Penal</a>
              <a className={styles.buttons} href="https://legendary-stroopwafel-2630e1.netlify.app/" target="_blank" rel="noopener noreferrer">Sound Next</a>
              <a className={styles.buttons} href="https://coffee-blog-proyecto.netlify.app/" target="_blank" rel="noopener noreferrer">Coffe Blog</a>
              {/* <a className={styles.buttons} href="https://spontaneous-salamander-a129ea.netlify.app/">ATH Coin</a> */}
            </div>
          </section>
        )}
        {selectedTab === 'contacto' && (
          <section className={styles.contactSection}>
            <h2 className={styles.titles}>Contacto</h2>
            <div className={styles.contact}>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              <a className={styles.mail} href="mailto:gabriel.leal.n1@gmail.com"><p>gabriel.leal.n1@gmail.com</p></a>
            </div>
            <div className={styles.contact}>
              <FontAwesomeIcon className={styles.icon} icon={faPhone} />
              <p>+54 1123900802</p>
            </div>
            <div className={styles.contact}>
              <a href="https://w.app/16dwej"><FontAwesomeIcon className={styles.wa} icon={faWhatsapp} /></a>
            </div>
          </section>
        )}
        {selectedTab === 'sobre mi' && (
          <section className={styles.sobreMi}>
            <h2 className={styles.sobreMiTitle}>Sobre Mi</h2>
            <div className={styles.sobreMiText}>
              <p>Un placer en saludarte, soy un <strong>Desarrollador Full Stack Jr</strong>, Venezolano de 24 años que actualmente reside en <strong>CABA, Argentina</strong>; Tengo desde mis 17 años estudiando Desarrollo Web con tecnologías como Wordpress, HTML, CSS y JavaScript. Tambien curse hasta 6to semestre la carrera de Ingeniería en Sistemas donde aprendí lenguajes como C y C++, por asuntos personales tuve que congelar la carrera.</p>
              <p>He sido mayormente un autodidacta de la programación haciendo cursos en plataformas como Udemy y tambien saqué una certificación de parte de soy Henry que me ayudo a guiarme en el camino del Full Stack, de ahi en adelante he estudiado y practicado más por mi cuenta, tambien he participado en voluntariados y proyectos como Freelancer en plataformas como Upwork.</p>
              <p>Tengo más de un año de experiencia laboral en roles como Desarrollador Web y Desarrollador Frontend y actualmente busco seguir formandome como Desarrollador para pulir más mis habilidades y seguir creciendo tanto de manera laboral como tambien para mi vida cotidiana.</p>
            </div>
            <div className={styles.tecnoContainer}>
              <h3 className={styles.technologiesTitle}>Tecnologías que uso</h3>
              <div className={styles.technologiesGrid}>
                <img src={html} alt="#html" />
                <img src={css} alt="#css" />
                <img src={js} alt="#js" />
                <img src={ts} alt="#ts" />
                <img src={wp} alt="#wp" />
                <img src={react} alt="#react" />
                <img src={next} alt="#nextjs" />
                <img src={express} alt="#express" />
                <img src={node} alt="#node" />
                <img src={postgre} alt="#postgre" />
                <img src={mysql} alt="#mysql" />
                <img src={mongo} alt="#mongodb" />
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
