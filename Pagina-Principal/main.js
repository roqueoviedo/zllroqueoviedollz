//Funcion para a parecer el boton del menu responsive 
function toggleMenu(){
    let btnMenu = document.querySelector('.btn_menu');
    let menu = document.querySelector('.menu_items');

    btnMenu.classList.toggle('active');
    menu.classList.toggle('show');

    if(btnMenu.classList.contains('active')){
        btnMenu.innerHTML = 'x';
    } else{
        btnMenu.innerHTML='<i class="fa-solid fa-bars"></i>';
    }
}
