
window.onload = () => {
    document.body.innerHTML = `
    <div class="container">
    <ol>
        <h2>Lista 1:</h2>
        <li>Tortilla</li>
        <li>Jamon</li>
        <li>Queso</li>
    </ol>

    <ul>
        <h2>Lista 2:</h2>
        <li>Cola</li>
        <li>Leche</li>
        <li>Te</li>
    </ul>
    </div>
    <button class="btn">Borrar</button>
    `
    $(".btn").on("click", function(){
        $("ul li").first().hide()
        $("ol li").first().hide()
    })
}



