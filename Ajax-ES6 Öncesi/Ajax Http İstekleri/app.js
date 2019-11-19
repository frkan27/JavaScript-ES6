//Ajax,callback,htpp requestler

class Request{
constructor(){

    this.xhr=new XMLHttpRequest();
}
//Get Request

get(url,callback){//callback göndermemiz lazım
    this.xhr.open("GET",url);//Bağlantı açık

// this.xhr.onload = function(){

//     if(this.status === 200)//this = this.xhr ı gösteriyor
//     {
//         console.log(this.responseText); 
//     }
// }
this.xhr.onload = () => {//arrow function yaparakta sorunu çzöebilirz.This sorununu

    if(this.xhr.status === 200)
    {
        callback(null,this.xhr.responseText); //isteiğimiz bitti.callback fonksiyonuna gönderiyoruz.
    }
    else{
        callback("Hata oluştu",null);

    };
    this.xhr.send();//post request yapmadığmız için içine parametre yazmıyoruz.
}
}
post(url,data,callback){
    this.xhr.open("POST",url);
    //Set reauest header yazıp bakabilirsin.Post la json göndemrek için
    this.xhr.setRequestHeader("Content-type","application/json");//Json verisi

    this.xhr.onload=()=>{
        if(this.xhr.status === 201){
            //Başarılı
            callback(null,this.xhr.responseText);
        }//hata yoksa callback te error umuz null geliyor ve responsumuz geliyor.
        else{//Burda hata varas "hata oluştu yazıyor" ve response muz null geliyor.
            callback("Hata oluştu",null);
        }


    }

    this.xhr.send(JSON.stringify(data));//Json objesini stringe çeviriyoruz.
}
put(url,data,callback){
    this.xhr.open("PUT",url);
    //Set reauest header yazıp bakabilirsin.Put la json göndemrek için
    this.xhr.setRequestHeader("Content-type","application/json");//Json verisi

    this.xhr.onload=()=>{
        if(this.xhr.status === 200){
            //Başarılı
            callback(null,this.xhr.responseText);
        }//hata yoksa callback te error umuz null geliyor ve responsumuz geliyor.
        else{//Burda hata varas "hata oluştu yazıyor" ve response muz null geliyor.
            callback("Hata oluştu",null);
        }


    }

    this.xhr.send(JSON.stringify(data));//Json objesini stringe çeviriyoruz.
}
delete(url,callback){//callback göndermemiz lazım
    this.xhr.open("DELETE",url);//Bağlantı açık



this.xhr.onload = () => {//arrow function yaparakta sorunu çzöebilirz.This sorununu

    if(this.xhr.status === 200)
    {
        callback(null,"Veri silme başarılı"); //isteiğimiz bitti.callback fonksiyonuna gönderiyoruz.
    }
    else{
        callback("Hata oluştu",null);

    };
    this.xhr.send();//post request yapmadığmız için içine parametre yazmıyoruz.
}
}
    


}

const request=new Request();

// const albums=request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//    if(err===null)
//    {
//        console.log(response);//Başarılı
//    }
//    else{
//        console.log(err);//Hatavaldık
//    }
// });

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"thriller"},function(err,album){
//     if(err===null)
//         {
//             console.log(album);//Başarılı
//         }
//         else{
//             console.log(err);//Hatavaldık
//        }
// });

// request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:111,title:"Guncellenen"},function(err,album){
//     if(err===null)//10 id li veriyi güncelliyoruz
//         {
//             console.log(album);//Başarılı. güncellenmiş veri olarak gelicek
//         }
//         else{
//             console.log(err);//Hatavaldık
//        }
// });

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
   if(err===null)
   {
       console.log(response);//Başarılı
   }
   else{
       console.log(err);//Hatavaldık
   }
});