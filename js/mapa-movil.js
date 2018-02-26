var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(3.353496, -76.5210035),
    mapTypeId: 'roadmap'
  });


  var icons = {
    botella: {
      icon: 'img/man1.png',
      name: 'Botella'
    },
    lampara: {
      icon: 'img/man2.png',
      name: 'Lampara'

    },
    papel: {
      icon: 'img/mujer1.png',
      name: 'Papel'

    }
  };

  var features = [{

    position: new google.maps.LatLng(3.365356, -76.528285),
    type: 'papel'
  }, {
    position: new google.maps.LatLng(3.354070, -76.527887),
    type: 'lampara'
  }, {
    position: new google.maps.LatLng(3.360346, -76.526256),
    type: 'botella'
  }];
  // Create markers.
  features.forEach(function (feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      animation: google.maps.Animation.DROP,
      map: map
    });
  });
}
