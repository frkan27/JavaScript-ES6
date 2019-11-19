class Request {

    get(url) {//get request
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))//tekrar then yapma sebebim response.json da promise döner datayı almak için tekrar then yaptık.
                .catch(err => reject(err));
        })
    }
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())//response objesisin içinde json verimizi alıypruz.dönüyoruz.
                .then(data => resolve(data))//json ı alıyoruz.
                .catch(err => reject(err));
        })

    }
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())//response objesisin içinde json verimizi alıypruz.dönüyoruz.
                .then(data => resolve(data))//json ı alıyoruz.
                .catch(err => reject(err));
        })
    }
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch("https://jsonplaceholder.typicode.com/albums/1",{
             method:"DELETE"
            })
            .then(response=>resolve("Veri silme başarılı"))
            .catch(err=>reject(err));

        });
    }
}

const request = new Request();

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Tryler"})
// .then(newAlbum=>console.log(newAlbum))
// .catch(err=>console.log(err));




// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then(albums => {//gelen data yı albums le yakalamış oluyoruz
//        // albums = data;//gelen veriyi albumse eşitlşiyorum.
//         console.log(albums);
//     })
//     .catch(err => console.log(err));

//  console.log(albums); // fetch asenkron oldugu ıcın burası undefined gelicek 
//bu yüzden then içerisnde albums'e datayı atıyoruz


// request.put("https://jsonplaceholder.typicode.com/albums/1", { userId: 10, title: "Biseyler" })
//     .then(newAlbum => console.log(newAlbum))
//     .catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message=>console.log(message))//resolve dan gelen mesajı yazdırıyoruz.verisilme başarılı
.catch(err=>console.log(err));