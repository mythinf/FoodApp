$(document).ready(function() {
  // variable que alacena datos de las diferentes opciones de comida (DOM)
  var $optionsFood = $('.options-food');
  // variables que almacenarán las imágenes de cada restaurant segun la zona elegida
  var $cevichRestaurants = $('#foodCevich');
  var $criollosRestaurants = $('#foodCriolla');
  var $fusionRestaurants = $('#foodFusion');
  var $carnesRestaurants = $('#foodCarn');
  //  FUNCION QUE RECONOCE EL DISTRITO QUE DIGITE EL USUARIO Y ACTIVA EL BOTON DE BUSQUEDA
  $('input').keydown(function() {
    for (var i in zonas) {
      // CONDICION : PARA BUSQUEDAS PARA ZONA NORTE
      if ($(this).val().toUpperCase() === zonas[0]) {
        $optionsFood.addClass('red');
      // CONDICION : NUEVAS BÚSQUEDAS (SI EL USUARIO BORRA BUSQUEDA)
      } else if ($(this).val().toUpperCase() === '') {
        $optionsFood.removeClass('red');
      };
    }
  });
  $optionsFood.on('click', function() {
    for (var j in cevicherias) {
      //  agregando imágenes al hacer click
      $cevichRestaurants.append(cevicherias[j]);
      //  apagando el evento click (ya no se agregarán imagenes)
      $optionsFood.off('click');
    };
    for (var j in crillos) {
      //  agregando imágenes al hacer click
      $criollosRestaurants.append(crillos[j]);
      //  apagando el evento click (ya no se agregarán imagenes)
      $optionsFood.off('click');
    }
    for (var j in fusion) {
      //  agregando imágenes al hacer click
      $fusionRestaurants.append(fusion[j]);
      //  apagando el evento click (ya no se agregarán imagenes)
      $optionsFood.off('click');
    }
    for (var j in carnes) {
      //  agregando imágenes al hacer click
      $carnesRestaurants.append(carnes[j]);
      //  apagando el evento click (ya no se agregarán imagenes)
      $optionsFood.off('click');
    }
  });
});
