// function accordion_menu(point) {
//     let acc = document.getElementsByClassName('accordion');
//     let i;
//     let panel = document.getElementsByClassName('panel');

//     for (i = 0; i < acc.length; i++) {
//         acc[i].style.display = 'block';
//     }

//     if (point.id === 'mejeri') {
//         panel.style.display = 'block';
//     }

//     for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener("click", function() {
//             let panel = this.nextElementSibling;
//             if (panel.style.display === "none") {
//             panel.style.display = "block";
//             } else {
//             panel.style.display = "none";
//             }
//         });
//     }
// }




function showPage(page) {
    // let forside = document.getElementById('forside');
    // let madoversigt = document.getElementById('madoversigt');
    let opskrifter = document.getElementById('opskrifter');
    let profil = document.getElementById('profil');

    let all_pages = document.getElementsByClassName('nav_item');

    for(let i = 0; i < all_pages.length; i++) {
        all_pages[i].style.backgroundColor = '#7A030D';
    }

    if (page.id === 'opret') {
        forside.style.display = 'none';
        madoversigt.style.display = 'none';
        opskrifter.style.display = 'none';
        profil.style.display = 'none';
        startside.style.display = 'none';
        opretbruger.style.display = 'block';
        logind.style.display = 'none';
    }

    if (page.id === 'log') {
        forside.style.display = 'none';
        madoversigt.style.display = 'none';
        opskrifter.style.display = 'none';
        profil.style.display = 'none';
        startside.style.display = 'none';
        opretbruger.style.display = 'none';
        logind.style.display = 'block';
    }

    if (page.id === 'spring') {
        forside.style.display = 'block';
        madoversigt.style.display = 'none';
        opskrifter.style.display = 'none';
        profil.style.display = 'none';
        startside.style.display = 'none';
        opretbruger.style.display = 'none';
        logind.style.display = 'none';

        topbar.style.display = 'block';
        nav.style.display = 'block';
        nav_forside.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_forside') {
        forside.style.display = 'block';
        madoversigt.style.display = 'none';
        opskrifter.style.display = 'none';
        profil.style.display = 'none';
        startside.style.display = 'none';
        opretbruger.style.display = 'none';
        logind.style.display = 'none';

        topbar.style.display = 'block';
        nav.style.display = 'block';
        nav_forside.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_madoversigt') {
        forside.style.display = 'none';
        madoversigt.style.display = 'block';
        opskrifter.style.display = 'none';
        profil.style.display = 'none';
        startside.style.display = 'none';
        opretbruger.style.display = 'none';
        logind.style.display = 'none';

        nav_madoversigt.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_mad') {
        forside.style.display = 'none';
        madoversigt.style.display = 'block';
        opskrifter.style.display = 'none';
        profil.style.display = 'none';
        startside.style.display = 'none';
        opretbruger.style.display = 'none';
        logind.style.display = 'none';

        nav_madoversigt.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_opskrifter') {
        forside.style.display = 'none';
        madoversigt.style.display = 'none';
        opskrifter.style.display = 'block';
        profil.style.display = 'none';
        startside.style.display = 'none';
        opretbruger.style.display = 'none';
        logind.style.display = 'none';

        nav_opskrifter.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_op') {
        forside.style.display = 'none';
        madoversigt.style.display = 'none';
        opskrifter.style.display = 'block';
        profil.style.display = 'none';
        startside.style.display = 'none';
        opretbruger.style.display = 'none';
        logind.style.display = 'none';

        nav_opskrifter.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_profil') {
        forside.style.display = 'none';
        madoversigt.style.display = 'none';
        opskrifter.style.display = 'none';
        profil.style.display = 'block';
        startside.style.display = 'none';
        opretbruger.style.display = 'none';
        logind.style.display = 'none';

        nav_profil.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_pro') {
        forside.style.display = 'none';
        madoversigt.style.display = 'none';
        opskrifter.style.display = 'none';
        profil.style.display = 'block';
        startside.style.display = 'none';
        opretbruger.style.display = 'none';
        logind.style.display = 'none';

        nav_profil.style.backgroundColor = '#BA0816';
    }

}


