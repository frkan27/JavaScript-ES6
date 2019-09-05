const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlELement=document.querySelector("#url");

//UI objesini başlatma

const ui=new UI();

//Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);//Formumuza submit eventi ekliyoruz.
    //submit olduğunda addFilm adındaki fonksiyon çalışır.
}

function addFilm(e){
    //Girdiğimiz değeri burda yakalıyoruz.
const title=titleElement.value;
const director=directorElement.value;
const url=urlELement.value;

if(title===""|| director==="" || url===""  ){
    //Bu kutular boşsa hata vericek
    //Hata
}
else{
    //Yeni filmimizi constructorla oluşturuyoruz.Girdiğimiz değerler constructora gidiyor
    const newFilm=new Film(title,director,url);

    ui.addFilmToUI(newFilm);//Arayüze film ekleme
}



   //Bu formun submit edilmesini önlemek için
   e.preventDefault();
}