function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var resultado = 0;
  for (var i = 0; i <= n; i++){
    resultado += i;
  }return resultado;
}

module.exports = sumarHastaN;
