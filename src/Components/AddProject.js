import React, { useState } from "react";

function AddProject({ handleAddProject }) {
    const [projectInfo, setProjectInfo] = useState({
        name: "",
        image: "",
        difficulty: "",
        type:"",
        description: ""
    })
    
    return (
        <div>
            <h2>Add a Project</h2>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <br />
                <input type="text" name="image" placeholder="Image URL" />
                <br />
                <fieldset>
                    <h3>Project Difficulty</h3>
                    <input type="radio" id="one" name="difficulty" value="🧶" />
                    <label for="one">🧶</label><br />
                    <input type="radio" id="two" name="difficulty" value="🧶🧶" />
                    <label for="two">🧶🧶</label><br />
                    <input type="radio" id="three" name="difficulty" value="🧶🧶🧶" />
                    <label for="three">🧶🧶🧶</label><br />
                    <input type="radio" id="four" name="difficulty" value="🧶🧶🧶🧶" />
                    <label for="four">🧶🧶🧶🧶</label><br />
                    <input type="radio" name="five" placeholder="🧶🧶🧶🧶🧶" />
                    <label for="five">🧶🧶🧶🧶🧶</label><br />
                </fieldset>
                <br />
                <fieldset>
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
                <input type="text" name="description" placeholder="Description" />
                <br />
                <button type="submit" >Add Project</button>
            </form>
        </div>
    )
}

export default AddProject;