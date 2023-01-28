import { format } from "path";
import React from "react";
import { Project } from "./Project";

function Format(description: string){
    return description.substring(0, 60)+ '...';
}
interface ProjectCardProps{
    project: Project;
}
export default function ProjectCard(props: ProjectCardProps){
    const {project} = props;
    return(
        <div className="card">
            <img src= {project.imageUrl} alt={project.name} />
            <section className="section dark">
                <h5 className="strong">
                      <strong>{project.name}</strong>
                </h5>
                <p>{Format(project.description)}</p>
                <p>Budget: {project.budget.toLocaleString()}</p>

            </section>

        </div>
    )
}