import React, {useState} from "react";
import SearchForm from "./SearchForm";
import ProjectList from "./ProjectList";

function Home({ projectList, handleAddToMyList }) {
    const [projectType, setProjectType] = useState("All")


    function handleProjectTypeChange(event) {
        setProjectType(event.target.value)
      }

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
            <ProjectList projectsToDisplay={projectsToDisplay} handleAddToMyList={handleAddToMyList} />
        </div>
    )
}

export default Home;