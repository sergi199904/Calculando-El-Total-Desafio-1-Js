//constante declarada con el precio del producto.

const precio= 1999000;

   // Seleccionando variables de cantidad, precio y valor.

let cantidad = document.querySelector('#cantidad');
let color    = document.querySelector('#color');
let boton_calcular = document.querySelector('#calculo')
let total = document.querySelector('#total')
let cantidad_final = document.querySelector('#cantidad_final');
let color_final = document.querySelector('#color_final');

// operacion para el total, color y valor.

boton_calcular.addEventListener('click', function(){
    let valor_total = cantidad.value * precio;
    total.innerHTML = '$'+ valor_total.toLocaleString('cl-CL');
    cantidad_final.innerHTML = cantidad.value;
    color_final.style.backgroundColor = color.value;
    });





