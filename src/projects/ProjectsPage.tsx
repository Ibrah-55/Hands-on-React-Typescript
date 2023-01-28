import React, {useState} from 'react'
import { MOCK_PROJECTS } from './MockProject'
import ProjectList from './ProjectList';
import NavBar from './NavBar';
import { Project } from './Project';


export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

    const saveProject = (project: Project) => {
        let updatedProjects = projects.map((p:Project) => {
            return p.id === project.id ? project:p;
        });
        setProjects(updatedProjects)
    }
    return (
        <>
        <NavBar />
        <h4>Projects</h4>
        <ProjectList onSave={saveProject} projects={projects} />

      </>
      
  );
}
