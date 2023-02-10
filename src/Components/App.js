import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import MyProjects from './MyProjects';
import AddProject from './AddProject';

function App() {
  const [projectList, setProjectList] = useState([])
  const [myProjectList, setMyProjectList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then(r => r.json())
      .then((allProjects) => setProjectList(allProjects))
  }, [])


  function handleAddProject(newProject){
    setProjectList([...projectList, newProject])
  }

  function handleAddToMyList(event) {
    const myNewProject = projectList.find(project => project.name === event.target.id)
    setMyProjectList([...myProjectList, myNewProject])
  }


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/myprojects">
          <MyProjects myProjectList={myProjectList} />
        </Route>
        <Route exact path="/addproject">
          <AddProject handleAddProject={handleAddProject}/>
        </Route>
        <Route exact path="/">
          <Home projectList={projectList} handleAddToMyList={handleAddToMyList} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
