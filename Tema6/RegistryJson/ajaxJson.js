window.onload = () => {
    // const xmlhttp = new XMLHttpRequest();

    // xmlhttp.onload = function() {
    // console.log(this.responseText)
    // const myObj = JSON.parse(this.responseText);
    // document.getElementById("demo").innerHTML = myObj.name;
    // }
    // xmlhttp.open("GET", "data.php", true);
    // xmlhttp.send();

    fetch("data.txt").response.text().then(data=>console.log(data));
}