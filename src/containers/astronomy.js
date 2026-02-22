export const generateAstronomy = (renderer) => {
    const astronomyTemplateHTML = `
        <h2>Astronomy</h2>
        <div id="astronomyContainer"></div>
    `

    document.getElementById("astronomyContainer").innerHTML = astronomyTemplateHTML;

}