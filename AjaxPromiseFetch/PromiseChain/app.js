function getData(data){//promise objesi döndüren fonksiyon
    return new Promise(function(resolve,reject){
        //resolve:Olumlu sonuç ,reject:Olumsuz sonuç dönerken.
    setTimeout(function(){
        // resolve("Olumlu sonuç");
      //  reject("olumsuz sonuç");
      if(typeof data === "string")
      {
          //olumlu
          resolve(data);
        
      }
      else{
          //olumsuz
          reject(new Error("String ifade giriniz"));
      }
    },3000);

    });

}
// getData(12).then(function(response){
//     console.log("gelen değer"+response);
// }).catch(function(err){
// console.log(err)
// });
//Üstteki fonksiyonu Arrow functiona çevirelim
getData(12)
.then(response => console.log("gelen değer "+response))
.catch(err => console.log(err));//Tek değer olduğu için {} parantezlere gerek yok...


//resolve un içindeki sonuç u response la yakalıyoruz..
// getData("Merhaba").then(function(response){
// console.log(response);
// });

// rejectle gelen olumsuz değeri catch le yakalıyoruz.
// getData("Merhaba").catch(function(err){
//     console.log(err);
//      });

//1 tane catch ama 1 den çok then kullanabilşriz.Promise chain yapısı.