import React from "react";

function MyProjectsCard({project}){
    return (
        <li className="card">
            <img src={project.image} alt={project.name}/>
            <h3>{project.name}</h3>
            <h4>Difficulty: {project.difficulty}</h4>
            <button>Delete Project</button>
        </li>
    )
}

export default MyProjectsCard