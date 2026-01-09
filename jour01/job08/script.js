function estPremier(nombre) {
    if (nombre < 2) {
        return false;
    }

    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}

function sommeNombresPremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

console.log(sommeNombresPremiers(3, 5));
console.log(sommeNombresPremiers(4, 5));
console.log(sommeNombresPremiers(7, 11));
console.log(sommeNombresPremiers(1, 3));