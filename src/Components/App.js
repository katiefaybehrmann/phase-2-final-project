import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Home from './Home';
import MyProjects from './MyProjects';
import AddProject from './AddProject';

function App() {
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then(r => r.json())
      .then((allProjects) => setProjectList(allProjects))
  }, [])

  return (
    <div>
      <NavBar />
      <Home projectList={projectList}/>
      <MyProjects />
      <AddProject />
    </div>
  );
}

export default App;
