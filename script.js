function accordion_menu(point) {
    let children = point.parentElement.getElementsByTagName("div");
    
    // Toggle the outer level of the navigation
    if(point.getAttribute('class') === "accordion") {
        for (let i = 0; i < children.length; i++) {
            // Ensure that it only unfolds one level but folds 
            // all children if they are of class panel
                if(children[i].style.display === "block" || children[i].getAttribute('class') === "panel") {
                    children[i].style.display = "none";
                } else {
                    children[i].style.display = "block";
            }
        }
    }

    // Toggle the inner level of the navigation
    else if(point.getAttribute('class') === "inneraccordion") {
        for (let i = 0; i < children.length; i++) {
            if(children[i].style.display === "block") {
                children[i].style.display = "none";
            } else {
                children[i].style.display = "block";
            }
        }
    }

}

function showPage(page) {
    // let forside = document.getElementById('forside');
    // let madoversigt = document.getElementById('madoversigt');
    // let opskrifter = document.getElementById('opskrifter');
    // let profil = document.getElementById('profil');

    let all_pages = document.getElementsByClassName('nav_item');

    for(let i = 0; i < all_pages.length; i++) {
        all_pages[i].style.backgroundColor = '#7A030D';
    }

    forside.style.display = 'none';
    madoversigt.style.display = 'none';
    opskrifter.style.display = 'none';
    profil.style.display = 'none';
    startside.style.display = 'none';
    opretbruger.style.display = 'none';
    logind.style.display = 'none';

    if (page.id === 'opret') {
        opretbruger.style.display = 'block';
    }

    if (page.id === 'log') {
        logind.style.display = 'block';
    }

    if (page.id === 'spring' || page.id === 'nav_forside') {
        forside.style.display = 'block';
        topbar.style.display = 'block';
        nav.style.display = 'block';
        nav_forside.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_madoversigt' || page.id === 'nav_mad') {
        madoversigt.style.display = 'block';
        nav_madoversigt.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_opskrifter' || page.id === 'nav_op') {
        opskrifter.style.display = 'block';
        nav_opskrifter.style.backgroundColor = '#BA0816';
    }

    if (page.id === 'nav_profil' || page.id === 'nav_pro') {
        profil.style.display = 'block';
        nav_profil.style.backgroundColor = '#BA0816';
    }

}


