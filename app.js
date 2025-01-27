let a = 3;
let b = "2";
let result = b + a;
let saludo = "hola amigos buen dia";
console.log(result);

let eda = parseInt(prompt("di tu edad"));
console.log(eda);
alert(`tienes ${eda} años`);


document.getElementById("saludar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    console.log(`Hola, ${nombre}`);
  });
  
