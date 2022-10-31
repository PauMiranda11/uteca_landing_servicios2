
(() => {
  
  const alumnos = () => {
    console.log('Ejemplo alumnos');
  }

  function continua() {
    hideAll();
    $(this).addClass('active');
    $('.educacion_body').css({display: 'block'});
    $('.proximos_cursos').not('.slick-initialized').slick();
  }

  function alianzas() {
    hideAll();
    $(this).addClass('active');
    $('.alianzas_body').css({display: 'block'});
  }

  function ambiente() {
    hideAll();
    $(this).addClass('active');
    $('.ambiente_body').css({display: 'block'});
  }

  function blog() {
    hideAll();
    $(this).addClass('active');
    $('.blog_body').css({display: 'block'});
  }

  function idiomas() {
    hideAll();
    $(this).addClass('active');
    $('.idiomas_body').css({display: 'block'});
  }

  function egresados() {
    hideAll();
    $(this).addClass('active');
    $('.egresados_body').css({display: 'block'});
  }

  function escolares() {
    hideAll();
    $(this).addClass('active');
    $('.escolares').css({display: 'block'});
  }

  function hideAll() {
    $('.boton_exalumnos').removeClass('active');
    $('.alianzas_lateral').removeClass('active');
    $('.ambiente_lateral').removeClass('active');
    $('.blog').removeClass('active');
    $('.centro_idiomas_lateral').removeClass('active');
    $('.egresados').removeClass('active');
    $('.serviciosescolares_lateral').removeClass('active');
    $('.educacion_continua_lateral').removeClass('active');

    $('.escolares').css({display: 'none'});
    $('.alianzas_body').css({display: 'none'});
    $('.ambiente_body').css({display: 'none'});
    $('.blog_body').css({display: 'none'});
    $('.egresados_body').css({display: 'none'});
    $('.idiomas_body').css({display: 'none'});
    $('.educacion_body').css({display: 'none'});
  }

  $('.boton_exalumnos').on('click', alumnos);
  $('.alianzas_lateral').on('click', alianzas);
  $('.ambiente_lateral').on('click', ambiente);
  $('.blog').on('click', blog);
  $('.centro_idiomas_lateral').on('click', idiomas);
  $('.egresados').on('click', egresados);
  $('.serviciosescolares_lateral').on('click', escolares);
  $('.educacion_continua_lateral').on('click', continua);

  escolares();

})();

(() => {
  const limit_size_screen = window.matchMedia('screen and (max-width: 768px)');
  const bars = document.querySelector('.bars');
  const barsButton = document.querySelector('#bars-button');
  const navbar = document.querySelector('.title');
  const servicios = document.querySelector('.servicios');
  const ali = document.querySelector('.ali');
  const blogger = document.querySelector('.blogger');
  const egre = document.querySelector('.egre');
  const idiomas = document.querySelector('.idiomas');
  const uteca = document.querySelector('.uteca');
  const educontinua = document.querySelector('.educontinua');
  

  function validation(event) {
    if (event.matches) {
      barsButton.addEventListener('click', hideShow);
      navbar.addEventListener('click', hideShow);
      servicios.addEventListener('click', hideShow);
      ali.addEventListener('click', hideShow);
      blogger.addEventListener('click', hideShow);
      egre.addEventListener('click', hideShow);
      idiomas.addEventListener('click', hideShow);
      uteca.addEventListener('click', hideShow);
      educontinua.addEventListener('click', hideShow);


    } else {
      barsButton.removeEventListener('click', hideShow);
    }

  }
  validation(limit_size_screen);

  function hideShow() {
    if (bars.classList.contains('is-active')) {
      bars.classList.remove('is-active');
    } else {
      bars.classList.add('is-active');
    }
  }
})();