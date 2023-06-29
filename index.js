var product = [{
    id:1,
    img:'https://images.unsplash.com/photo-1625556580790-7ce9101965b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    name: 'The doll ',
    price: 7000,
    description: 'the doll for your pet Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos doloribus dignissimos eum laudantium odit.',
    type: 'toy'
}, {
    id:2,
    img: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    name: 'Petdegree',
    price: 2000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos doloribus dignissimos eum laudantium odit.',
    type: 'food'
}, {
    id:3,
    img: 'https://images.unsplash.com/photo-1522441972941-974509a8d5cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
    name: 'dog shirt lorem',
    price: 5000,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos doloribus dignissimos eum laudantium odit.',
    type: 'shirt'
}];

$(document).ready(()=> {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                     <p style="font-size: .9vw;">${numberWithCommas(product[i].price)}</p>
                </div>`;
        
    }
    $("#productlist").html(html);
})


function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsomething(searchbox) {
    var value = $('#'+searchbox.id).val();
    console.log(value);

    var html = '';
    for (let i = 0; i < product.length; i++) {

        if ( product[i].name.includes(value) ) {
            html += `<div class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                     <p style="font-size: .9vw;">${numberWithCommas(product[i].price)}</p>
                </div>`;
        }    
    }
    if (html == '') {
        $("#productlist").html(`<p>ไม่พบข้อมูล</p>`);
    }else{
        $("#productlist").html(html);
    }

    
}

function searchproduct(productmenu) {
    console.log(productmenu)
    $(".product-items").css('display','none')

    if (productmenu == 'all') {
        $(".product-items").css('display','block') 
    }else{
        $("."+productmenu).css('display','block') 
    }
}
