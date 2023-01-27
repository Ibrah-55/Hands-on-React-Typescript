import React from 'react'
import { MOCK_PROJECTS } from './MockProject'

export default function ProjectsPage() {
    return (
        <>
        <h4>Projects</h4>
      <pre>{JSON.stringify(MOCK_PROJECTS, null, '')}</pre> 
      </>
      
  );
}
