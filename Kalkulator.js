let tombol = document.querySelector(".Kalkulator-tombol");
let Kalkulator = document.querySelector("#Kalkulator")

tombol.addEventListener("click", function(e){
    let tombolClick = e.target;
    let nilaiTombol = tombolClick.innerText;

    if(nilaiTombol === "C"){
        Kalkulator.value = "";
    } else if(nilaiTombol == "<") {
        Kalkulator.value = Kalkulator.value.slice(0, -1);
    } else if(nilaiTombol == "=") {
        Kalkulator.value = eval(Kalkulator.value);
    } else {
        Kalkulator.value = Kalkulator.value + nilaiTombol
        
    }

    
})