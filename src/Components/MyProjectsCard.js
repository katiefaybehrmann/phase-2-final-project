import React from "react";

function MyProjectsCard({project}){
    return (
        <li className="card">
            <img src={project.image} alt={project.name} id={project.name} />
            <h3>{project.name}</h3>
            <h4>{project.description}</h4>
        </li>
    )
}

export default MyProjectsCard