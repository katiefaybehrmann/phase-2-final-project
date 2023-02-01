import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import MyProjects from './MyProjects';
import AddProject from './AddProject';

function App() {
  const [projectList, setProjectList] = useState([])
  const [projectType, setProjectType] = useState("All")

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then(r => r.json())
      .then((allProjects) => setProjectList(allProjects))
  }, [])

  function handleProjectTypeChange(event) {
    setProjectType(event.target.value)

  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/myprojects">
          <MyProjects />
        </Route>
        <Route exact path="/addproject">
          <AddProject />
        </Route>
        <Route exact path="/">
          <Home projectList={projectList} projectType={projectType} handleProjectTypeChange={handleProjectTypeChange} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
