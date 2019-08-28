var botaoVivo = document.querySelector(".filtroVivo");
botaoVivo.addEventListener("click", function() {

    var arrayBox = document.querySelectorAll(".box");
    
    for (var i = 0; i < arrayBox.length; i++) {
        var box = arrayBox[i];
        var pStatus = box.querySelector(".status-personagem");
        var status = pStatus.textContent;

        if(status != "Vivo"){
            box.classList.add("invisivel");
        }else {
            box.classList.remove("invisivel");
        }
    };
});

var botaoMorto = document.querySelector(".filtroMorto");
botaoMorto.addEventListener("click", function() {

    var arrayBox = document.querySelectorAll(".box");
    
    for (var i = 0; i < arrayBox.length; i++) {
        var box = arrayBox[i];
        var pStatus = box.querySelector(".status-personagem");
        var status = pStatus.textContent;

        if(status != "Morto"){
            box.classList.add("invisivel");
        }else {
            box.classList.remove("invisivel");
        }
    };
});

var botaoTodos = document.querySelector(".filtroTodos");
botaoTodos.addEventListener("click", function() {

    var arrayBox = document.querySelectorAll(".box");
    
    for (var i = 0; i < arrayBox.length; i++) {
        var box = arrayBox[i];
        var pStatus = box.querySelector(".status-personagem");
        var status = pStatus.textContent;

        if(status){
            box.classList.remove("invisivel");
        }
    };
});


function filtrotemporada(){
    var temporada = document.querySelector(".filtro-temporada").value;
    
    var arrayBox = document.querySelectorAll(".boxEpisodios");

    for (var i = 0; i < arrayBox.length; i++) {
        var box = arrayBox[i];
        var pTemporada = box.querySelector(".pTemporada");
        var status = pTemporada.textContent;

        if(status != `Temporada: ${temporada}`){
            box.classList.add("invisivel");
        }else {
            box.classList.remove("invisivel");
        }

        if(temporada == "todas"){
            box.classList.remove("invisivel");            
        }
    };
}
