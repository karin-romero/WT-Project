
const $cards = document.querySelector(".featured__filter"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
$cardContent = [
{   
    id:9,
    title:"Extra Largo Rodeo BQ",
    img:"img/featured/feature-9.jpg",
    price:"4.44",
    style:"background-image: url('img/featured/feature-9.jpg');",
    class:"col-lg-3 col-md-4 col-sm-6 mix fresh-meat"
},
{   
    id:10,
    title:"Family King",
    img:"img/featured/feature-10.jpg",
    price:"19.99",
    style:"background-image: url('img/featured/feature-10.jpg');",
    class:"col-lg-3 col-md-4 col-sm-6 mix oranges"
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
    document.getElementById("lista-productos").innerHTML = "";
    $cardContent.forEach(el => {
        $template.getElementById("contentImg").setAttribute("data-setbg",el.img);
        $template.getElementById("contentImg").setAttribute("style",el.style);
        $template.getElementById("contentImg").setAttribute("data-id",el.id);
        $template.getElementById("colContainer").setAttribute("class",el.class);
        $template.querySelector(".nameProduct").innerHTML = el.title;
        //$template.getElementById("price").innerHTML = el.price;
        $template.querySelector('.precio span').innerHTML = el.price;
    
        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });
    $cards.appendChild($fragment);
}