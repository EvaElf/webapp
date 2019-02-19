

function showPage(page) {
    var forside = document.getElementById('forside');
    var madoversigt = document.getElementById('madoversigt');
    var opskrifter = document.getElementById('opskrifter');
    var profil = document.getElementById('profil');

    var all_pages = document.getElementsByClassName('nav_item');

    for(var i = 0; i < all_pages.length; i++) {
       all_pages[i].style.backgroundColor = '#7A030D';
    }

    if (page.id === 'nav_forside') {
        forside.style.display = 'block';
        madoversigt.style.display = 'none';
        opskrifter.style.display = 'none';
        profil.style.display = 'none';

        nav_forside.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_madoversigt') {
        forside.style.display = 'none';
        madoversigt.style.display = 'block';
        opskrifter.style.display = 'none';
        profil.style.display = 'none';

        nav_madoversigt.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_opskrifter') {
        forside.style.display = 'none';
        madoversigt.style.display = 'none';
        opskrifter.style.display = 'block';
        profil.style.display = 'none';

        nav_opskrifter.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_profil') {
        forside.style.display = 'none';
        madoversigt.style.display = 'none';
        opskrifter.style.display = 'none';
        profil.style.display = 'block';

        nav_profil.style.backgroundColor = '#BA0816';
    }

}
