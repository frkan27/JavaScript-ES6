//Buyponu seçip click eventi atıyoruz..
document.getElementById("btn").addEventListener("click",function(){

//XMLHttpRequest
//objemizi oluşturuyoeuz.
const xhr=new XMLHttpRequest();

xhr.onload=function(){
    if(this.status===200){
        document.getElementById("ajax").textContent=this.responseText;
    }//Div imizin text contentine responsu yazdırıyoruz...
}

xhr.open("GET","example.txt",true);

xhr.send();

})