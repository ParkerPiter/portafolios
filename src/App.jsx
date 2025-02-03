import React, {useState} from 'react';
import photo from './assets/1677603369334.jpg';
import styles from './App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faReact, faJsSquare, faHtml5, faCss3Alt, faNodeJs, faGit} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

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
              <a className={styles.buttons} href="https://www.linkedin.com/in/gabriel-lea-n/">Poke News</a>
              <a className={styles.buttons} href="https://www.linkedin.com/in/gabriel-lea-n/">Poke News</a>
              <a className={styles.buttons} href="https://www.linkedin.com/in/gabriel-lea-n/">Poke News</a>
              <a className={styles.buttons} href="https://www.linkedin.com/in/gabriel-lea-n/">Poke News</a>
              <a className={styles.buttons} href="https://www.linkedin.com/in/gabriel-lea-n/">Poke News</a>
              <a className={styles.buttons} href="https://www.linkedin.com/in/gabriel-lea-n/">Poke News</a>
              <a className={styles.buttons} href="https://www.linkedin.com/in/gabriel-lea-n/">Poke News</a>
              <a className={styles.buttons} href="https://www.linkedin.com/in/gabriel-lea-n/">Poke News</a>
              <a className={styles.buttons} href="https://www.linkedin.com/in/gabriel-lea-n/">Poke News</a>
            </div>
          </section>
        )}
        {selectedTab === 'contacto' && (
          <section className={styles.contactSection}>
            <h2 className={styles.titles}>Contacto</h2>
            <div className={styles.contact}>
              <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
              <p>gabriel.leal.n1@gmail.com</p>
            </div>
            <div className={styles.contact}>
              <FontAwesomeIcon className={styles.icon} icon={faPhone} />
              <p>+54 1123900802</p>
            </div>
          </section>
        )}
        {selectedTab === 'sobre mi' && (
          <section className={styles.sobreMi}>
            <h2 className={styles.sobreMiTitle}>Sobre Mi</h2>
            <div className={styles.sobreMiText}>
              
              <p>Texto sobre ti aquí.</p>
            </div>
            <div className={styles.technologiesGrid}>
              <FontAwesomeIcon icon={faReact} />
              <FontAwesomeIcon icon={faJsSquare} />
              <FontAwesomeIcon icon={faHtml5} />
              <FontAwesomeIcon icon={faCss3Alt} />
              <FontAwesomeIcon icon={faNodeJs} />
              <FontAwesomeIcon icon={faGit} />
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
