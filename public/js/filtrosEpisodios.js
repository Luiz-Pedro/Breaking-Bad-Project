var campoFiltroEpisodios = document.querySelector("#filtrar-nomeepisodios");
campoFiltroEpisodios.addEventListener("input", function() {

    var arrayBox = document.querySelectorAll(".boxEpisodios");
    if (this.value.length > 0) {
        for (var i = 0; i < arrayBox.length; i++) {
            
            var box = arrayBox[i];
            var h2Nome = box.querySelector(".titulo");
            var titulo = h2Nome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(titulo)) {
                box.classList.add("invisivel");
            } else {
                box.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < arrayBox.length; i++) {
            var box = arrayBox[i];
            box.classList.remove("invisivel");
        }
    }
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
