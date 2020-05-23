
const $cards = document.querySelector(".featured__filter"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
$cardContent = [
{   
    title:"Extra Largo Rodeo BQ",
    img:"img/featured/feature-9.jpg",
    price:"4.44",
    style:"background-image: url('img/featured/feature-9.jpg');"
},
{   
    title:"Family King",
    img:"img/featured/feature-10.jpg",
    price:"19.99",
    style:"background-image: url('img/featured/feature-10.jpg');"
}
];

/*$cardContent.forEach(el => {
    $template.getElementById("contentImg").setAttribute("data-setbg",el.img);
    $template.getElementById("contentImg").setAttribute("style",el.style);

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});
$cards.appendChild($fragment);*/
//console.log("hola: "+$cards);
function cargarMenu(params) {
    document.getElementById("tituloMenu").innerHTML = "Menú "+params;
    document.getElementById("contenMenu").innerHTML = "";
    $cardContent.forEach(el => {
        $template.getElementById("contentImg").setAttribute("data-setbg",el.img);
        $template.getElementById("contentImg").setAttribute("style",el.style);
    
        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });
    $cards.appendChild($fragment);
}