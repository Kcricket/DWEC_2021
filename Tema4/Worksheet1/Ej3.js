
//var h0 = performance.now();
t0 = performance.now()

// window.onreadystatechange = () => {
//         console.log("Time when started loading: "+h)
// }

function tellEnd(){
    //Wont let me declare a var variable
    t1 = performance.now();
    console.log('Page loaded at: '+t1 )
}
function tellStart(){
    console.log('Page started loading at: '+t0)
}
function tellDiference(){
    console.log('The page loading lasted : '+(t1-t0))
}

document.addEventListener('DOMContentLoaded', tellEnd)

window.addEventListener('load', tellStart); 
document.addEventListener('DOMContentLoaded', tellDiference)

    
