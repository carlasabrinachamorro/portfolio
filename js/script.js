
$(document).ready(function(){
  $('#services-link').click(function() {

    // Dentro de la función digo que haga scroll hasta la section services
    $('.services').animatescroll({
      padding: 50 // Le agrego un padding respecto a donde va a parar, para que se vea bien
    });

    $('.navbar-toggle').click(); // Hago click en el boton del menu para esconderlo
  });

  // Hacer lo mismo para todos los links que se quiera scrollear automáticamente
});