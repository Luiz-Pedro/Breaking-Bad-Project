function criarBox(personagens){

    var nome;
    var imagem;
    var status;
    var apelido;
    var novaBox;
    var container;

    personagens.forEach(i => {
        novaBox = document.createElement("div");
        novaBox.classList.add("box");
    
        imagem= document.createElement("img");
        imagem.src = i.img;

        nome = document.createElement("h2");
        nome.innerHTML = i.name;

        status = document.createElement("p");
        status.classList.add("status-personagem");
        i.status == "Alive" ? status.classList.add("vivo") : status.classList.add("morto");//aplica a classe dependento do status
        i.status == "Alive" ? status.innerHTML = "Vivo" : status.innerHTML = "Morto";//traduz o status

        apelido = document.createElement("p");
        apelido.classList.add("apelido-personagem");
        apelido.innerHTML = i.nickname;

        novaBox.appendChild(imagem);
        novaBox.appendChild(nome);
        novaBox.appendChild(status);
        novaBox.appendChild(apelido);

        container = document.querySelector("#container-personagens");
        container.appendChild(novaBox); 
    });
    
}

var buscarpersonagens = document.querySelector("#buscarpersonagens");
buscarpersonagens.addEventListener("click", 

    async function fetchAPI(){
        return fetch("https://breakingbadapi.com/api/characters")
        .then(resp => resp.json())
        .then(personagens => criarBox(personagens))
        .catch(err => console.error(err))
        // .finally( () => alert('concluido'))
    }   
);



