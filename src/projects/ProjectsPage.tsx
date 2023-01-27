import React from 'react'
import { MOCK_PROJECTS } from './MockProject'
import ProjectList from './ProjectList';

export default function ProjectsPage() {
    return (
        <>
        <h4>Projects</h4>
      <ProjectList projects={MOCK_PROJECTS} />
      </>
      
  );
}
