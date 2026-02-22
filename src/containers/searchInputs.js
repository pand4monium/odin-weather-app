
export const generateSearchBar = (renderer) => {
    const searchBarInnerHTML = `
    <div id="searchBarContainer">
        <input type="text" id="searchBar" required>
        <button id="searchButton">Search</button>
    </div>
    <div id="unitsInput" class="container">
    </div>
    `

    document.getElementById("searchInputs").innerHTML = searchBarInnerHTML;
    const searchBar = document.getElementById("searchBar");

    document.getElementById("searchButton").addEventListener("click", () => {
        if (searchBar.value) {
            renderer.search = searchBar.value;
            renderer.loadPage();
        }
    })
}