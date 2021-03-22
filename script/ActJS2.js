var h1 = document.getElementById("nombre");
h1.innerText = "Susana"; 

var h2 = document.getElementById("apellidos");
h2.innerText = "Enriquez";

var lis = document.getElementsByTagName("li");
lis[0].innerText += " 03/03/2001";
lis[1].innerText += " Mujer";
lis[2].innerText += " 20";


var card_title = document.getElementById("title");
card_title.innerText = "Frases Motivacionales"; 

var card = document.getElementById ("frase");
var p = card.getElementsByTagName ("p");
p[0].innerText = "Esta frase debe motivarte";

var footer = document.getElementsByTagName ("footer");
footer[0].innerText = "FORBES ";
footer[0].innerHTML += "<cite title= El teacher >MGA</cite >";

var frases = [
    {
    texto: "Esta frase la digo yo",
    lugar: "Forbes",
    persona: "MGA", 
},
{
    texto: "Aprendan primero",
    lugar: "NYC",
    persona: "Kevin", 
},

{
    texto: "Siempre juntos",
    lugar: "Casa",
    persona: "Alexis", 
},
];

for (var i = 0; i < frases.length; i++) {
    const frase = frases[i];

    document.body.innerHTML += `
    <div class="card">
        <div class="card-header">
            Frases Motivacionales
        </div>
        <div class="card-body" >
            <blockquote class="blockquote mb-0">
                <p>${frase.texto}</p>
                <footer class="blockquote-footer"> ${frase.lugar} <cite title="El teacher">${frase.persona}</cite>
                </footer>
            </blockquote>
        </div> 
    </div>`
}