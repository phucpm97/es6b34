let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

function img() {
    // console.log(product);
    renderHTML(dataGlasses);
}
img();

function renderHTML(data) {
    let content = "";
    for (var i = 0; i < data.length; i++) {
        var product = data[i];
        content += `
        <tr> 
        <td > <img src="${product.src}" width=33%  onclick="chinh(${i})" /> </td>
        </tr>
    `;
    }
    document.getElementById("vglassesList").innerHTML = content;
}

function chinh(id) {
    renderPicture(id);
    // document.getElementById("haiz").innerHTML = "hinhodau";
    renderAction(id);
}

function renderPicture(id) {
    let content = "";
    console.log(id);
    for (var i = 0; i < dataGlasses.length; i++) {
        var product = dataGlasses[i];
        // console.log(product.virtualImg)
        if (id === i) {
            // console.log(product.virtualImg);
            content = `  <img src="${product.virtualImg}"  /> `;
            document.getElementById("avatar").innerHTML = content;
        }
    }
};

function renderAction(id) {
    let content = "";
    console.log(id);
    for (var i = 0; i < dataGlasses.length; i++) {
        var product = dataGlasses[i];
        // console.log(product.virtualImg)
        if (id === i) {
            // console.log(product.virtualImg);
            content += `
            <tr>
                <h1 style="font-size:20px">${product.name}-${product.brand} (${product.color})</h1>
                <span style="background-color:red">$${product.price}  </span>
                <span style="color:green">   Stocking</span>
                <p>${product.description}</p>
              
            </tr>
        `;
            document.getElementById("glassesInfo").innerHTML = content;
        }
    }
};

function getEle(id) {
    return document.getElementById(id);
}