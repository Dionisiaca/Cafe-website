$(document).ready(function () {
  //Animación del menú
  $('.menu a').each(function (i, element) {
    $(this).css({
      top: '-200px',
    });
    $(this).animate(
      {
        top: '0',
      },
      2000 + i * 500
    );
  });

  //Animación del header
  if ($(window).width() > 800) {
    $('header .textos').css({
      opacity: 0,
      marginTop: 0,
    });
    $('header .textos').animate(
      {
        opacity: 1,
        marginTop: '-52px',
      },
      1500
    );
  }

  //Scroll
  const about = $('#acerca-de').offset().top,
    menu = $('#platillos').offset().top,
    galery = $('#galeria').offset().top,
    location = $('#ubicacion').offset().top;

  $('#btn-acerca-de').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: about - 50,
      },
      500
    );
  });
  $('#btn-menu').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: menu,
      },
      500
    );
  });
  $('#btn-galeria').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: galery,
      },
      500
    );
  });
  $('#btn-ubicacion').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate(
      {
        scrollTop: location,
      },
      500
    );
  });
});
