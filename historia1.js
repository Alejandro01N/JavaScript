let r = prompt(`Cuanto dinero tiene Roberto`); 
let p = prompt(`Cuanto dinero tiene Pedro`);
let c = prompt(`Cuanto dinero tiene Cofla`);

c=parseInt(c)

let resultado= r+p+c;

let heladoAgua = 0.6;
let heladoCrema= 1;
let heladoHeladix= 1.6;
let heladoHeladovich= 1.7;
let heladoHelardo= 1.8;
let heladoPoteConfite = 2.9;
let poteHelado= 2.9;


document.write(`Roberto tiene la cantidad de ${ r } USD, Pedro tiene la cantidad de ${p} USD  y Cofla
tiene la cantidad de ${ c } USD, y en total ellos tienen ${resultado}`);

if (r >= heladoAgua && r<heladoCrema) {
    alert(`Comprate el helado agua que tiene un valor de ${heladoAgua}`)
}
else if (r >= heladoCrema && r<heladoHeladix) {
    alert(`Comprate el helado crema que tiene un valor de ${heladoCrema}`)
   } 
else if (r >= heladoHeladix && r<heladoHeladovich) {
    alert(`Comprate el helado Heladix que tiene un valor de ${heladoHeladix}`)
    } 
else if (r >= heladoHeladovich && r<heladoHelardo) {
    alert(`Comprate el helado Heladovich que tiene un valor de ${heladoHeladovich}`)
   }
 else if (r >= heladoHelardo && r<heladoPoteConfite) {
    alert(`Comprate el helado Helardo que tiene un valor de ${heladoHelardo}`)
    }
 else if (r >= poteHelado) {
    alert(`Comprate el pote de helado o el helado con confite que tiene un valor de ${poteHelado}`)
 } else{
    alert(`No tienes suficiente dinero`)
}

if (p >= heladoAgua && p<heladoCrema) {
    alert(`Comprate el helado agua que tiene un valor de ${heladoAgua}`)
}
else if (p >= heladoCrema && p<heladoHeladix) {
    alert(`Comprate el helado crema que tiene un valor de ${heladoCrema}`)
} 
else if (p >= heladoHeladix && p<heladoHeladovich) {
    alert(`Comprate el helado Heladix que tiene un valor de ${heladoHeladix}`)
} 
else if (p >= heladoHeladovich && p<heladoHelardo) {
    alert(`Comprate el helado Heladovich que tiene un valor de ${heladoHeladovich}`)
}
 else if (p >= heladoHelardo && p<heladoPoteConfite) {
    alert(`Comprate el helado Helardo que tiene un valor de ${heladoHelardo}`)
}
else if (r >= poteHelado) {
    alert(`Comprate el pote de helado o el helado con confite que tiene un valor de ${poteHelado}`)
}
 else{
    alert(`No tienes suficiente dinero`)
}

if (c >= heladoAgua && c<heladoCrema) {
    alert(`Comprate el helado agua que tiene un valor de ${heladoAgua}`)
    let vuelto=c-heladoAgua;
    alert(`A Cofla le queda ${vuelto} USD de vueltas`)
}
else if (c >= heladoCrema && c<heladoHeladix) {
    alert(`Comprate el helado crema que tiene un valor de ${heladoCrema}`)
    let vuelto=c-heladoCrema;
    alert(`A Cofla le queda ${vuelto} USD de vueltas`)
} 
else if (c >= heladoHeladix && c<heladoHeladovich) {
    alert(`Comprate el helado Heladix que tiene un valor de ${heladoHeladix}`)
    let vuelto=c-heladoHeladix;
    alert(`A Cofla le queda ${vuelto} USD de vueltas`)
} 
else if (c >= heladoHeladovich && c<heladoHelardo) {
    alert(`Comprate el helado Heladovich que tiene un valor de ${heladoHeladovich}`)
    let vuelto=c-heladoHeladovich;
    alert(`A Cofla le queda ${vuelto} USD de vueltas`)
}
 else if (c >= heladoHelardo && c<heladoPoteConfite) {
    alert(`Comprate el helado Helardo que tiene un valor de ${heladoHelardo}`)
    let vuelto=c-heladoHelardo;
    alert(`A Cofla le queda ${vuelto} USD de vueltas`)
}
else if (c >= poteHelado) {
    alert(`Comprate el pote de helado o el helado con confite que tiene un valor de ${poteHelado}`)
    let vuelto=c-poteHelado;
    alert(`A Cofla le queda ${vuelto} USD de vueltas`)
}
 else{
    alert(`No tienes suficiente dinero`)
}