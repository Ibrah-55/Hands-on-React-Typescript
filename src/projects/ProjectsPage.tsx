import React from 'react'
import { MOCK_PROJECTS } from './MockProject'
import ProjectList from './ProjectList';
import NavBar from './NavBar';

export default function ProjectsPage() {
    return (
        <>
        <NavBar />
        <h4>Projects</h4>
      <ProjectList projects={MOCK_PROJECTS} />
      </>
      
  );
}
