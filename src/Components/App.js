import React, { useEffect, useState } from 'react';
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

  function handleProjectTypeChange(event){
    setProjectType(event.target.value)

  }

  return (
    <div>
      <NavBar />
      <Home projectList={projectList} projectType={projectType} handleProjectTypeChange={handleProjectTypeChange}/>
      <MyProjects />
      <AddProject />
    </div>
  );
}

export default App;
