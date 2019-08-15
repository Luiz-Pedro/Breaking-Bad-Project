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
        occupation.innerHTML = personagem.occupation;

        novaBox.appendChild(imagem);
        novaBox.appendChild(nome);
        novaBox.appendChild(status);
        novaBox.appendChild(apelido);
        novaBox.appendChild(occupation);

        container = document.querySelector("#container-personagens");
        container.appendChild(novaBox); 
    });
    
}

async function fetchPersonagens(){
    return fetch("https://breakingbadapi.com/api/characters")
    .then(resp => resp.json())
    .then(personagens => criarBox(personagens))
    .then(opacityback())
    .catch(err => console.error(err))
    // .finally( () => alert('concluido'))
}   

fetchPersonagens();

// async function fetchEpisodios(){
//     return fetch("https://breakingbadapi.com/api/episodes")
//     .then(resp => resp.json())
//     .then(personagens => criarBox(personagens))
//     .then(opacityback())
//     .catch(err => console.error(err))
//     // .finally( () => alert('concluido'))
// }   

function opacityback(){
    var titulopersonagens = document.querySelector(".titulopersonagens");
    var tituloepisodios =document.querySelector(".tituloepisodios");
    titulopersonagens.classList.add("opacityback");
    tituloepisodios.classList.add("opacitydown");
}
function opacitydown(){
    var titulopersonagens = document.querySelector(".titulopersonagens");
    var tituloepisodios =document.querySelector(".tituloepisodios");
    titulopersonagens.classList.add("opacitydown");
    tituloepisodios.classList.add("opacityback");
}
