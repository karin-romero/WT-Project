
const $cards = document.querySelector(".featured__filter"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
$burger_king = [
{   
    id:1,
    title:"Combo 1 Whopper® con Queso",
    img:"img/food-menu/burger-king/combo-1.png",
    price:"8.04",
    style:"background-image: url('img/food-menu/burger-king/combo-1.png');",
    class:"col-lg-3 col-md-4 col-sm-6 mix oranges"
},
{   
    id:2,
    title:"Combo 2 BK® Stacker Doble con Queso",
    img:"img/food-menu/burger-king/combo-2.png",
    price:"7.94",
    style:"background-image: url('img/food-menu/burger-king/combo-2.png');",
    class:"col-lg-3 col-md-4 col-sm-6 mix oranges"
},
{   
    id:3,
    title:"Combo 3 Hamburguesa Doble con Queso y Tocino",
    img:"img/food-menu/burger-king/combo-3.png",
    price:"7.44",
    style:"background-image: url('img/food-menu/burger-king/combo-3.png');",
    class:"col-lg-3 col-md-4 col-sm-6 oranges"
},
{   
    id:4,
    title:"Combo 4 Whopper Jr® con Queso",
    img:"img/food-menu/burger-king/combo-4.png",
    price:"5.64",
    style:"background-image: url('img/food-menu/burger-king/combo-4.png');",
    class:"col-lg-3 col-md-4 col-sm-6 mix oranges"
},
{   
    id:5,
    title:"Combo 5 BK® ¼ de Libra con Queso",
    img:"img/food-menu/burger-king/combo-5.png",
    price:"7.44",
    style:"background-image: url('img/food-menu/burger-king/combo-5.png');",
    class:"col-lg-3 col-md-4 col-sm-6 oranges"
},
{   
    id:6,
    title:"Combo 6 Ranchera con Queso Tocino y Huevo",
    img:"img/food-menu/burger-king/combo-6.png",
    price:"6.94",
    style:"background-image: url('img/food-menu/burger-king/combo-6.png');",
    class:"col-lg-3 col-md-4 col-sm-6 mix oranges"
},
{   
    id:7,
    title:"Ensaladas Wrap César",
    img:"img/food-menu/burger-king/wrap-césar-1.png",
    price:"5.99",
    style:"background-image: url('img/food-menu/burger-king/wrap-césar-1.png');",
    class:"col-lg-3 col-md-4 col-sm-6 mix fresh-meat"
},
{   
    id:8,
    title:"Ensalada César con Filete",
    img:"img/food-menu/burger-king/ensalada-césar-con-filete-2.png",
    price:"7.19",
    style:"background-image: url('img/food-menu/burger-king/ensalada-césar-con-filete-2.png');",
    class:"col-lg-3 col-md-4 col-sm-6 mix fresh-meat"
}
],
$el_espaniol = [
    {   
        id:9,
        title:"Sánduche Tradicional",
        img:"img/food-menu/el-español/espaniol-1.jpg",
        price:"4.25",
        style:"background-image: url('img/food-menu/el-español/espaniol-1.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 mix fresh-meat"
    },
    {   
        id:10,
        title:"Sanduche Filete de Pollo",
        img:"img/food-menu/el-español/espaniol-2.jpg",
        price:"4.99",
        style:"background-image: url('img/food-menu/el-español/espaniol-2.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 mix fresh-meat"
    },
    {   
        id:11,
        title:"Cubano",
        img:"img/food-menu/el-español/espaniol-3.jpg",
        price:"3.99",
        style:"background-image: url('img/food-menu/el-español/espaniol-3.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 fresh-meat"
    },
    {   
        id:12,
        title:"Súper Cubano",
        img:"img/food-menu/el-español/espaniol-4.jpg",
        price:"8.50",
        style:"background-image: url('img/food-menu/el-español/espaniol-4.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 mix fresh-meat"
    },
    {   
        id:13,
        title:"Bocadillo de Jamón Serrano",
        img:"img/food-menu/el-español/espaniol-5.jpg",
        price:"5.50",
        style:"background-image: url('img/food-menu/el-español/espaniol-5.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 fresh-meat"
    },
    {   
        id:14,
        title:"Tartine de Jamón Serrano",
        img:"img/food-menu/el-español/espaniol-6.jpg",
        price:"4.75",
        style:"background-image: url('img/food-menu/el-español/espaniol-6.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 mix fresh-meat"
    },
    {   
        id:15,
        title:"Ensalada de Filete de Pollo",
        img:"img/food-menu/el-español/espaniol-7.jpg",
        price:"4.99",
        style:"background-image: url('img/food-menu/el-español/espaniol-7.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 mix fresh-meat"
    }
],
$mcdonalds = [
    {   
        id:16,
        title:"McCombo™ Big Mac™",
        img:"img/food-menu/mcdonalds/combo-1.jpg",
        price:"6.69",
        style:"background-image: url('img/food-menu/mcdonalds/combo-1.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 mix oranges"
    },
    {   
        id:17,
        title:"McCombo Big Mac Bacon",
        img:"img/food-menu/mcdonalds/combo-2.jpg",
        price:"7.50",
        style:"background-image: url('img/food-menu/mcdonalds/combo-2.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 mix oranges"
    },
    {   
        id:18,
        title:"McCombo™ Cuarto de Libra con Queso",
        img:"img/food-menu/mcdonalds/combo-3.jpg",
        price:"6.69",
        style:"background-image: url('img/food-menu/mcdonalds/combo-3.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 oranges"
    },
    {   
        id:19,
        title:"McCombo™ Doble Cuarto de Libra con Queso",
        img:"img/food-menu/mcdonalds/combo-4.jpg",
        price:"7.85",
        style:"background-image: url('img/food-menu/mcdonalds/combo-4.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 mix oranges"
    },
    {   
        id:20,
        title:"McCombo™ Doble McNífica",
        img:"img/food-menu/mcdonalds/combo-5.jpg",
        price:"7.85",
        style:"background-image: url('img/food-menu/mcdonalds/combo-5.jpg');",
        class:"col-lg-3 col-md-4 col-sm-6 oranges"
    },
    {   
        id:21,
        title:"McCombo™ McNífica™",
        img:"img/food-menu/mcdonalds/combo-6.jpg",
        price:"6.69",
        style:"background-image: url('img/food-menu/mcdonalds/combo-6.jpg');",
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
    let $cardContent = [];
    switch (params) {
        case "Burger King":
            $cardContent=$burger_king;
            break;
        case "El Español":
            $cardContent=$el_espaniol;
            break;
        case "Mcdonald’s":
            $cardContent=$mcdonalds;
            break;
        default:
            break;
    }
    document.getElementById("tituloMenu").innerHTML = "Menú "+params;
    document.getElementById("lista-productos").innerHTML = "";
    $cardContent.forEach(el => {
        $template.querySelector(".featured__item__pic.set-bg").setAttribute("data-setbg",el.img);
        $template.querySelector(".featured__item__pic.set-bg").setAttribute("style",el.style);
        $template.querySelector(".featured__item__pic.set-bg").setAttribute("data-id",el.id);
        $template.getElementById("colContainer").setAttribute("class",el.class);
        $template.querySelector(".nameProduct").innerHTML = el.title;
        //$template.getElementById("price").innerHTML = el.price;
        $template.querySelector('.precio span').innerHTML = el.price;
    
        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
    });
    $cards.appendChild($fragment);
}