const ferie = [
    '01-01', '06-04', '01-05', '08-05',
    '14-05', '25-05', '14-07',
    '15-08', '01-11', '25-12'
];

function jourTravaille(date) {

    let jour = date.getDate();
    let mois = date.getMonth() + 1;

    let jourMois =
        (jour < 10 ? "0" + jour : jour) + "-" +
        (mois < 10 ? "0" + mois : mois);

    let jourSemaine = date.getDay();

/* ferie.includes = in this case, ferie.includes asks if this date (jourMois) is listed in the ferie array */
    if (ferie.includes(jourMois)) {
        console.log(`Le ${jour}/${mois} est un jour férié`);
    }
    else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, le ${jour}/${mois} est un week-end`);
    }
    else {
        console.log(`Oui, le ${jour}/${mois} est un jour travaillé`);
    }
}

const dates = [
    new Date(),
    new Date('2024-5-1'),
    new Date('2024-7-14'),
    new Date('2025-1-11')
];

dates.forEach(date => jourTravaille(date));
