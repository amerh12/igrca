$(document).ready(function () {

    var rezultatIgralca = 0;
    var rezultatRac = 0;





    $("input").keyup(function () {
        var imeIgralca = $(this).val();
        $("#imeIgralca").text(imeIgralca + "  ");
    });

    $("#day").click(function () {
        $("body").css("color", "black");
        $("p").css("color", "black");
        $("body").css("background", "gray");
        $("input").css("background", "gray");
        $("input").css("border", "1px solid black");
        $("input").css("color", "black");
        $("button").css("border", "1px solid black");
        $(".navodila").css("color", "black");
        $("#stats").css("color", "black");
        $("#stats").css("border", "1px solid black");


    });




    $("#btnZctk").click(function () {
        $("#form").css("display", "none");
        $(".choose").css("display", "block");
        $("#stats").css("display", "block");

        $(".naslov").css("display", "none");


    });

});
