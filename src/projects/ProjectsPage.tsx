import React from 'react'
import { MOCK_PROJECTS } from './MockProject'
import ProjectList from './ProjectList';
import NavBar from './NavBar';
import { Project } from './Project';
export default function ProjectsPage() {
    const saveProject = (project: Project) => {
        console.log('Saving project: ', project)
    }
    return (
        <>
        <NavBar />
        <h4>Projects</h4>
      <ProjectList 
      onSave={saveProject}
      projects={MOCK_PROJECTS} />
      </>
      
  );
}
