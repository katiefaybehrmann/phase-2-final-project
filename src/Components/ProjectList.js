import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({projectsToDisplay}){
    return (
        <div>
            <ul className="cards">{projectsToDisplay.map(project => <ProjectCard key={project.id} project={project} />)}</ul>
        </div>
    )
}

export default ProjectList;