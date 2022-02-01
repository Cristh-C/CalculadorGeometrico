//Operaciones del Cuadrado
console.group("Cuadrado");

function areaCuadrado(ladoCuadrado) {
  return ladoCuadrado * ladoCuadrado;
}

console.groupEnd();

//Operaciones del Triángulo
console.group("Triangulo");

function areaTriangulo(baseTriangulo, alturaTriangulo) {
  return (baseTriangulo * alturaTriangulo) / 2;
}

console.groupEnd();

//Operaciones del circulo
console.group("Circulo");

//Área
function areaCirculo(radioCirculo) {
  return radioCirculo * radioCirculo * Math.PI;
}

console.groupEnd();


function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const areaC = areaCirculo(value);
    const ResultadoCirculo = document.getElementById("ResultadoCirculo");
    ResultadoCirculo.innerText = "El área del círculo es: " + areaC;
}

function calcularAreaTriangulo() {
    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = inputAltura.value;
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    const areaT = areaTriangulo(valueBase, valueAltura);
    const ResultadoTriangulo = document.getElementById("ResultadoTriangulo");
    ResultadoTriangulo.innerText = "El área del triangulo es: " + areaT;
}



function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    const ResultadoCuadrado = document.getElementById("ResultadoCuadrado");
    ResultadoCuadrado.innerText = "El área del cuadrado es: " + area;
}


