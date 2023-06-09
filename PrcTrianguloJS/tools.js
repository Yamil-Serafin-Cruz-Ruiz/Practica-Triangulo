var historial = [];
var l1, l2, l3, are, per, resul, caja;
var valmax;

function captura1() {
    l1 = document.getElementById("l1").value;
    l1 = Number.parseFloat(l1);
    caja = document.getElementById("resul");
}

function captura2() {
    l2 = document.getElementById("l2").value;
    l2 = Number.parseFloat(l2);
    caja = document.getElementById("resul");
}

function captura3() {
    l3 = document.getElementById("l3").value;
    l3 = Number.parseFloat(l3);
    caja = document.getElementById("resul");
}

function perimetro() {
    if (l1 > l2 && l1 > l3){
        valmax = l1;
        // console.log("NumeroM= " +valmax);
        if (valmax < (l2 + l3)) {
            per = (valmax + l2 + l3) / 2;
            caja.textContent = "El Perimetro es: " +per;
            historial.push(caja.textContent);
            mostrarHistorial();
            // console.log("Perimetro = " +per);
        }
        else if (valmax > (l2 +l3)){
            // console.log ("Triangulo no valido");
            alert ("Triangulo no valido");
        } 

    } 
    else if (l2 > l1 && l2 > l3){
        valmax = l2;
        // console.log("NumeroM= " +valmax);
        if (valmax < (l1 +l3)) {
            per = (valmax + l1 + l3) / 2;
            caja.textContent = "El Perimetro es: " +per;
            historial.push(caja.textContent);
            mostrarHistorial();
            // console.log("Perimetro = " +per);
        }
        else if (valmax > (l1 +l3)){
            // console.log ("Triangulo no valido");
            alert ("Triangulo no valido");
        } 
    }
    else { 
        valmax = l3;
        // console.log("NumeroM= " +valmax);
        if (valmax < (l1 +l2)) {
            per = (valmax + l1 + l2) / 2;
            caja.textContent = "El Perimetro es: " +per;
            historial.push(caja.textContent);
            mostrarHistorial();
            // console.log("Perimetro = " +per);
        }
        else if (valmax > (l1 +l2)){
            // console.log ("Triangulo no valido");
            alert ("Triangulo no valido");
        } 
    }
}

function area() {
    if (l1 > l2 && l1 > l3) {
        valmax = l1;
        // console.log("NumeroM= " +valmax);
        if (valmax < (l2 +l3)) {
            per = (valmax + l2 + l3) / 2;
            are = Math.sqrt(per * (per - l1) * (per - l2) * (per - l3));
            caja.textContent = "El área es: " +are;
            historial.push(caja.textContent);
            mostrarHistorial();
            // console.log("Area = " +are);
        }
        else if (valmax > (l2 +l3)){
            // console.log ("Triangulo no valido");
            alert ("Triangulo no valido");
        } 

    } 
    else if (l2 > l1 && l2 > l3){
        valmax = l2;
        // console.log("NumeroM= " +valmax);
        if (valmax < (l1 +l3)) {
            per = (valmax + l1 + l3) / 2;
            are = Math.sqrt(per * (per - l1) * (per - l2) * (per - l3));
            caja.textContent = "El área es: " +are;
            historial.push(caja.textContent);
            mostrarHistorial();
            // console.log("Area = " +are);
        }
        else if (valmax > (l1 +l3)){
            // console.log ("Triangulo no valido");
            alert ("Triangulo no valido");
        } 
    }
    else { 
        valmax = l3;
        // console.log("NumeroM= " +valmax);
        if (valmax < (l1 +l2)) {
            per = (valmax + l1 + l2) / 2;
            are = Math.sqrt(per * (per - l1) * (per - l2) * (per - l3));
            caja.textContent = "El área es: " +are;
            historial.push(caja.textContent);
            mostrarHistorial();
            // console.log("Area = " +are);
        }
        else if (valmax > (l1 +l2)){
            // console.log ("Triangulo no valido");
            alert ("Triangulo no valido");
        } 
    }
}

function mostrarHistorial() {
    var historialDiv = document.getElementById("historial-Div");
    historialDiv.innerHTML = "<h2>Resultados: </h2>";

    var historialList = document.createElement("ul");
    for (var i = 0; i < historial.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = historial[i];
      historialList.appendChild(listItem);
    }

    historialDiv.appendChild(historialList);
}

function tiptri(){
    if (l1 === l2 && l2 === l3) {
        document.getElementById("resul").innerHTML = "Tipo: Triángulo equilátero.";
        historial.push(caja.textContent);
        mostrarHistorial();

      } else if (l1 === l2 || l1 === l3 || l2 === l3) {
        document.getElementById("resul").innerHTML = "Tipo: Triángulo isósceles.";
        historial.push(caja.textContent);
        mostrarHistorial();

      } else {
        document.getElementById("resul").innerHTML = "Tipo: Triángulo escaleno.";
        historial.push(caja.textContent);
        mostrarHistorial();
    }
}

function limpiar(){
    historial = [];
    mostrarHistorial();
}
