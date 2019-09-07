//storage objesi oluşturuyoruz.
function Storage(){

}
Storage.prototype.addFilmToStorage=function(newFilm){
    //Storagedaki filmleri aldık.
   let films=this.getFilmsFromStorage();
//arrayimize aldığımız filmi atıyoruz.
   films.push(newFilm);
//film arrayimizi string hale çevirip tekrar local storage a yazmış olduk.
localStorage.setItem("films",JSON.stringify(films));

}

//Storage da film varsa onları array olarak getiriyoruz.
Storage.prototype.getFilmsFromStorage=function(){
    let films;

    if(localStorage.getItem("films")=== null){
        films=[];
    }
    else{
        films=JSON.parse(localStorage.getItem("films"));
        //json.parse ile array haline çevirmiş olduk.Local storageda string halde
    }
    return films;
}

Storage.prototype.deleteFilmFromStorage=function(filmTitle){
    let films=this.getFilmsFromStorage();//Storagedan filmimizi aldık.

    //her bir film üzerinde gezinmemiz gerekiyor
    films.forEach(function(film,index){
        if(film.title===filmTitle){//bulduğumuz film.title gönderdiğimiz filmTitle a eşitse
          films.splice(index,1);//bulduğumuz objeyi siliyoruz.
        }
    });
    //Sildikten sonra localstorage yi güncelliyoruz.
    localStorage.setItem("films",JSON.stringify(films));
}