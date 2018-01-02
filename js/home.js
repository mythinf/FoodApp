$(document).ready(function() {
  // variable que alacena datos de las diferentes opciones de comida (DOM)
  var $optionsFood = $('.options-food');
  // variables que almacenarán las imágenes de cada restaurant segun la zona elegida
  var $cevichRestaurants = $('#foodCevich');
  var $criollosRestaurants = $('#foodCriolla');
  var $fusionRestaurants = $('#foodFusion');
  var $carnesRestaurants = $('#foodCarn');
  // AGREGANDO EVENTO MOUSE OVER A LAS IMAGENES DE LOS MAPAS-ZONAS
  $('.mapNort').on('mouseover', function() {
    $(this).toggle('slow');
  });
  $('.mapNort').on('mouseout', function() {
    $(this).show('slow');
  });
  $('.mapCentro').on('mouseover', function() {
    $(this).toggle('slow');
  });
  $('.mapCentro').on('mouseout', function() {
    $(this).show('slow');
  });
  $('.mapSur').on('mouseover', function() {
    $(this).toggle('slow');
  });
  $('.mapSur').on('mouseout', function() {
    $(this).show('slow');
  });
  //  FUNCION QUE RECONOCE EL DISTRITO QUE DIGITE EL USUARIO
  $('input').on('input', function() {
    for (var i in zonas) {
      // CONDICION : PARA BUSQUEDAS PARA ZONA NORTE
      if ($(this).val().toUpperCase() === zonas[0]) {
        $('.mapNort').addClass('bgd-red');
      } else {
        $('.mapNort').removeClass('bgd-red');
      }
    };
    for (var i in zonas) {
      // CONDICION : PARA BUSQUEDAS PARA ZONA CENTRO
      if ($(this).val().toUpperCase() === zonas[1]) {
        $('.mapCentro').addClass('bgd-red');
      } else {
        $('.mapCentro').removeClass('bgd-red');
      }
    };
    for (var i in zonas) {
      // CONDICION : PARA BUSQUEDAS PARA ZONA SUR
      if ($(this).val().toUpperCase() === zonas[2]) {
        $('.mapSur').addClass('bgd-red');
      } else {
        $('.mapSur').removeClass('bgd-red');
      }
    };
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
