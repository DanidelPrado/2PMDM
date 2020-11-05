let finUrl;
page1();

function page1() {
    const atras = document.getElementById('b1');
    atras.disabled = true;

    const continuar = document.getElementById('b2');
    continuar.disabled = true;

    const sec1 = document.createElement('div');
    sec1.setAttribute('id', 'section1');

    const titulo = document.createElement('h1');
    titulo.textContent = "Asistente para la recopilacion de datos de un usuario";
    sec1.appendChild(titulo);

    const parrafo = document.createElement('p');
    parrafo.textContent = "Esta app va a recoger y manipular los datos personales del cliente."
    sec1.appendChild(parrafo);

    const label = document.createElement('label');
    label.textContent = "Introduzca una URL para devolverle al finalizar: ";
    sec1.appendChild(label);

    const url = document.createElement('input');
    url.setAttribute('type', 'text');
    url.setAttribute('id', 'textUrl');
    url.addEventListener('input', () => continuar.disabled = false);
    sec1.appendChild(url);
    document.body.appendChild(sec1);

    const btnContinuar = document.getElementById('b2');
    btnContinuar.addEventListener('click', goPage2);
}

function page2() {
    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    const sec = document.createElement('div');
    sec.setAttribute('class', 'column');

    const form = document.createElement('form');
    form.setAttribute('id', 'form');

    const errorTot = document.createElement('label');
    errorTot.setAttribute('id', 'errorTotal');
    errorTot.style.visibility = 'hidden';
    form.appendChild(errorTot);

    const lbl1 = document.createElement('label');
    lbl1.textContent = "Nombre: ";
    lbl1.setAttribute('id', 'name');
    form.appendChild(lbl1);

    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', 'inputname');
    form.appendChild(input1);
    form.appendChild(document.createElement('br'));

    const errorNom = document.createElement('label');
    errorNom.setAttribute('id', 'errorN');
    errorNom.style.visibility = 'hidden';
    form.appendChild(errorNom);
    form.appendChild(document.createElement('br'));

    const lbl2 = document.createElement('label');
    lbl2.textContent = "Apellidos: ";
    lbl2.setAttribute('id', 'surname');
    form.appendChild(lbl2);

    const input2 = document.createElement('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', 'inputsurname');
    form.appendChild(input2);
    form.appendChild(document.createElement('br'));

    const errorApe = document.createElement('label');
    errorApe.setAttribute('id', 'errorA');
    errorApe.style.visibility = 'hidden';
    form.appendChild(errorApe);
    form.appendChild(document.createElement('br'));

    const lbl3 = document.createElement('label');
    lbl3.textContent = "Fecha nacimiento: ";
    lbl3.setAttribute('id', 'date');
    form.appendChild(lbl3);

    const input3 = document.createElement('input');
    input3.setAttribute('type', 'date');
    input3.setAttribute('id', 'inputdate');
    form.appendChild(input3);
    form.appendChild(document.createElement('br'));

    const errorDir = document.createElement('label');
    errorDir.setAttribute('id', 'errorD');
    errorDir.style.visibility = 'hidden';
    form.appendChild(errorDir);
    form.appendChild(document.createElement('br'));

    const lbl4 = document.createElement('label');
    lbl4.textContent = "Direccion: ";
    lbl4.setAttribute('id', 'dir');
    form.appendChild(lbl4);

    const input4 = document.createElement('input');
    input4.setAttribute('type', 'text');
    input4.setAttribute('id', 'inputdir');
    form.appendChild(input4);
    form.appendChild(document.createElement('br'));
    form.appendChild(document.createElement('br'));

    const lbl5 = document.createElement('label');
    lbl5.textContent = "CodigoPostal: ";
    lbl5.setAttribute('id', 'cp');
    form.appendChild(lbl5);

    const input5 = document.createElement('input');
    input5.setAttribute('type', 'number');
    input5.setAttribute('id', 'inputcp');
    form.appendChild(input5);
    form.appendChild(document.createElement('br'));

    const errorCP = document.createElement('label');
    errorCP.setAttribute('id', 'errorCP');
    errorCP.style.visibility = 'hidden';
    form.appendChild(errorCP);
    form.appendChild(document.createElement('br'));

    const lbl6 = document.createElement('label');
    lbl6.textContent = "Provincia: ";
    lbl6.setAttribute('id', 'pro');
    form.appendChild(lbl6);

    const list = document.createElement('select');

    const option = document.createElement('option');
    option.textContent = "";
    list.appendChild(option);

    const option1 = document.createElement('option');
    option1.textContent = "Valencia";
    list.appendChild(option1);

    const option2 = document.createElement('option');
    option2.textContent = "Alicante";
    list.appendChild(option2);

    const option3 = document.createElement('option');
    option3.textContent = "Castellon";
    list.appendChild(option3);
    list.setAttribute('id', 'inputpro');
    form.appendChild(list);
    form.appendChild(document.createElement('br'));

    const errorPro = document.createElement('label');
    errorPro.setAttribute('id', 'errorPro');
    errorPro.style.visibility = 'hidden';
    form.appendChild(errorPro);
    form.appendChild(document.createElement('br'));

    const lbl7 = document.createElement('label');
    lbl7.textContent = "Municipio: ";
    lbl7.setAttribute('id', 'mun');
    form.appendChild(lbl7);

    const input7 = document.createElement('input');
    input7.setAttribute('type', 'text');
    input7.setAttribute('id', 'inputmun');
    input7.setAttribute('oninput', 'this.value=this.value.toUpperCase()');
    form.appendChild(input7);
    form.appendChild(document.createElement('br'));

    const errorMun = document.createElement('label');
    errorMun.setAttribute('id', 'errorM');
    errorMun.style.visibility = 'hidden';
    form.appendChild(errorMun);

    const b = document.getElementById('b2');
    b.addEventListener('click', goPage3);

    const a = document.getElementById('b1');
    a.disabled = false;
    a.addEventListener('click', backPage1);
    sec.appendChild(form);
    row.appendChild(sec);
    document.body.appendChild(row);
}

function page3(p) {
    const atras = document.getElementById('b1');
    atras.addEventListener('click', backPage2);

    const continuar = document.getElementById('b2');
    continuar.addEventListener('click', goPage4);

    const sect2 = document.createElement('div');
    sect2.setAttribute('id', 'pag3');

    const datos = document.createElement('p');
    datos.setAttribute('id', 'datos');
    datos.innerHTML = "<b><u>DATOS PERSONALES DEL CLIENTE</u><br><br>Nombre:</b> " + p.nombre + "<br><b>Apellidos: </b>" + p.surname + "<br><b>Fecha Nacimiento: </b>" + p.date + "<br><b>Direccion: </b>" + p.dir + "<br><b>Codigo Postal:</b> " + p.cp + "<br><b>Provincia: </b>" + p.pro + "<br><b>Municipio: </b>" + p.mun;
    sect2.appendChild(datos);

    const volver = document.createElement('button');
    volver.textContent = "Volver";
    volver.addEventListener('click', backPage2);
    sect2.appendChild(volver);

    const aceptar = document.createElement('button');
    aceptar.textContent = "Aceptar";
    aceptar.addEventListener('click', goPage4);
    sect2.appendChild(aceptar);

    document.body.appendChild(sect2);
}

function page4() {
    const continuar = document.getElementById('b2');
    continuar.addEventListener('click', () => location.href = finUrl);

    const atras = document.getElementById('b1');
    atras.disabled = true;

    const sect3 = document.createElement('div');
    sect3.setAttribute('id', 'pag4');

    const texto = document.createElement('p');
    texto.textContent = "Muchas gracias por rellenar el formulario, que tenga un buen dia!";
    sect3.appendChild(texto);

    const finalizar = document.createElement('button');
    finalizar.textContent = "Finalizar";
    finalizar.addEventListener('click', () => location.href = finUrl);
    sect3.appendChild(finalizar);
    document.body.appendChild(sect3);
}

function goPage2() {
    finUrl = document.getElementById('textUrl').value;

    const continuar = document.getElementById('b2');
    continuar.removeEventListener('click', goPage2);

    const page1 = document.getElementById('section1');

    page1.remove();
    page2();
}

function goPage3() {
    const aux = compruebaAll();
    if (!aux) {
        const continuar = document.getElementById('b2');
        continuar.removeEventListener('click', goPage3);

        const atras = document.getElementById('b1');
        atras.removeEventListener('click', backPage1);

        const cliente = {
            nombre: document.getElementById('inputname').value,
            surname: document.getElementById('inputsurname').value,
            date: document.getElementById('inputdate').value,
            dir: document.getElementById('inputdir').value,
            cp: document.getElementById('inputcp').value,
            pro: document.getElementById('inputpro').value,
            mun: document.getElementById('inputmun').value
        };
        const form = document.getElementById('form');
        form.remove();
        page3(cliente);
    }
}

function goPage4() {
    const continuar = document.getElementById('b2');
    continuar.removeEventListener('click', goPage4);

    const atras = document.getElementById('b1');
    atras.removeEventListener('click', backPage2);

    const pag = document.getElementById('pag3');
    pag.remove();
    page4();
}

function backPage1() {
    const continuar = document.getElementById('b2');
    continuar.removeEventListener('click', goPage3);

    const form = document.getElementById('form');
    form.remove();
    page1();
}

function backPage2() {
    const continuar = document.getElementById('b2');
    continuar.removeEventListener('click', goPage4);

    const atras = document.getElementById('b1');
    atras.removeEventListener('click', backPage2);

    const pag = document.getElementById('pag3');
    pag.remove();
    page2();
}

function backPage3() {
    const continuar = document.getElementById('b2');
    continuar.removeEventListener('click', () => location.href = finUrl);

    const atras = document.getElementById('b1');
    atras.removeEventListener('click', backPage3);

    const pag = document.getElementById('pag4');
    pag.remove();
    page3();
}
function compruebaAll() {
    let aux = false;
    let mensaje = "";
    const nombre = document.getElementById('inputname').value;
    const errorNom = document.getElementById('errorN');

    if (compruebaTxt(nombre)) {
        errorNom.style.visibility = "visible";
        errorNom.textContent = "Error en el \"Nombre\"";
        aux = true;
        mensaje = mensaje + "Error en el \"Nombre\"<br>";
    } else {
        errorNom.style.visibility = "hidden";
        errorNom.textContent = "";
    }

    const apellidos = document.getElementById('inputsurname').value;
    const errorApe = document.getElementById('errorA');

    if (compruebaTxt(apellidos)) {
        errorApe.style.visibility = "visible";
        errorApe.textContent = "Error en el \"Nombre\"";
        aux = true;
        mensaje = mensaje + "Error en el \"Apellido\"<br>";
    } else {
        errorApe.style.visibility = "hidden";
        errorApe.textContent = "";
    }

    const fecha = document.getElementById('inputdate').value;
    const errorFecha = document.getElementById('errorD');

    if (fecha === "") {
        errorFecha.style.visibility = "visible";
        errorFecha.textContent = "Error en la\"Fecha de Nacimiento\"";
        aux = true;
        mensaje = mensaje + "Error en la\"Fecha de Nacimiento\"<br>";
    } else {
        errorFecha.style.visibility = "hidden";
        errorFecha.textContent = "";
    }

    const cp = document.getElementById('inputcp').value;
    const errorCP = document.getElementById('errorCP');

    if (cp.length != 5) {
        errorCP.style.visibility = "visible";
        errorCP.textContent = "Error en el \"Codigo Postal\"";
        aux = true;
        mensaje = mensaje + "Error en el \"Codigo Postal\"<br>";
    } else {
        errorCP.style.visibility = "hidden";
        errorCP.textContent = "";
    }

    const prov = document.getElementById('inputpro').value;
    const errorProv = document.getElementById('errorPro');

    if (prov === "") {
        errorProv.style.visibility = "visible";
        errorProv.textContent = "Error en la \"Provincia\"";
        aux = true;
        mensaje = mensaje + "Error en la \"Provincia\"<br>";
    } else {
        errorProv.style.visibility = "hidden";
        errorProv.textContent = "";
    }

    const mun = document.getElementById('inputmun').value;
    const errorMun = document.getElementById('errorM');

    if (compruebaTxt(mun)) {
        errorMun.style.visibility = "visible";
        errorMun.textContent = "Error en el \"Municipio\"";
        aux = true;
        mensaje = mensaje + "Error en el \"Municipio\"<br>";
    } else {
        errorMun.style.visibility = "hidden";
        errorMun.textContent = "";
    }

    const men = document.getElementById('errorTotal');

    if (aux === true) {
        men.innerHTML = mensaje;
        men.style.visibility = 'visible';
    } else {
        men.textContent = "";
        men.style.visibility = 'hidden';
    }
    return aux;
}

function compruebaTxt(nom) {
    let aux = false;
    if (nom === "") {
        aux = true;
    }
    if (typeof nom != 'string') {
        aux = true;
    }
    return aux;
}