import React from "react";

function SearchForm() {
    return (
        <div className="searchbar">
            <form>
                <label>
                    Search by materials!
                </label><br/><br/>
                <input type="checkbox" id="yarn" name="yarn" value="Yarn" />
                <label for="yarn">Yarn</label><br/>
                <input type="checkbox" id="knittingNeedles" name="knittingNeedles" value="Knitting Needles" />
                <label for="knittingNeedles">Knitting Needles</label><br/>
                <input type="checkbox" id="embroidery" name="embroidery" value="Embroidery Floss" />
                <label for="embroidery">Embroidery Floss</label><br/>
                <input type="checkbox" id="crochetHook" name="crochetHook" value="Crochet Hook"/>
                <label for="crochetHook">Crochet Hook</label><br/>
                <input type="checkbox" id="needles" name="needles" value="Needles"/>
                <label for="checkbox">Sewing Needles</label>
            </form>
        </div>
    )
}

export default SearchForm;