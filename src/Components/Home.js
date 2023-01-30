import React from "react";
import SearchForm from "./SearchForm";
import ProjectList from "./ProjectList";

function Home({projectList}){
    return (
        <div>
            <h1>I'm the home container, where projects and search will be stored</h1>
            <SearchForm />
            <ProjectList projectList={projectList}/>
        </div>
    )
}

export default Home;