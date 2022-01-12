

window.onload = () => {
    document.body.innerHTML = `
    <div class="wrapper">
    <div class="noticia">
        <h1 class="title">Noticia 1</h1>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus velit, minus, odio eum corrupti pariatur ut quae fuga reprehenderit saepe eos atque cum ipsa veniam! Rerum vitae earum rem hic.</p>
    </div>
    <div class="noticia">
        <h1 class="title">Noticia 2</h1>
        <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam perferendis, cumque molestias totam reprehenderit dolore non dolorem nostrum. Natus officia cupiditate consectetur reiciendis quaerat numquam pariatur assumenda ea aliquam vero.</p>
    </div>
    <div class="noticia">
        <h1 class="title">Noticia 3</h1>
        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rerum libero blanditiis ab ex itaque corrupti aspernatur nisi dolor natus voluptatem placeat, quis, beatae a, obcaecati autem nulla cumque iste.</p>
    </div>
    <button class="btn">Bigger</button>
    <button class="btn">Smaller</button>
    </div>
    
    `
    //Font size manage
    $(".btn:eq(0)").on("click", function(){
        var size = parseInt($("h1").css("font-size"))
        console.log("stage 1: "+size)
        if(size < 63){
            size+=15;
            $("h1").css("font-size", size+"px")
        }else{
            alert("maximum size")
        }
    })

    //Titles Hidden
    $("h1").on("click", function(){
        $(this).hide()
    })
    
    //Text Body onmouseover 
    $(".text").on("mouseenter", function(){
        $(this).parent().css("background-color", "red")
    })
    $(".text").on("mouseleave", function(){
        $(this).parent().css("background-color", "white")
    })
}

