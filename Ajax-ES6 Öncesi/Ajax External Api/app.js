document.getElementById("change").addEventListener("click",change);



function change(){
const xhr=new XMLHttpRequest();

//Uzaktaki rest api ye bağlanıyoruz.Get yapıyoruz
xhr.open("GET","https://api.exchangeratesapi.io/latest");

xhr.onload=function(){

    if(this.status){
        const response=JSON.parse(this.responseText);
      // console.log(response.rates.TRY);

      const rate=response.rates.TRY //gelen json dosyasından oranları bulup ordan try yi seçiyoruz
        const usd=response.rates.USD  
      const amount=Number(document.getElementById("amount").value); //gelen değer string
       
      document.getElementById("tl").value=amount*rate;
      //tl textinin değerine amount*rate iatıyoruz..
//console.log(response.rates.USD);
        document.getElementById("dolar").value=amount*usd;
    }
}



xhr.send();
}