import React, { useState } from "react";

function AddProject({ handleAddProject }) {
    const [projectInfo, setProjectInfo] = useState({
        name: "",
        image: "",
        difficulty: "",
        type: "",
        description: ""
    })

    function handleChange(event) {
        console.log(event.target.value)
        setProjectInfo({
            ...projectInfo,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3001/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "name": projectInfo.name,
            "image": projectInfo.image, 
            "difficulty": projectInfo.difficulty,
            "type": projectInfo.type,
            "description": projectInfo.description
          })
        })
          .then(r => r.json())
          .then(p => handleAddProject(p))
      }

    return (
        <div>
            <h2>Add a Project</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
                <br />
                <input type="text" name="image" placeholder="Image URL" onChange={handleChange}/>
                <br />
                <fieldset onChange={handleChange}>
                    <h3>Project Difficulty</h3>
                    <input type="radio" id="one" name="difficulty" value="🧶" />
                    <label for="one">🧶</label><br />
                    <input type="radio" id="two" name="difficulty" value="🧶🧶" />
                    <label for="two">🧶🧶</label><br />
                    <input type="radio" id="three" name="difficulty" value="🧶🧶🧶" />
                    <label for="three">🧶🧶🧶</label><br />
                    <input type="radio" id="four" name="difficulty" value="🧶🧶🧶🧶" />
                    <label for="four">🧶🧶🧶🧶</label><br />
                    <input type="radio" id="five" name="difficulty" placeholder="🧶🧶🧶🧶🧶" />
                    <label for="five">🧶🧶🧶🧶🧶</label><br />
                </fieldset>
                <br />
                <fieldset onChange={handleChange}>
                    <h3>Type of Project</h3>
                    <input type="radio" id="knitting" name="type" value="Knitting" />
                    <label for="knitting">Knitting</label><br />
                    <input type="radio" id="embroidery" name="type" value="Embroidery" />
                    <label for="embroidery">Embroidery</label><br />
                    <input type="radio" id="crochet" name="type" value="Crochet" />
                    <label for="crochet">Crochet</label><br />
                    <input type="radio" id="sewing" name="type" value="Sewing" />
                    <label for="sewing">Sewing</label><br />
                </fieldset>
                <br />
                <input type="text" name="description" placeholder="Description" onChange={handleChange}/>
                <br />
                <button type="submit" >Add Project</button>
            </form>
        </div>
    )
}

export default AddProject;