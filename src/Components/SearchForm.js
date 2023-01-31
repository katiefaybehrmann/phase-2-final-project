import React from "react";

function SearchForm({handleProjectTypeChange}) {
    return (
        <div className="searchbar">
            <form onChange={handleProjectTypeChange}>
                <label>
                    What craft do you want to do?
                </label><br/><br/>
                <input type="radio" id="all" name="type" value="All" />
                <label for="all">All</label><br/>
                <input type="radio" id="knitting" name="type" value="Knitting" />
                <label for="knitting">Knitting</label><br/>
                <input type="radio" id="embroidery" name="type" value="Embroidery" />
                <label for="embroidery">Embroidery</label><br/>
                <input type="radio" id="crochet" name="type" value="Crochet" />
                <label for="crochet">Crochet</label><br/>
                <input type="radio" id="sewing" name="type" value="Sewing"/>
                <label for="sewing">Sewing</label><br/>
            </form>
        </div>
    )
}

export default SearchForm;