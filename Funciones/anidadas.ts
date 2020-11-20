//ANIDADAS

//ANIDADAS

let vg : number = 2;
let wg : number = 1;
let xg : number = 2;
let yg : number = 3;
let zg : number = 4;

function p1(a : number, b : number) : void{
    let w2 : number = 11;
    let x2 : number = 12;
    let y2 : number = 13;
    let temp2 : number = 0;
    console.log("Entro a funcion padre");
    
   console.log("Ambito Padre 11 = "+ w2);
   console.log("Ambito Padre de Padre 11 = "+ x2);
   console.log("Parametro por valor de Padre de Padre 1 = "+a);
   console.log("Parametro por referencia de Padre de Padre 2 = "+b);
 p1_p11();
    function p11() : void{
        let w3 : number = 21;
        let x3 : number = 22;
        let z3 : number = 23;
        console.log("funcion hija p11");
        console.log("Ambito Padre 12 = "+x3);
        console.log("Ambito Padre de Padre 12 = "+z3);
         // p1_p11();
         p1_p11_p111();
        
        function p111() : void{
            let w4 : number = 31;
            let z4 : number = 32;
            console.log("entro a funcion hija p111")
            if(z4 != 0) {
                 console.log("Local 310 = "+ w4);
                console.log("Ambito Padre 220 = "+ z4);
                //console.log("Ambito Padre de Padre 13 = "+ y);
                //console.log("Global 0 = "+z);
                //console.log("Parametro por valor de Padre de Padre 1 = "+a);
                //console.log("Parametro por referencia de Padre de Padre 2 = "+b);
                //b = 1000;
                funcion_global();
                return;
            }
            z4--;
           
        }

    }
} 
//p1_p11();
//p1_p11_p111();
//p11();

function p11() : void{
    console.log("'Aqui no debe entrar'");
}

function funcion_global() : void{
    console.log("Llamada global");
}

p1(1,2);

/*
****** Iteracion:  1
Variable ambito padre de padre 14
Variable ambito padre de padre 15
Variable ambito padre de padre 16
Variable ambito padre de padre 17
Variable ambito padre de padre 18
Variable ambito padre de padre 19
120
Local 31 =  31
Ambito Padre 22 =  22
Ambito Padre de Padre 13 =  13
Global 0 =  0
Parametro por valor de Padre de Padre 1 =  1
Parametro por referencia de Padre de Padre 2 =  2
Llamada global
****** Iteracion:  0
Variable ambito padre de padre 14
Variable ambito padre de padre 15
Variable ambito padre de padre 16
Variable ambito padre de padre 17
Variable ambito padre de padre 18
Variable ambito padre de padre 19
120
Local 31 =  31
Ambito Padre 22 =  22
Ambito Padre de Padre 13 =  13
Global 0 =  0
Parametro por valor de Padre de Padre 1 =  1
Parametro por referencia de Padre de Padre 2 =  22
Llamada global
****** Fin iteracion:  0
****** Fin iteracion:  1
*/
/*
****** Iteracion:  1
Variable ambito padre de padre 14
Variable ambito padre de padre 15
Variable ambito padre de padre 16
Variable ambito padre de padre 17
Variable ambito padre de padre 18
Variable ambito padre de padre 19
120
Local 31 =  31
Ambito Padre 22 =  22
Ambito Padre de Padre 13 =  13
Global 0 =  0
Parametro por valor de Padre de Padre 1 =  1
Parametro por referencia de Padre de Padre 2 =  2
Llamada global
****** Iteracion:  0
Variable ambito padre de padre 14
Variable ambito padre de padre 15
Variable ambito padre de padre 16
Variable ambito padre de padre 17
Variable ambito padre de padre 18
Variable ambito padre de padre 19
120
Local 31 =  31
Ambito Padre 22 =  22
Ambito Padre de Padre 13 =  13
Global 0 =  0
Parametro por valor de Padre de Padre 1 =  1
Parametro por referencia de Padre de Padre 2 =  22
Llamada global
****** Fin iteracion:  0
****** Fin iteracion:  1
*/