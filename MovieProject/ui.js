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