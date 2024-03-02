//Burger and burger menu
document.addEventListener('DOMContentLoaded',  function(){
    document.getElementById('burger').addEventListener('click', function(){
        document.querySelector('.header_menu').classList.toggle('open');
    })

    const link = document.querySelectorAll('.burger_item');
    link.forEach((item) => {
        item.addEventListener('click', function(){
            document.querySelector('.header_menu').classList.remove('open');
        })
    })

})