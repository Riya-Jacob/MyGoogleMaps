function initMap(){

    var options={
        zoom: 8,
        center:{
            lat:28.644800,
            lng:77.216721
        }
    }

    var map = new google.maps.Map(document.getElementById('map'),options)
    var markers=[

        {coords:{lat:9.264758,lng:76.787041},
        content:'<h1>Pathanamthitta</h1>'
        },
        {coords:{lat:26.9124,lng:75.7873},
        content:'<h1>Jaipur</h1>'
        },
        {coords:{lat:11.1271,lng:78.6569},
        content:'<h1>Tamil Nadu</h1>'
        }
        
    ]

    for(var i=1;i<markers.length;i++){
        addMarker(markers[i])
    }

    function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map
        })

        if(props.content){
            var infowindow = newgooglemaps.InfoWindow({
                content:props.content
            })

            marker.addListener('click',function(){
                infowindow.open(map,marker)
            })
        }
    }

}