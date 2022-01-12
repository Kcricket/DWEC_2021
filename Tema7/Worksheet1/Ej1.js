
window.onload = () => {
    document.body.innerHTML = `
    <div class="container">
        <h1>Exercise 1</h1>
        <p>Paragraph 1</p>
        <p>Parrafo 2</p>
    </div>
    <button id="btn">Hide All</button>
    `
    $("#btn").on("click", function(){
        $(".container").hide()
    })
}