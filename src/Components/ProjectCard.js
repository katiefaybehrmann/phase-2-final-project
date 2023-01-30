import React from "react";

function ProjectCard({ project }) {
    return (
        <li className="card">
            <img src={project.image} alt={project.name}/>
            <h3>{project.name}</h3>
            <h4>Difficulty: {project.difficulty}</h4>
        </li>
    )
}

export default ProjectCard;