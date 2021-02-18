import React,{ Component } from "react";
import '../style/projects.css';
import ProjectCard from "./project-card";
import projects from "../data/dataProjects";

class Projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <header>
          <h1>Projects</h1>
        </header>
        <section className='project-list'>
          <ul>
            { projects.map(project => <ProjectCard items={ project } key={ project.name }/>) }
          </ul>
        </section>
      </div>
    )
  }
}

export default Projects;