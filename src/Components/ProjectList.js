import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({projectList}){
    return (
        <div>
            <ul className="cards">{projectList.map(project => <ProjectCard key={project.id} project={project} />)}</ul>
        </div>
    )
}

export default ProjectList;