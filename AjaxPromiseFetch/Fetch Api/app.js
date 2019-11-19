 function getTextFile(){

fetch("example.txt")
.then(response => response.text())//responsumuzun text halini dönmüş olduk. return yapmış olduk
.then(data=>console.log(data))
.catch(err => console.log(err));
 }

function getJsonFile() { //local bir json dosyasından veri alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
 //getTextFile();
 //getJsonFile();

 function getApi(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
 }
 //getApi();

 function getExternalApi(){
fetch("https://api.exchangeratesapi.io/latest")
.then(response=> response.json())
.then(data => console.log(data))
.catch(err => console.log(err));
 }

// getExternalApi();