window.onload = function(){
    var cabecalhoTopo = document.querySelector(".js-cabecalho-topo");
    var openMenu = document.querySelector(".js-open-menu");
    var closeMenu = document.querySelector(".js-close-menu");
    var menuPrincipal = document.querySelector(".js-menu-principal");
    var slider = document.querySelector(".js-slider");
    var linksMenu = document.querySelectorAll(".menu-principal ul li a");
    var modal = document.querySelector(".js-modal");
    var imagemModal = document.querySelector(".js-imagem");
    var imagensGaleria = document.querySelectorAll(".imagem-galeria");

    window.addEventListener("scroll", function(){
        if(window.scrollY > (slider.offsetHeight - 80)){
            cabecalhoTopo.classList.add("invertido");
        }else{
            cabecalhoTopo.classList.remove("invertido");
        }
    });
    window.scroll(0, 0);

    openMenu.addEventListener("click", function(){
        menuPrincipal.classList.add("is-open");
    });

    closeMenu.addEventListener("click", function(){
        menuPrincipal.classList.remove("is-open");
    });

    for(i=0; i<linksMenu.length; i++){
        linksMenu[i].addEventListener("click", function(){
            menuPrincipal.classList.remove("is-open");
        });
    }

    for(i=0; i<imagensGaleria.length; i++){
        imagensGaleria[i].addEventListener("click", function(e){
            if(window.outerWidth > 640){
                imagemModal.style.backgroundImage = e.target.style.backgroundImage;
                modal.classList.add("is-open");
            }
        });
    }

    modal.addEventListener("click", function(){
        modal.classList.remove("is-open");
    });



}