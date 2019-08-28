

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
    var episodioSerie;
    var airDate;
    var personagens;
    
    var novaBox;
    var container;

    var div1;
    var subdiv1;
    var div2;
    var div3;

    var paragrafoPersonagens;
    var paragrafoDataDeEstreia;

    episodios.forEach(episodio => {
        novaBox = document.createElement("div");
        novaBox.classList.add("boxEpisodios");

        div1 = document.createElement("div");
        div1.classList.add("div1");

        titulo= document.createElement("p");
        titulo.innerHTML = episodio.title;
        titulo.classList.add("titulo");

        subdiv1 = document.createElement("div");
        subdiv1.classList.add("subdiv1");

        temporada= document.createElement("p");
        temporada.innerHTML = "Temporada: "+episodio.season;
        temporada.classList.add("pTemporada");

        episodioSerie= document.createElement("p");
        episodioSerie.innerHTML = "Episódio: "+episodio.episode;

        div2 = document.createElement("div");
        div2.classList.add("div2");

        airDate = document.createElement("p");
        airDate.innerHTML = episodio.air_date;

        paragrafoDataDeEstreia = document.createElement("p");
        paragrafoDataDeEstreia.innerHTML = "Data de estreia:"

        div3 = document.createElement("div");
        div3.classList.add("div3");

        personagens= document.createElement("p");
        personagens.innerHTML = episodio.characters;

        paragrafoPersonagens = document.createElement("p");
        paragrafoPersonagens.innerHTML = "Personagens:";

        div1.appendChild(titulo);

        subdiv1.appendChild(temporada);
        subdiv1.appendChild(episodioSerie);

        div1.appendChild(subdiv1);

        div2.appendChild(paragrafoDataDeEstreia);
        div2.appendChild(airDate);

        div3.appendChild(paragrafoPersonagens);
        div3.appendChild(personagens);

        novaBox.appendChild(div1);
        novaBox.appendChild(div2);
        novaBox.appendChild(div3);

        container = document.querySelector("#container-episodios");
        container.appendChild(novaBox); 
    });
    
}



async function fetchPersonagens(){
    return fetch("https://breakingbadapi.com/api/characters")
    .then(resp => resp.json())
    .then(apagarDivEpisodios())
    .then(personagens => criarBox(personagens))
    .catch(err => console.error(err))
    // .finally( () => alert('concluido'))
}   

fetchPersonagens();

async function fetchEpisodios(){
    return fetch("https://breakingbadapi.com/api/episodes")
    .then(resp => resp.json())
    .then(episodios => criarBoxEpisodios(episodios))
    .catch(err => console.error(err))
    // .finally( () => alert('concluido'))
}   

fetchEpisodios();

function apagarDivPersonagens(){
    var divEpisodios = document.querySelector("#container-episodios");
    var divPersonagens = document.querySelector("#container-personagens");
    divPersonagens.classList.add("invisivel");
    divEpisodios.classList.remove("invisivel");
    
    var titulopersonagens = document.querySelector(".titulopersonagens");
    var tituloepisodios =document.querySelector(".tituloepisodios");
    titulopersonagens.classList.remove("opacity1");
    titulopersonagens.classList.add("opacity05");
    tituloepisodios.classList.add("opacity1");

    var filtroepisodios = document.querySelector("#filtroepisodioSpan");
    filtroepisodios.classList.remove("invisivel");
    var filtropersonagens = document.querySelector("#filtronomeSpan");
    filtropersonagens.classList.add("invisivel");

    var filtroepisodios2 = document.querySelector("#filtreporepisodios");
    filtroepisodios2.classList.remove("invisivel");
    var filtropersonagens2 = document.querySelector("#filtreporpersonagens");
    filtropersonagens2.classList.add("invisivel");
}

function apagarDivEpisodios(){
    var divEpisodios = document.querySelector("#container-episodios");
    var divPersonagens = document.querySelector("#container-personagens");
    divEpisodios.classList.add("invisivel");
    divPersonagens.classList.remove("invisivel");

    // troca cor dos titulos
    var titulopersonagens = document.querySelector(".titulopersonagens");
    var tituloepisodios =document.querySelector(".tituloepisodios");
    tituloepisodios.classList.remove("opacity1");
    titulopersonagens.classList.add("opacity1");
    tituloepisodios.classList.add("opacity05");

    //esconde os filtros
    var filtroepisodios = document.querySelector("#filtroepisodioSpan");
    filtroepisodios.classList.add("invisivel");
    var filtropersonagens = document.querySelector("#filtronomeSpan");
    filtropersonagens.classList.remove("invisivel");

    var filtroepisodios2 = document.querySelector("#filtreporepisodios");
    filtroepisodios2.classList.add("invisivel");
    var filtropersonagens2 = document.querySelector("#filtreporpersonagens");
    filtropersonagens2.classList.remove("invisivel");
}


