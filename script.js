const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

let section_1 = document.getElementById('home');

let section_2 = document.getElementById('Sobre');

let section_3 = document.getElementById('produtos');

let section_4 = document.getElementById('Contatos');

section_2.style.display = 'none';
section_3.style.display = 'none';
section_4.style.display = 'none';


function Secao1(){
    section_2.style.display = 'none';
    section_3.style.display = 'none';
    section_4.style.display = 'none';
    section_1.style = 
    'display: flex';
    'flex-direction: column';
    'align-items: center';
    'justify-content: center';
    'min-height: 100vh';
    
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');

}

function Secao2(){
    section_1.style.display = 'none';
    section_3.style.display = 'none';
    section_4.style.display = 'none';
    section_2.style = 
    'display: flex';
    'flex-direction: column';
    'align-items: center';
    'justify-content: center';
    'min-height: 100vh';
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
}



function Secao3(){
    section_2.style.display = 'none';
    section_1.style.display = 'none';
    section_4.style.display = 'none';
    section_3.style = 
    'display: flex';
    'flex-direction: row';
    'align-items: center';
    'justify-content: space-between';
    'min-height: 100vh';

    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
}

function Secao3_1(){
    section_2.style.display = 'none';
    section_1.style.display = 'none';
    section_4.style.display = 'none';
    section_3.style = 
    'display: flex';
    'flex-direction: row';
    'align-items: center';
    'justify-content: space-between';
    'min-height: 100vh';
}

function Secao4(){
    section_2.style.display = 'none';
    section_1.style.display = 'none';
    section_3.style.display = 'none';
    section_4.style = 
    'width: 100%';
    'height: 100vh';
    'display: flex';
    'align-items: center';
    'justify-content: center';
    'padding: 0px 10%';
    
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
    
}

function Secao4_1(){
    section_2.style.display = 'none';
    section_1.style.display = 'none';
    section_3.style.display = 'none';
    section_4.style = 
    'width: 100%';
    'height: 100vh';
    'display: flex';
    'align-items: center';
    'justify-content: center';
    'padding: 0px 10%';
    
    
    
}