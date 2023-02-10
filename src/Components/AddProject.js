import React, { useState } from "react";

function AddProject({ handleAddProject }) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [type, setType] = useState("")

    const newProjectObject ={
        name,
        image,
        difficulty,
        type,
        description
    }

    console.log(newProjectObject)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3001/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "name": name,
            "image": image, 
            "difficulty": difficulty,
            "type": type,
            "description": description
          })
        })
          .then(r => r.json())
          .then(p => handleAddProject(p))
      }

    return (
        <div>
            <h2>Add a Project</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="name" 
                placeholder="Name" 
                value={name} 
                onChange={e => setName(e.target.value)}/>
                <br />
                <input type="text" 
                name="image" 
                placeholder="Image URL" 
                value={image} 
                onChange={e => setImage(e.target.value)}/>
                <br />
                <fieldset value={difficulty} onChange={e => setDifficulty(e.target.value)}>
                    <h3>Project Difficulty</h3>
                    <input type="radio" id="one" name="difficulty" value="🧶" />
                    <label for="one">🧶</label><br />
                    <input type="radio" id="two" name="difficulty" value="🧶🧶" />
                    <label for="two">🧶🧶</label><br />
                    <input type="radio" id="three" name="difficulty" value="🧶🧶🧶" />
                    <label for="three">🧶🧶🧶</label><br />
                    <input type="radio" id="four" name="difficulty" value="🧶🧶🧶🧶" />
                    <label for="four">🧶🧶🧶🧶</label><br />
                    <input type="radio" id="five" name="difficulty" value="🧶🧶🧶🧶🧶" />
                    <label for="five">🧶🧶🧶🧶🧶</label><br />
                </fieldset>
                <br />
                <fieldset value={type} onChange={e => setType(e.target.value)}>
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
                <input type="text" 
                name="description" 
                placeholder="Description" 
                value={description} 
                onChange={e => setDescription(e.target.value)}/>
                <br />
                <button type="submit" >Add Project</button>
            </form>
        </div>
    )
}

export default AddProject;