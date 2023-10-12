import Project from './Project/Project';
import datas from '../../assets/data/projects.json';
import './Projects.css';

function Projects() {
  const listProjects = datas.map((data) => (
    <Project values={data} key={data.title} />
  ));
  return (
    <section className="projects-section wrapper" id="projects-section">
      <h3>Mes Réalisations</h3>
      {listProjects}
    </section>
  );
}

export default Projects;
