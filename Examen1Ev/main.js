const texto = "Lorem ipsum dolor sit amet consectetur adipiscing elit gravida cras proin justo, diam pulvinar in leo aenean morbinunc lobortis nibh. Sollicitudin mattis turpis neque condimentum posuere volutpat dignissim cras, platea egestaspharetra etiam sagittis a et, habitasse placerat mi malesuada facilisis velit ligula. Lacinia cras justo cum viverragravida egestas neque dictum, auctor sociosqu mauris lacus erat placerat condimentum, varius fames praesent laoreetest donec suscipit"
crearBotones();
// Ej 1
const filtrar = (textoSinFiltrar, caracter) => {
    const palabrasFiltrada = [];

    textoSinFiltrar.forEach(palabra => {
        if (!palabra.includes(caracter)) {
            palabrasFiltrada.push(palabra);
        }
    });

    return palabrasFiltrada;
}

const filterOnKeyUp = () => {
    const textoFiltrado = document.getElementById("texto");
    const textoValue = textoFiltrado.innerText.split(" "); //Junto letra por letra, separado palabra por palabra
    const caracter = document.getElementById("filtro").value;
    textoFiltrado.innerText = filtrar(textoValue, caracter).join(" ") || texto;
}

// Fin Ej 1

// Ej 2
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const datos = new FormData(myForm);
    const datosJson = {};
    for (const [x, y] of datos) {
        datosJson[x] = y;
    }
    document.getElementById("json-result").innerHTML = JSON.stringify(datosJson);
});

// Fin Ej 2

// Ej 3
let contador = 0;
function crearBotones() {
    const myDiv = document.getElementById("buttons-container");

    const bContar = document.createElement("button");
    bContar.innerHTML = "Contar palabras";
    bContar.setAttribute("id", "bContar");
    bContar.style.margin = "5px";

    bContar.onclick = function () {
        const contar = document.getElementById("bContar");
        contador = contador + 1;
        const span = document.createElement("span");
        span.setAttribute("id", "span");

        const texto = document.getElementById("texto").innerHTML;
        const result = document.createElement("h2");

        result.textContent = "Palabras contadas: " + texto.length + " palabras.";

        span.appendChild(result);

        contar.insertAdjacentElement("afterend", span);

        contar.appendChild(span);

        if (contador == 1) {
            const bRestaurar = document.createElement("button");
            bRestaurar.innerHTML = "Restaurar";
            bRestaurar.setAttribute("id", "bRestaurar");
            bRestaurar.style.margin = "5px";

            bRestaurar.onclick = function () {
                const span = document.getElementById("span");
                span.remove();
            }
            myDiv.appendChild(bRestaurar);
        } else {
            bRestaurar.onclick = function () {
                const span = document.getElementById("span");
                span.remove();
            }
        }
    }
    myDiv.appendChild(bContar);

}

// Fin Ej 3

// Ej 4
const moverImg = (direction) => {
    const imgContainer = document.querySelector(".image-container");
    const imgDivNode = document.querySelector(".image-container > div > img").parentNode;
    const availableDivs = [...imgContainer.childNodes].filter(x => /div/i.test(x.tagName));

    const imgPosition = availableDivs.indexOf(imgDivNode);
    const nextPosition = imgPosition + direction;

    if (nextPosition > (availableDivs.length - 1) || nextPosition < 0) {
        return;
    }
    availableDivs[nextPosition].insertAdjacentElement((direction < 0) ? "beforebegin" : "afterend", imgDivNode)
}

const moverImgArriba = () => {
    moverImg(-1);
}

const moverImgAbajo = () => {
    moverImg(1);
}

// Fin Ej 4

// Ej 5
window.onload = function () {
    const text = document.getElementById("texto");

    text.onmouseover = function (e) {
        text.style.fontSize = "18px";
        text.style.fontWeight = "bold";
        text.style.backgroundColor = "deeppink";
        text.style.color = "yellow";
    }

    text.onmouseout = function (e) {
        text.style.fontSize = "16px";
        text.style.fontWeight = "lighter";
        text.style.backgroundColor = "white";
        text.style.color = "black";
    }
}
// Fin Ej 5