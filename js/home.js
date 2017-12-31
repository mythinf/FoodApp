$(document).ready(function() {
  var buttonSearch = $('button[type="submit"]');
  var optionsFood = $('.options-food');
  var topAncon = ancon.top;
  var cevicheriaAncon = ancon.cevicheria;
  var topImage = $('#foodTop');

  //  FUNCION QUE RECONOCE EL DISTRITO QUE DIGITE EL USUARIO Y ACTIVA EL BOTON DE BUSQUEDA
  $('input').keydown(function() {
    for (var i in distritos) {
      // CONDICION : PARA BUSQUEDAS IGUALES A LA DATA
      if ($(this).val().toUpperCase() === distritos[i]) {
        buttonSearch.attr('disabled', false);
        optionsFood.addClass('red');
      // CONDICION : NUEVAS BÚSQUEDAS (SI EL USUARIO BORRA BUSQUEDA)
      } else if ($(this).val().toUpperCase() === '') {
        buttonSearch.attr('disabled', true);
        optionsFood.removeClass('red');
      }
    }
    // FUNCIÓN QUE AGREGA IMAGENES EN CADA OPCION DE COMIDA
    buttonSearch.click(function(){
      topImage.append($(''))
    })
  });
});
