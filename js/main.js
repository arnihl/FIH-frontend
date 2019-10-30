//tvö functions mouseenter, mouseleaves. 

$(document).ready(function() {

    // jQuery methods go here...
    // Birta umsoknir dropdown á hoveri
    $("#FIH-umsoknir-btn").hover(function() {
        $(this).css("background-color", "pink");
        $("#dropdown-umsoknir").removeClass("d-none").addClass("d-block");
    }, function() {
        $(this).css("background-color", "white");
        $("#dropdown-umsoknir").removeClass("d-block").addClass("d-none");
    });
    // Birta um skólann dropdown á hoveri
    $("#FIH-umskolann-btn").hover(function() {
            $(this).css("background-color", "pink");
            $("#dropdown-umskolann").removeClass("d-none").addClass("d-block");
        },
        function() {
            $(this).css("background-color", "white");
            $("#dropdown-umskolann").removeClass("d-block").addClass("d-none");
        });

    // Birta Á döfinni dropdown á hoveri
    $("#FIH-adofinni-btn").hover(function() {
            $(this).css("background-color", "pink");
            $("#dropdown-adofinni").removeClass("d-none").addClass("d-block");
        },
        function() {
            $(this).css("background-color", "white");
            $("#dropdown-adofinni").removeClass("d-block").addClass("d-none");
        });

    // Birta Á döfinni dropdown á hoveri
    $("#FIH-namid-btn").hover(function() {
            $(this).css("background-color", "pink");
            $("#dropdown-namid").removeClass("d-none").addClass("d-block");
        },
        function() {
            $(this).css("background-color", "white");
            $("#dropdown-namid").removeClass("d-block").addClass("d-none");
        });

    // Birta Hafa samband dropdown á hoveri
    $("#FIH-hafasamband-btn").hover(function() {
            $(this).css("background-color", "pink");
            $("#dropdown-hafasamband").removeClass("d-none").addClass("d-block");
        },
        function() {
            $(this).css("background-color", "white");
            $("#dropdown-hafasamband").removeClass("d-block").addClass("d-none");
        });
});