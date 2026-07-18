import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import 'animate.css';
import photo from './assets/photo_5053154591864106546_y.jpg';
import styles from './App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faFile, faGlobe } from '@fortawesome/free-solid-svg-icons';
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
import node from './assets/node-js.svg'
import wp from './assets/wordpress.svg'

function App() {
  const [selectedTab, setSelectedTab] = useState('proyectos');
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <button
          className={styles.languageButton}
          onClick={toggleLanguage}
          aria-label={t('language.toggleAriaLabel')}
        >
          <FontAwesomeIcon icon={faGlobe} /> {t('language.toggle')}
        </button>
        <h1>{t('header.title')}</h1>
        <img className={styles.image} src={photo} alt={t('header.photoAlt')} />
        <nav className={styles.nav}>
          <a className={styles.icons} href="https://www.linkedin.com/in/gabriel-lea-n/"><FontAwesomeIcon  icon={faLinkedin} /></a>
          <a className={styles.icons} href="https://github.com/ParkerPiter"><FontAwesomeIcon  icon={faGithub} /></a>
        </nav>
      </header>
      <main>
      <div className={styles.tabs}>
          <button className={selectedTab === 'proyectos' ? styles.activeTab : ''} onClick={() => setSelectedTab('proyectos')}>{t('tabs.projects')}</button>
          <button className={selectedTab === 'contacto' ? styles.activeTab : ''} onClick={() => setSelectedTab('contacto')}>{t('tabs.contact')}</button>
          <button className={selectedTab === 'sobre mi' ? styles.activeTab : ''} onClick={() => setSelectedTab('sobre mi')}>{t('tabs.about')}</button>
        </div>
        {selectedTab === 'proyectos' && (
          <section>
            <h2 className={styles.titles}>{t('projects.title')}</h2>
            <div className={styles.buttonsContainer}>
              <a className={styles.buttons} href="https://clinicanutrapiel.cl/" target="_blank" rel="noopener noreferrer">{t('projects.nutrapiel')}</a>
              <a className={styles.buttons} href="https://app.gopadel.ai/" target="_blank" rel="noopener noreferrer">GoPadel</a>
              <a className={styles.buttons} href="https://greenhug.com/" target="_blank" rel="noopener noreferrer">Greenhug</a>
              <a className={styles.buttons} href="https://app.impulsum.io/" target="_blank" rel="noopener noreferrer">Impulsum</a>
              <a className={styles.buttons} href="https://calistenia360.fit/" target="_blank" rel="noopener noreferrer">Calistenia 360</a>
              <a className={styles.buttons} href="https://velasquezfinancialgroup.com/" target="_blank" rel="noopener noreferrer">Velasquez Financial</a>
              {/* <a className={styles.buttons} href="https://www.kleep.com/#/campaign-home" target="_blank" rel="noopener noreferrer">Kleep</a> */}
              <a className={styles.buttons} href="https://intelisport.us/" target="_blank" rel="noopener noreferrer">Intelisport</a>
              <a className={styles.buttons} href="https://www.inteligensa.com/" target="_blank" rel="noopener noreferrer">Inteligensa</a>
              <a className={styles.buttons} href="https://tiendae3.intelipay.com.ve/" target="_blank" rel="noopener noreferrer">{t('projects.energyStations')}</a>
              <a className={styles.buttons} href="https://intelipay.com.ve/" target="_blank" rel="noopener noreferrer">Intelipay</a>
              <a className={styles.buttons} href="https://zio-pagos.netlify.app/" target="_blank" rel="noopener noreferrer">Zio Pagos</a>
              <a className={styles.buttons} href="https://intelitec.intelipay.com.ve/" target="_blank" rel="noopener noreferrer">Intelitec</a>
              <a className={styles.buttons} href="https://poke-news.netlify.app/" target="_blank" rel="noopener noreferrer">Poke News</a>
              <a className={styles.buttons} href="https://legendary-stroopwafel-2630e1.netlify.app/" target="_blank" rel="noopener noreferrer">Sound Next</a>
              {/* <a className={styles.buttons} href="https://notes-manager-test.netlify.app/" target="_blank" rel="noopener noreferrer">Task Manager</a>
              <a className={styles.buttons} href="https://resonant-moxie-76fc5f.netlify.app/" target="_blank" rel="noopener noreferrer">Consultoria Penal</a>
              <a className={styles.buttons} href="https://coffee-blog-proyecto.netlify.app/" target="_blank" rel="noopener noreferrer">Coffe Blog</a> */}
              {/* <a className={styles.buttons} href="https://spontaneous-salamander-a129ea.netlify.app/">ATH Coin</a> */}
            </div>
          </section>
        )}
        {selectedTab === 'contacto' && (
          <section className={styles.contactSection}>
            <h2 className={styles.titles}>{t('contact.title')}</h2>
            <div className={styles.contact}>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              <a className={styles.mail} href="mailto:gabriel.leal.n1@gmail.com"><p>gabriel.leal.n1@gmail.com</p></a>
            </div>
            <div className={styles.contact}>
              <FontAwesomeIcon className={styles.icon} icon={faPhone} />
              <p>+54 1123900802</p>
            </div>
            <div className={styles.contact}>
              <FontAwesomeIcon icon={faFile} className={styles.wa} />
              <a className={styles.mail} href="https://drive.google.com/file/d/1fWPZxHBwl8ejsUxgX1_FXCD90nNIQa9I/view?usp=sharing" target="_blank" rel="noopener noreferrer"><p>{t('contact.cv')}</p></a>
            </div>
            <div className={styles.contact}>
              <a className={styles.mail} href="https://wa.me/+5491123900802"><FontAwesomeIcon className={styles.wa} icon={faWhatsapp} /></a>
            </div>
          </section>
        )}
        {selectedTab === 'sobre mi' && (
          <section className={styles.sobreMi}>
            <h2 className={styles.sobreMiTitle}>{t('about.title')}</h2>
            <div className={styles.sobreMiText}>
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>
            <div className={styles.tecnoContainer}>
              <h3 className={styles.technologiesTitle}>{t('about.technologies')}</h3>
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
