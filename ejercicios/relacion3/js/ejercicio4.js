function redimensionarIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

function loadPaises(){
    console.log("cargar paises");
    $.ajax({
        url: "https://restcountries.eu/rest/v2/all" // servicio con información de paises :)
    }).done(function (data) {
        //console.log(data);
        data.forEach(function(pais) {
            console.log(pais); // name numericCode
            document.getElementById('paises').append('<option value="'+pais.numericCode+'">'+pais.name+'</option>');
        });
        //document.getElementById("paises").selectpicker("refresh");
    });
}