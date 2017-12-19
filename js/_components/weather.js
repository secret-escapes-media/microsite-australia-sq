
///////////////////////////////////////
//    Weather
///////////////////////////////////////


$(document).ready(function() {

  $('.js-weather').each(function(){

    var item = $(this);
    var itemLoc = $(this).data('location');

    $.simpleWeather({
      location: itemLoc,
      woeid: '',
      unit: 'c',
      success: function(weather) {
        var html = weather.forecast[1].high+'&deg;'+weather.units.temp;

        item.html(html);
      },
      error: function(error) {
        item.html('<p>'+error+'</p>');
      }
    });

  });

});


