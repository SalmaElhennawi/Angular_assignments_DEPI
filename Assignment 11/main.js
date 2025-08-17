if(JSON.parse(localStorage.getItem("Products"))!= null){
    proContainer = JSON.parse(localStorage.getItem("Products"));
    disPro();
}

var proName = document.getElementById("proName");
var proPrice = document.getElementById("proPrice");
var proCategory = document.getElementById("proCategory");
var proDesc = document.getElementById("proDesc");
var btn = document.getElementById("btn");
var proSearch = document.getElementById("proSearch"); 
var proContainer = [];
var currentIndex = null; 

btn.onclick = function(){
    if(currentIndex === null) {
        var pro= {
            name:proName.value,
            price:proPrice.value,
            category:proCategory.value,
            desc:proDesc.value,
        }
        proContainer.push(pro);
    } else {
        proContainer[currentIndex] = {
            name:proName.value,
            price:proPrice.value,
            category:proCategory.value,
            desc:proDesc.value,
        }
        currentIndex = null; 
        btn.textContent = "Add Product";
    }
    
    localStorage.setItem("Products",JSON.stringify(proContainer));
    disPro();
}
proSearch.onclick=function(){
    searchPro(proSearch.value)
}

function searchPro(proName){
    var AllPro=``
    for(let i = 0; i< proContainer.length;i++){
        if(proContainer[i].name.toLowerCase().includes(proName.toLowerCase()))
            AllPro+=`
         <tr>
            <td>${i + 1}</td> 
            <td>${proContainer[i].name}</td> 
            <td>${proContainer[i].price}</td> 
            <td>${proContainer[i].category}</td> 
            <td>${proContainer[i].desc}</td> 
            <td>
                <button onclick="updatePro(${i})" class="btn update">Update</button>
                <button onclick="delPro(${i})" class="btn delete">Delete</button>
            </td>
        </tr>
        `;
    }
document.getElementById("tbody").innerHTML=AllPro;
}
function disPro(){
    var AllPro = ``;
    for (let i = 0 ; i < proContainer.length; i++){
        AllPro+=` 
        <tr>
            <td>${i + 1}</td> 
            <td>${proContainer[i].name}</td> 
            <td>${proContainer[i].price}</td> 
            <td>${proContainer[i].category}</td> 
            <td>${proContainer[i].desc}</td> 
            <td>
                <button onclick="updatePro(${i})" class="btn update">Update</button>
                <button onclick="delPro(${i})" class="btn delete">Delete</button>
            </td>
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML=AllPro;
}

function delPro(index){
    proContainer.splice(index,1);
    localStorage.setItem("Products",JSON.stringify(proContainer));
    disPro();
    clearForm();
}

function updPro(index){
    proName.value = proContainer[index].name;
    proPrice.value = proContainer[index].price;
    proCategory.value = proContainer[index].category;
    proDesc.value = proContainer[index].desc;
    
    currentIndex = index;
    btn.textContent = "Update Product";
}

function clearForm() {
    proName.value = "";
    proPrice.value = "";
    proCategory.value = "";
    proDesc.value = "";
}