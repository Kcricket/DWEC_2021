//Create table and paint it with events
function paintRed(target){
    target.style.backgroundColor ='red'
}
function paintBlue(target){
    target.style.backgroundColor ='blue'
}
function isCtrlPressed(e){
    //Checks if control is pressed when entering the target box
   if(e.ctrlKey){
    //Target is so useful..
    paintRed(e.target)
   }else if(e.shiftKey){
       paintBlue(e.target)
   }else if(e.altKey){
       //This deletes the cell borders
        e.target.style.border = ''
   }else if(e.key == 'd'){
       //This deletes te whole table
       document.body.innerHTML =''
   }
}


window.onload = () => {
    //Separate style props with ';'
    document.body.innerHTML = `
        <div id='mydiv' style="display:flex; justify-content:center; align-items:center">
            <table id='table' style="width:100px; height:100px; background-color:green">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    `
    var td = document.querySelectorAll('td')
    td.forEach(element => {
        element.style.border='1px solid black'
        element.addEventListener('mouseover', isCtrlPressed)
        //element.addEventListener('mouseover', paintRed)
    });
}
