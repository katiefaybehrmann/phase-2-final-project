import React from "react";
import SearchForm from "./SearchForm";
import ProjectList from "./ProjectList";

function Home({ projectList, projectType, handleProjectTypeChange }) {

    const projectsToDisplay = projectList.filter((project) => {
        if (projectType === "All") {
            return true
        }

        if (project.type.toLowerCase() === projectType.toLowerCase()) {
            return project
        }
    })

    return (
        <div>
            <h1>Welcome to HTTP: Happy Trying Textile Projects!</h1>
            <SearchForm handleProjectTypeChange={handleProjectTypeChange} />
            <ProjectList projectsToDisplay={projectsToDisplay} />
        </div>
    )
}

export default Home;