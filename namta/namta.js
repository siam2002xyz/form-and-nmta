const namtaNumber = document.querySelector(".namtaNumber");
const heading = document.querySelector(".heading")
const button = document.querySelector(".button")


button.addEventListener("click", ()=>{
    heading.innerHTML = "";
    

    if(namtaNumber.value == "" || ! (namtaNumber.value - 0)){
      heading.innerHTML = "Namta number is required!"
    }else{
        for(let i = 1; i < 11; i++){
            heading.innerHTML += `${namtaNumber.value}   X   ${i}  =   ${namtaNumber.value * i} <br>`
        }
    }

})