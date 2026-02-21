
export const generateSearchBar = (renderer) => {
    const searchBarInnerHTML = `
    <div id="searchBarContainer">
        <input type="text" id="searchBar" class="container" required>
        <button id="searchButton" class="container">Search</button>
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