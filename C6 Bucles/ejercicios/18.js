function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a <= 0 || b <= 0) {
    return 0;
  } else {
    var producto = 1;
    for (var i = a; i <= b; i++) {
      producto *= i;
    }
    return producto;
  }
}

module.exports = productoEntreNúmeros;