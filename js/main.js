function criarBox(personagens){

    var nome;
    var imagem;
    var status;
    var apelido;
    var occupation;
    var novaBox;
    var container;

    personagens.forEach(personagem => {
        novaBox = document.createElement("div");
        novaBox.classList.add("box");
    
        imagem= document.createElement("img");
        imagem.src = personagem.img;

        nome = document.createElement("h2");
        nome.classList.add("nomepersonagens");
        nome.innerHTML = personagem.name;

        status = document.createElement("p");
        status.classList.add("status-personagem");
        personagem.status == "Alive" ? status.classList.add("vivo") : status.classList.add("morto");//aplica a classe dependento do status
        personagem.status == "Alive" ? status.innerHTML = "Vivo" : status.innerHTML = "Morto";//traduz o status

        apelido = document.createElement("p");
        apelido.classList.add("apelido-personagem");
        apelido.innerHTML = personagem.nickname;

        occupation = document.createElement("p");
        occupation.classList.add("occupation-personagem");
        occupation.innerHTML = personagem.occupation[0];

        novaBox.appendChild(imagem);
        novaBox.appendChild(nome);
        novaBox.appendChild(status);
        novaBox.appendChild(apelido);
        novaBox.appendChild(occupation);

        container = document.querySelector("#container-personagens");
        container.appendChild(novaBox); 
    });
    
}


function criarBoxEpisodios(episodios){

    var titulo;
    var temporada;
    var personagens;
    var episodioSerie;
    
    var novaBox;
    var container;

    episodios.forEach(episodio => {
        novaBox = document.createElement("div");
        novaBox.classList.add("boxEpisodios");
    
        titulo= document.createElement("h2");
        titulo.innerHTML = episodio.title;

        temporada= document.createElement("p");
        temporada.innerHTML = episodio.season;

        personagens= document.createElement("p");
        personagens.innerHTML = episodio.characters;

        episodioSerie= document.createElement("p");
        episodioSerie.innerHTML = episodio.episode;

        novaBox.appendChild(titulo);
        novaBox.appendChild(temporada);
        novaBox.appendChild(personagens);
        novaBox.appendChild(episodioSerie);

        container = document.querySelector("#container-episodios");
        container.appendChild(novaBox); 
    });
    
}

async function fetchPersonagens(){
    return fetch("https://breakingbadapi.com/api/characters")
    .then(resp => resp.json())
    .then(apagarDivEpisodios())
    .then(personagens => criarBox(personagens))
    .then(opacity1Personagens())
    .catch(err => console.error(err))
    // .finally( () => alert('concluido'))
}   

fetchPersonagens();

async function fetchEpisodios(){
    return fetch("https://breakingbadapi.com/api/episodes")
    .then(resp => resp.json())
    .then(apagarDivPersonagens())
    .then(episodios => criarBoxEpisodios(episodios))
    .then(opacity1Episodios())
    .catch(err => console.error(err))
    // .finally( () => alert('concluido'))
}   

function apagarDivPersonagens(){
    var divEpisodios = document.querySelector("#container-episodios");
    var divPersonagens = document.querySelector("#container-personagens");
    divPersonagens.classList.add("invisivel");
    divEpisodios.classList.remove("invisivel");
}
function apagarDivEpisodios(){
    var divEpisodios = document.querySelector("#container-episodios");
    var divPersonagens = document.querySelector("#container-personagens");
    divEpisodios.classList.add("invisivel");
    divPersonagens.classList.remove("invisivel");
}

function opacity1Personagens(){
    var titulopersonagens = document.querySelector(".titulopersonagens");
    var tituloepisodios =document.querySelector(".tituloepisodios");
    tituloepisodios.classList.remove("opacity1");
    titulopersonagens.classList.add("opacity1");
    tituloepisodios.classList.add("opacity05");
}
function opacity1Episodios(){
    var titulopersonagens = document.querySelector(".titulopersonagens");
    var tituloepisodios =document.querySelector(".tituloepisodios");
    titulopersonagens.classList.remove("opacity1");
    titulopersonagens.classList.add("opacity05");
    tituloepisodios.classList.add("opacity1");
}


