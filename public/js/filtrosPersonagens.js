var campoFiltro = document.querySelector("#filtrar-nomepersonagens");
campoFiltro.addEventListener("input", function() {

    var arrayBox = document.querySelectorAll(".box");
    if (this.value.length > 0) {
        for (var i = 0; i < arrayBox.length; i++) {
            
            var box = arrayBox[i];
            var h2Nome = box.querySelector(".nomepersonagens");
            var nome = h2Nome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
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


