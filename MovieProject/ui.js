function UI(){

}

UI.prototype.addFilmToUI = function(newFilm){
    /*
    <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
     <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> -->*/
//Filmleri tablo olarak eklicez.Üstteki formata göre .
const filmList=document.getElementById("films");
//altgr den sonra virgüle basınca `` bu işaret çıkıyor.ES6 ya özel. yoksa $ işareti çalışmıyor...
filmList.innerHTML += `
<tr>
     <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></img></td>
      <td>${newFilm.title}</td>
      <td>${newFilm.director}</td>
      <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>  
    </tr>
    `;


}

UI.prototype.clearInputs=function(elem1,elem2,elem3){
elem1.value="";
elem2.value="";
elem3.value="";

}

UI.prototype.displayMessage=function(message,type){
    //ilk card-bosy nin altına gelmesini istediğimizden onu seçiyoruz. ". class olduğunu simgeler"
const cardBody=document.querySelector(".card-body");
//Alert divini oluşturuyoruz

const div=document.createElement("div");
div.className=`alert alert-${type}`;//kullandığımız tırnaklar $ işareti falan template literal oluyor.
div.textContent=message;

//card bosy mize yeni bir çocuk olarak bunu eklememiz gerekiyor.
cardBody.appendChild(div);
//Bu kısım 1 snye çalışıp kaybolcak.
setTimeout(function(){
div.remove();
},1000);



}

UI.prototype.LoadAllFilms=function(films){
    const filmList=document.getElementById("films");
    //films objemin içinde dolaşıyoruz bütün filmleri alıp fillList in içine atıyoruz.
    //böylelikle uı da gösteriyoruz...
    films.forEach(function(film){
        filmList.innerHTML +=
        `
<tr>
    <td><img src="${film.url}" class="img-fluid img-thumbnail"></img></td>
   <td>${film.title}</td>
    <td>${film.director}</td>
   <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>  
 </tr>
   `;
    });
}
UI.prototype.deleteFilmFromUI=function(element){//elemente e.target ı göndermiş olduk.project sayfasından.
    //a etiketinin üstünde <td> var onunda üstünde <tr> var
    //tr ulaşıp silmem lazımki her şey silinsin o satırdaki.
    element.parentElement.parentElement.remove();
}