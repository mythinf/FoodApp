$(document).ready(function() {
  // variable que alacena datos de las diferentes opciones de comida (DOM)
  var optionsFood = $('.options-food');
  // variable que almacenará las imágenes de cada restaurant TOP (DOM)
  var topImage = $('#foodTop');
  //
  //  FUNCION QUE RECONOCE EL DISTRITO QUE DIGITE EL USUARIO Y ACTIVA EL BOTON DE BUSQUEDA
  $('input').keydown(function() {
    for (var i in zonas) {
      // CONDICION : PARA BUSQUEDAS PARA ZONA NORTE
      if ($(this).val().toUpperCase() === zonas[0]) {
        optionsFood.addClass('red');
        $('#top').click(function() {
          topImage.append(topNorte);
        });
      // CONDICION : NUEVAS BÚSQUEDAS (SI EL USUARIO BORRA BUSQUEDA)
      } else if ($(this).val().toUpperCase() === '') {
        optionsFood.removeClass('red');
      }
    }
  });
});
