import React from "react";

function AddProject({ handleAddProject }) {
    return (
        <div>
            <h2>Add a Project</h2>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <br/>
                <input type="text" name="image" placeholder="Image URL" />
                <br/>
                <input type="text" name="difficulty" placeholder="Difficulty" />
                <br/>
                <input type="radio" id="knitting" name="type" value="Knitting" />
                <label for="knitting">Knitting</label><br />
                <input type="radio" id="embroidery" name="type" value="Embroidery" />
                <label for="embroidery">Embroidery</label><br />
                <input type="radio" id="crochet" name="type" value="Crochet" />
                <label for="crochet">Crochet</label><br />
                <input type="radio" id="sewing" name="type" value="Sewing" />
                <label for="sewing">Sewing</label><br/>
                <input type="text" name="description" placeholder="Description"/>
                <br/>
                <button type="submit" >Add Project</button>
            </form>
        </div>
    )
}

export default AddProject;