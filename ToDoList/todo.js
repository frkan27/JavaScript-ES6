//Tüm elementleri seçme


const form=document.querySelector("#todo-form");//formu seçiyoruz
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];//ilk cardbody iseçiyoruz.altında alarm göstericez.
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

eventListeners();
function eventListeners(){//Tüm event listenerlar
form.addEventListener("submit",addTodo)//SUbmit olayı olduğunda addTodo çalışır..
document.addEventListener("DOMContentLoaded",loadAllTodosToUI);//Sayfa yüklendiğinde local storage daki bilgiler sayfaya yüklendisn
secondCardBody.addEventListener("click",deleteTodo);//Secondcardbody ye basıldınğında silme işlemi yapıcaz.
filter.addEventListener("keyup",filterTodos);
clearButton.addEventListener("clear",clearAllTodos);

}
function clearAllTodos(e){
    if(confirm("Tümünü silmek istediğinizden emim misiniz?")){
        //Arayüzden todoları silme
        //todoList.innerHTML=""; //yazıp temizleyebiliriz.ama yavaş.
        
        while(todoList.firstElementChild != null){//İlk element null olana kadar silicek.
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");



    }
}
//todo arama işlemii
function filterTodos(e){
const filterValue=e.target.value.toLowerCase();
const listItems=document.querySelectorAll(".list-group-item");//Tüm  <li> leri seçiyoruz.Aramayı içinde yapıcaza çünkü.

listItems.forEach(function(listItem){//eklediğimiz todoların içinde dolaşıyoruz.
    const text=listItem.textContent.toLowerCase();//içindekilerin harflarini küçülyütyoruz.
    if(text.indexOf(filterValue)===-1){//bulamıyorsa -1 dönüyor.
        //bulamadı
        listItem.setAttribute("style","display : none !important");//bu özelliğin önemli olduğunu belirtip diğerini eziyoruz.
    }
    else{
        listItem.setAttribute("style","display : block ");
    }
});




}
function deleteTodo(e){
    if(e.target.className ==="fa fa-remove"){//target nereye basıldığını veriyor.
        e.target.parentElement.parentElement.remove();//classtan önce href e ordanda <li> ya çıkıyoryz ki komple silinsin.
       deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Başarıyla silini");
    }
}
function deleteTodoFromStorage(deletetodo){
let todos=getTodosFromStorage();

todos.forEach(function(todo,index){
    if(todo === deletetodo)
    {
        todos.splice(index,1);//Arrayden değeri silme
    }

});
localStorage.setItem("todos",JSON.stringify(todos));//silinmiş haliyle güncellemiş oluyoruz
}
function loadAllTodosToUI(){//sayfa yüklendiğinde localstorage dan sayfaya yüklensin.
    let todos=getTodosFromStorage();//Storagedaki todoları aldık.

    todos.forEach(function(todo){//todoların içinde geziyoruz.
        addTodoToUI(todo);//her todoyu ekrana ekliyoruz.
    })
}
//ilk fonksiyon
function addTodo(e){
const newTodo=todoInput.value.trim();//İnput a girdiğimiz değeri alıp newtodoya atıyoruz.
//trim()-Baştaki ve sondaki boşlukları siler.
if(newTodo===""){
    /*
       <div class="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
                      </div>
    */
    showAlert("danger","Lütfen bir todo girin");
}
else{
addTodoToUI(newTodo);//Arayüze aldığımız değeri ekle.
addTodoToStorage(newTodo);//Storage a eklicez.
showAlert("success","Başarılı şekilde eklendi...")
}





    e.preventDefault();
}
//Bu fonksiyon storage de varsa alıyor todoları yoksa oluşturuyor... 
function getTodosFromStorage(){//Storageden todoları alma
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        //değerimiz varsa alıyoruz. getıtem ile.
        todos=JSON.parse(localStorage.getItem("todos"));
        //Array çevirmemiz gerekiyor.Bu yüzden json.parse kullanıyoruz.
    }
    return todos;
}
function addTodoToStorage(newTodo){//Eklediğimiz todoları LocalStorage a kaydedeiyoruz
   let todos=getTodosFromStorage();//todoları aldık.
   todos.push(newTodo);//todoları ekledik. local storage a.
   localStorage.setItem("todos",JSON.stringify(todos));//storage ı güncelliyoruz.
}
function showAlert(type,message){
    const alert=document.createElement("div");//div elementi oluşturuyoruz.

    alert.className = "alert alert-${type}";

    alert.textContent=message;
    firstCardBody.appendChild(alert);//todo ekleyin yazısının altında görünmesini sağlıyor.

    //settimeout metodu. zaman ayarlı işleri yapıyor
    setTimeout(function(){
      alert.remove();
    },1000);//1saniye somra silecek
}

function addTodoToUI(newTodo){//string değerini list item olarak UI a eklicek..
/*
<li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>
*/
//List item oluşturma
const listItem=document.createElement("li");//Yeni element oluşturuyoruz.<li> elementi

//Link Oluşturma
const link=document.createElement("a");
link.href="#";
link.className="delete-item";
link.innerHTML=" <i class ='fa fa-remove'></i>";

listItem.className="list-group-item d-flex justify-content-between";

//Text NOte olarak eklicem.Girdiğim inputu.
listItem.appendChild(document.createTextNode(newTodo));//tabloya inputa girdiğimiz değeri ekledik.
listItem.appendChild(link);
//yukardaki tablo görünümünü kazandırdık.


//Todo list e list itemı çocuk olarak ekliyoruz.
todoList.appendChild(listItem);//yani ul'un içine <li> leri ekledik...
todoInput.value="";//içini boşaltıyoruz ekledikten sonra


}