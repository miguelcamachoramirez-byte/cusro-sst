/*document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forarch(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (windows.innerWidth - e.pageX*speed)/100;
        const y = (windows.innerHeight - e.pageX*speed)/100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}*/


document.addEventListener("DOMContentLoaded", function(event) {
    
    anima2 = document.querySelectorAll('button#next')[1];
    anima2f = ()=>{
        document.querySelector('#proof2').querySelector('#boxing2').classList.add('desdeDerecha1');
        document.querySelector('#proof2').querySelector('#badminton').classList.add('desdeDerecha2');
        document.querySelector('#proof2').querySelector('#tenis').classList.add('desdeDerecha3');
        document.querySelector('#proof2').querySelector('#bate').classList.add('desdeDerecha4');

        document.querySelector('.presentacion2').querySelector('h2').classList.add('textoDesdeDerecha1');
    };
    anima2.addEventListener('click', anima2f);


    anima3 = document.querySelectorAll('button#next')[2];
    anima3f = ()=>{
        document.querySelector('#proof3').querySelector('.cliente').classList.add('desdeAbajo1');
        document.querySelector('#proof3').querySelector('.clientePotencial').classList.add('desdeAbajo2');
        document.querySelector('#proof3').querySelector('.usuario').classList.add('desdeAbajo3');

        document.querySelector('.presentacion2').querySelector('h2').classList.add('textoDesdeDerecha1');
    };
    anima3.addEventListener('click', anima3f);


    anima4 = document.querySelectorAll('button#next')[3];
    anima4f = ()=>{
        document.querySelector('#proof3a').querySelector('h3').classList.add('desdeAbajo1');
        document.querySelector('#proof3a').querySelector('h3').querySelector('b').classList.add('desdeAbajo2');
    };
    anima4.addEventListener('click', anima4f);


    anima5 = document.querySelectorAll('button#next')[4];
    anima5f = ()=>{
        document.querySelector('#proof4').querySelector('.objetivos').classList.add('desdeAbajo1');
        //document.querySelector('#proof4').querySelector('h2').classList.add('desdeAbajo1');
    };
    anima5.addEventListener('click', anima5f);

    anima6 = document.querySelectorAll('button#next')[7];
    anima6f = ()=>{
        document.querySelector('#proof7').querySelector('h2').classList.add('txtDesdeDerecha1');
        document.querySelector('#proof7').querySelector('h4').classList.add('txtDesdeDerecha2');
    };
    anima6.addEventListener('click', anima6f);


    anima13 = document.querySelectorAll('button#next')[10];
    anima13f = ()=>{
        document.querySelector('#proof13').querySelector('h3').classList.add('desdeAbajo1');
        document.querySelector('#proof13').querySelector('h5').classList.add('desdeAbajo1');
    };
    anima13.addEventListener('click', anima13f);

    
    /* CAMBIAR LOGOS A BLANCO PARA FONDOS NARANJAS */
    anima6 = document.querySelectorAll('button#next')[6];
    anima6f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima6.addEventListener('click', anima6f);

    anima7 = document.querySelectorAll('button#next')[7];
    anima7f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima7.addEventListener('click', anima7f);

    anima7b = document.querySelectorAll('button#before')[7];
    anima7a = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima7b.addEventListener('click', anima7a);

    anima8 = document.querySelectorAll('button#before')[8];
    anima8f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima8.addEventListener('click', anima8f);



    anima17 = document.querySelectorAll('button#next')[17];
    anima17f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima17.addEventListener('click', anima17f);

    anima18 = document.querySelectorAll('button#next')[18];
    anima18f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima18.addEventListener('click', anima18f);

    anima18b = document.querySelectorAll('button#before')[18];
    anima18a = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima18b.addEventListener('click', anima18a);

    anima19b = document.querySelectorAll('button#before')[19];
    anima19f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima19b.addEventListener('click', anima19f);



    anima19 = document.querySelectorAll('button#next')[19];
    anima19f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima19.addEventListener('click', anima19f);

    anima20 = document.querySelectorAll('button#next')[20];
    anima20f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima20.addEventListener('click', anima20f);

    anima20b = document.querySelectorAll('button#before')[20];
    anima20a = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima20b.addEventListener('click', anima20a);

    anima21b = document.querySelectorAll('button#before')[21];
    anima21f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima21b.addEventListener('click', anima21f);



    anima21 = document.querySelectorAll('button#next')[21];
    anima21f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima21.addEventListener('click', anima21f);

    anima22 = document.querySelectorAll('button#next')[22];
    anima22f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima22.addEventListener('click', anima22f);

    anima22b = document.querySelectorAll('button#before')[22];
    anima22a = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima22b.addEventListener('click', anima22a);

    anima23b = document.querySelectorAll('button#before')[23];
    anima23f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima23b.addEventListener('click', anima23f);



    anima23 = document.querySelectorAll('button#next')[23];
    anima23f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima23.addEventListener('click', anima23f);

    anima24 = document.querySelectorAll('button#next')[24];
    anima24f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima24.addEventListener('click', anima24f);

    anima24b = document.querySelectorAll('button#before')[24];
    anima24a = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima24b.addEventListener('click', anima24a);

    anima25b = document.querySelectorAll('button#before')[25];
    anima25f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima25b.addEventListener('click', anima25f);



    anima25 = document.querySelectorAll('button#next')[25];
    anima25f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima25.addEventListener('click', anima25f);

    anima26 = document.querySelectorAll('button#next')[26];
    anima26f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima26.addEventListener('click', anima26f);

    anima26b = document.querySelectorAll('button#before')[26];
    anima26a = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima26b.addEventListener('click', anima26a);

    anima27b = document.querySelectorAll('button#before')[27];
    anima27f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima27b.addEventListener('click', anima27f);



    anima27 = document.querySelectorAll('button#next')[27];
    anima27f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima27.addEventListener('click', anima27f);

    anima28 = document.querySelectorAll('button#next')[28];
    anima28f = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima28.addEventListener('click', anima28f);

    anima28b = document.querySelectorAll('button#before')[28];
    anima28a = ()=>{
        document.querySelector('.logo').classList.remove('logos-sobre-naranja');
    };
    anima28b.addEventListener('click', anima28a);

    anima29b = document.querySelectorAll('button#before')[29];
    anima29f = ()=>{
        document.querySelector('.logo').classList.add('logos-sobre-naranja');
    };
    anima29b.addEventListener('click', anima29f);


    /* FIN */

});
