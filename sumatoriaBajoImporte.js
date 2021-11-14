/*
Escribí la función sumatoriaBajoImporte la cual recibiendo un array con 
importes nos devuelva el resultado final de la suma de los importes de 
todos los meses que tienen ganancia, a excepción de los que superen un importe de $ 1.000
*/
function sumatoriaBajoImporte2(ganancias){
    let valorTotal=0;
    for (let i=0;i<ganancias.length;i++){
        if (ganancias[i]<=1000 && ganancias[i]>0){
            valorTotal= ganancias[i]+valorTotal;
        }
    }
    return valorTotal;
}

console.log(sumatoriaBajoImporte2([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));