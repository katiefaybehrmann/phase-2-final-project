import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import MyProjects from './MyProjects';
import AddProject from './AddProject';

function App() {
  const [projectList, setProjectList] = useState([])
  const [projectType, setProjectType] = useState("All")
  const [myProjectList, setMyProjectList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then(r => r.json())
      .then((allProjects) => setProjectList(allProjects))
  }, [])

  function handleProjectTypeChange(event) {
    setProjectType(event.target.value)
  }

  function handleAddProject(newProject){
    setProjectList([...projectList, newProject])

  }

  function handleAddToMyList(event) {
    console.log(event.target.id)
    const myNewProject = projectList.find(project => project.name === event.target.id)
    setMyProjectList([...myProjectList, myNewProject])
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/myprojects">
          <MyProjects myProjectList={myProjectList}/>
        </Route>
        <Route exact path="/addproject">
          <AddProject handleAddProject={handleAddProject}/>
        </Route>
        <Route exact path="/">
          <Home projectList={projectList} handleAddToMyList={handleAddToMyList} projectType={projectType} handleProjectTypeChange={handleProjectTypeChange} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
