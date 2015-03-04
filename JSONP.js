var ciudad ="";

jQuery(document).ready(function() {

    $("#boton button").click(function() {
    
        var contenido = document.getElementById('formu');
        if (contenido.value === ""){
            ciudad = "fuenlabrada";
        }else{
            ciudad = contenido.value;
        }
        
        var urlFlickr = "http://api.flickr.com/services/feeds/photos_public.gne?tags=" + ciudad + "&tagmode=any&format=json&jsoncallback=?";
        
        $.getJSON(urlFlickr, function(data) { 
            $.each( data.items, function( i, item ) {
                $( "<img>" ).attr( "src", item.media.m ).appendTo( "#fotos" );
                if ( i === 4 ) {
                    return false;
                }
            });
        });
    });
});
