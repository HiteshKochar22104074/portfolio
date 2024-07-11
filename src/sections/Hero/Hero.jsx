import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.jpeg'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedInlight from '../../assets/linkedin-light.svg'
import Githublight from '../../assets/github-light.svg'
import linkedIndark from '../../assets/linkedin-dark.svg'
import Githubdark from '../../assets/github-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? Githublight : Githubdark;
  const linkedinIcon = theme === 'light' ? linkedInlight : linkedIndark;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
          <img className={styles.hero} src={heroImg} alt="Picture of Hitesh Kochar" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode Icon" onClick={toggleTheme} />
      </div>

      <div className={styles.info}>
        <h1>Hitesh Kochar</h1>
        <h2>Frontend Developer</h2>

        <span>
          <a href="https://www.linkedin.com/in/hitesh-kochar-738251257/" target="_blank" >
            <img src={linkedinIcon} alt="LinkedIn Profile" />
          </a>
          <a href="https://github.com/HiteshKochar22104074" target="_blank" >
            <img src={githubIcon} alt="Github Profile" />
          </a>
        </span>

        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>

        <a href={CV} target='_blank'>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
