$(document).ready(function() {
  // evento mouse over para los mapas de las zonas de lima
  $('#img-mapa1').mouseover(function(){
    $(this).hide();
  });
  $('#img-mapa2').mouseover(function(){
    $(this).hide();
  });
  $('#img-mapa3').mouseover(function(){
    $(this).hide();
  });

  // variable que alacena datos de las diferentes opciones de comida (DOM)
   var optionsFood = $('.options-food');
  // // variable que almacena datos de los restaurants tops de ANCON (data.js)
  // var limaNorte = data['zonas'];
  //
  // // variable que almacena datos de las cevicherias de ANCON (data.js)
  // var cevicheriaAncon = ancon.cevicheria;
  // // variable que almacenará las imágenes de cada restaurant TOP (DOM)
  // var topImage = $('#foodTop');
  //
  //  FUNCION QUE RECONOCE EL DISTRITO QUE DIGITE EL USUARIO Y ACTIVA EL BOTON DE BUSQUEDA
  $('input').keydown(function() {
    for (var i in zonas) {
      // CONDICION : PARA BUSQUEDAS IGUALES A LA DATA
      if ($(this).val().toUpperCase() === zonas[i]) {
        optionsFood.addClass('red');
      // CONDICION : NUEVAS BÚSQUEDAS (SI EL USUARIO BORRA BUSQUEDA)
      } else if ($(this).val().toUpperCase() === '') {
        optionsFood.removeClass('red');
      }
    }

  });
  // // FUNCIÓN QUE AGREGA IMAGENES EN CADA OPCION DE COMIDA
  //   topImage.append(ancon.top[0].image);
});
