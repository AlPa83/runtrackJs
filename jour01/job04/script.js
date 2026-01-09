function bisextile(annee) {
    if (annee % 4 === 0) return true;
    if (annee % 100 === 0) return false;
    return annee % 4 === 0;
}
console.log(bisextile(1992));