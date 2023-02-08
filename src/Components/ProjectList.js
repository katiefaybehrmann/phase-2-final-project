import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({projectsToDisplay, handleAddToMyList}){
    return (
        <div>
            <ul className="cards">{projectsToDisplay.map(project => <ProjectCard key={project.id} project={project} handleAddToMyList={handleAddToMyList}/>)}</ul>
        </div>
    )
}

export default ProjectList;