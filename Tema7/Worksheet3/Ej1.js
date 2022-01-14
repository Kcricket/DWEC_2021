$(document).ready(function(){
    //PAint table
    console.log("hola")
    document.body.innerHTML = `
    <table>
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
    `
    //Edit table
    $("table").css("height", "300px").css("width", "300px").css("background-color", "red")
    $("tr:lt(2)").css("background-color", "blue")
    $("tr").slice(3).css("background-color", "green")

})