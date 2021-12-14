
function addEntry(){
    document.getElementById('containerli').innerHTML += `
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nemo neque dolores quasi quisquam, ea, nesciunt dolore laboriosam esse veritatis dolor numquam reiciendis iusto, quidem non eligendi dicta quod beatae.</li>
    `    
}

window.onload = () => {
    document.getElementById("btn").addEventListener("click", addEntry)
}