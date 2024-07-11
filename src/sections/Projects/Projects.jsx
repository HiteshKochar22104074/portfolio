import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import object from '../../assets/object.jpg'
import store from '../../assets/store.jpg'

function Projects () {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={object}
          link=""
          h3="Object Detection"
        />
        <ProjectCard
          src={store}
          link="https://github.com/HiteshKochar22104074/E-commerce"
          h3="E-Commerce App"
        />
      </div>
    </section>
  )
}

export default Projects
