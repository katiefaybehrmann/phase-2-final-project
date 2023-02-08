import React from "react";
import MyProjectsCard from "./MyProjectsCard";
import uuid from "react-uuid";

function MyProjects({myProjectList}){
    return (
        <div>
            <ul className="cards">{myProjectList.map(project => <MyProjectsCard key={uuid()} project={project} />)}</ul>
        </div>
    )
}

export default MyProjects;