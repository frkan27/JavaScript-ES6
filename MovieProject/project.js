const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlELement=document.querySelector("#url");
const cardBody=document.querySelectorAll(".card-body")[1];
//2. cardbody i seçiyoruz çünkü delete button u burda onu seçicez.

//UI objesini başlatma

const ui= new UI();

//Ekledikten sonra storage a eklenmesi için Sotorage objesi üretmem gerekiyor.
const storage=new Storage();

//Tüm eventleri yükleme

eventListeners();
//addeventlistener tıklandığında yapılacak işlemler için kullanılır.
function eventListeners(){
    form.addEventListener("submit",addFilm);//Formumuza submit eventi ekliyoruz.
    //submit olduğunda addFilm adındaki fonksiyon çalışır.
    document.addEventListener("DOMContentLoaded",function(){
let films=storage.getFilmsFromStorage();
ui.LoadAllFilms(films);
    });

cardBody.addEventListener("click",deleteFilm);

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
//arayüzden silme işlemi 
function deleteFilm(e){
    //e.target ile tıkladığımız yeri bulabiliriz.
    //biz <a> etiketine tıklayıp silme işleme yapıcaz.
    //a etiketinin id sini alarak bulabiliriz.delete-film
    if(e.target.id==="delete-film"){//eğer tıkladığım yerin id si delete-film ise
      ui.deleteFilmFromUI(e.target);
      //filmi storagedan isme göre silmek istiyorum.bi üste çıktığımda <td>elementi var.
      //bu td elementini 2 önceki kardeşi olan <td> de film isimleri var. textContent le buraya ulaşıp silicem.
      storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

      //işlemler bittikten sonra mesaj göstererlim.

      ui.displayMessage("Başarıyla silindi","success");
    }
}