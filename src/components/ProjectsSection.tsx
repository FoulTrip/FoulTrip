import styles from "./styles/projectSection.module.css";
import Project01 from "./projects/Project01";
import Project02 from "./projects/Project02";
import Project03 from "./projects/Project03";

function ProjectsSection() {
  return (
    <>
      <div className={styles.containerProjectsFree}>
        <h1 className={styles.titleProjects}>Projects</h1>
        <div className={styles.container_Cards}>
          <Project01 />
          <Project02 />
          <Project03 />
        </div>
      </div>
    </>
  );
}

export default ProjectsSection;
