const btn = document.getElementById('mode');
let html = document.getElementById('main');

btn.addEventListener('click', function(){

    html.classList.toggle('dark:bg-gray-900')
    html.classList.toggle('text-white')
    btn.classList.toggle('clr')
    
})
