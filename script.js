let titulo = document.querySelector("#titulo");

titulo.innerText = "Desenvolvimento Extra JS 2"


let link = document.querySelector("a");

link.innerText = "Proz Educação";

let listaDesordenada = document.querySelector("ul")

listaDesordenada.innerHTML = `
    
    <li><a href="https://www.youtube.com/">youtube</a></li>
    <li><a href="https://www.facebook.com/">facebook</a></li>
    <li><a href="https://www.instagram.com/">instagram</a></li>
    `

let listaOrdenada = document.querySelector("#lista-ordenada");

listaOrdenada.innerHTML= `
    <li>Curta</a></li>
    <li>Compartilhe</a></li>
    <li>inscreva-se</a></li>
`