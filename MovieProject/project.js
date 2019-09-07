const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlELement=document.querySelector("#url");

//UI objesini başlatma

const ui= new UI();

//Ekledikten sonra storage a eklenmesi için Sotorage objesi üretmem gerekiyor.
const storage=new Storage();

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
    ui.displayMessage("Tüm alanları doldurun","danger");
    //Boş bıraktığımızda gelmesini istediğimiz mesajı ve tipi girdik.
}
else{
    //Yeni filmimizi constructorla oluşturuyoruz.Girdiğimiz değerler constructora gidiyor
    const newFilm=new Film(title,director,url);

    ui.addFilmToUI(newFilm);//Arayüze film ekleme
    storage.addFilmToStorage(newFilm);//Storage a film ekleme
    ui.displayMessage("Başarıyla eklendi","success");
}
//addFilm den hemen sonra çağırıyoruzki ekleme işlemi yaptıktan sonra silsin kutuları
ui.clearInputs(titleElement,directorElement,urlELement);


   //Bu formun submit edilmesini önlemek için
   e.preventDefault();
}