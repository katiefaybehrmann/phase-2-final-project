import React from "react";
import SearchForm from "./SearchForm";
import ProjectList from "./ProjectList";

function Home({projectList}){
    return (
        <div>
            <h1>Welcome to HTTP: Happy Trying Textile Projects!</h1>
            <SearchForm />
            <ProjectList projectList={projectList}/>
        </div>
    )
}

export default Home;