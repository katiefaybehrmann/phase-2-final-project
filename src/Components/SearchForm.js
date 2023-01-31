import React from "react";

function SearchForm() {
    return (
        <div className="searchbar">
            <form>
                <label>
                    What craft do you want to do?
                </label><br/><br/>
                <input type="radio" id="knitting" name="knitting" value="Knitting" />
                <label for="knitting">Knitting</label><br/>
                <input type="radio" id="embroidery" name="embroidery" value="Embroidery" />
                <label for="embroidery">Embroidery</label><br/>
                <input type="radio" id="crochet" name="crochet" value="Crochet" />
                <label for="crochet">Crochet</label><br/>
                <input type="radio" id="sewing" name="sewing" value="Sewing"/>
                <label for="sewing">Sewing</label><br/>
            
            </form>
        </div>
    )
}

export default SearchForm;