import React from "react";

function ProjectCard({ project, handleAddToMyList }) {

    return (
        <li className="card">
            <img src={project.image} alt={project.name}/>
            <h3>{project.name}</h3>
            <h4>Difficulty: {project.difficulty}</h4>
            <button className="btn" id={project.name} onClick={handleAddToMyList}>Add to My Projects</button>
        </li>
    )
}

export default ProjectCard;