let search_btn = document.getElementById('search-btn');
    let search = document.getElementById('searchbar');
    
    let reg = document.getElementById('reg');

    search_btn.addEventListener('click', function(){
        goto_search_page(search);
    });
    

    function goto_search_page(str){
        
            localStorage.setItem('search',JSON.stringify(str.value))
        
        window.location.href = 'html/search-products.html';

    }
    if(localStorage.getItem('fname') !== null && JSON.parse(localStorage.getItem('fanme') !== '')){
        let reg = document.getElementById('reg');
        reg.innerHTML = JSON.parse(localStorage.getItem('fname'));
    }
     
    function menuToggle(){
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active');

    }

    function signout(){

        console.log('singout');
        let fname = JSON.parse(localStorage.getItem('fname')); 

        fname = 'Registration';

        localStorage.setItem('fname', JSON.stringify(fname));

        window.location.href = 'index.html';

    }