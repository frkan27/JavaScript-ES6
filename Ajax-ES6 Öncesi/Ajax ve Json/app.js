document.getElementById("ajax").addEventListener("click",getAllEmployees);
//butonu seçip click eventi atıyoruz...
function getAllEmployees(){
    const xhr=new XMLHttpRequest();
//obje oluşturduk.
    xhr.open("GET","employees.json",true);
//bağlantımızı oluşturduk..
  xhr.onload=function()//response muz geldiğinde çalışıcak. 
  {
   let list=document.getElementById("employees");

     if(this.status===200){
    const employees=JSON.parse(this.responseText);//json objeleri barınddıran arraye sahip oluyoruz.
    employees.forEach(function(employee){
        list.innerHTML+=`
        <tr>
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        </tr>
        
        
        `;
    });

  }



 }



    xhr.send();
}