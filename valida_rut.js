let rut = "15457103-5";
let multiplo = 2;
let suma = 0;
let dv = 0;

for (i = rut.length - 3; i > -1 ; i--){
    suma = suma + (Number(rut.charAt(i)) * multiplo);
    multiplo++;
    if(multiplo==8){multiplo=2}
};

dv = 11 - (suma % 11 )

if (dv==10){
    dv=K;
} else if (dv==11) {
    dv="0";
}

if (dv==Number(rut.charAt(rut.length-1))){
    console.log("El RUT es Correcto");
}
else {
    console.log("El RUT es Incorrecto");
}