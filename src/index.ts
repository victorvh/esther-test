function p(a: number, b: number) {
  var d = Math.pow(a, 2) + Math.pow(b, 2);

  var resultat = Math.sqrt(d);

  return resultat;
}

function hoejden(s: number, m: number) {
  return s - m;
}

function p2(h: number, c: number) {
  var a = Math.sqrt(Math.pow(c, 2) - Math.pow(h, 2));
  console.log("a is: ", a);

  var stigning = h / a;

  return stigning;
}

console.log(`stigning i procent: ${p2(34, 1000)}`);
