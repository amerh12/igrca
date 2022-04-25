$(document).ready(function () {

    var rezultatIgralca = 0;
    var rezultatRac = 0;





    $("input").keyup(function () {
        var imeIgralca = $(this).val();
        $("#imeIgralca").text(imeIgralca + "  ");
    });

    $("#day").click(function () {


        $("body").css("color", "white");
        $("p").css("color", "white");
        $("body").css("background", "#e68c6f");
        $("input").css("background", "#e67d7b");
        $("input").css("border", "1px solid black");
        $("input").css("color", "white");
        $("button").css("border", "1px solid black");
        $(".navodila").css("color", "white");
        $("#stats").css("color", "white");
        $("#stats").css("border", "1px solid white");
        $("body").css("backgroundImage", "url(DayModeBckgrnd.png)");
        $("body").css("backgroundPostion", "center");
        $("body").css("backgroundRepeat", "no-repeat");
        $("body").css("backgroundSize", "450px");



        var w = window.innerWidth();

        if (w > 767) {
            $("body").css("backgroundPostion", "left");

            $("body").css("backgroundSize", "750px");
        }



    });
    $("#night").click(function () {
        location.reload();



    });




    $("#btnZctk").click(function () {
        $("#form").css("display", "none");
        $(".choose").css("display", "block");
        $("#stats").css("display", "block");

        $(".naslov").css("display", "none");


    });




    $("#kamen").click(function () {
        var izbranka = 1;
        $(".choose").css("display", "none");
        $("#tvojaIzbira ").css("backgroundImage", "url(kamen.png)");
        $(".winner").css("display", "block");

        var komp = Math.floor((Math.random() * 3 + 1));
        if (komp == 1) {
            $("#racIzbira").css("backgroundImage", "url(kamen.png)");
            $(".resultat").text("Rezultat je izenačen");

            $("#keepPlayin").click(function () {

                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $(".choose").css("display", "block");


            });

            $("#endGame").click(function () {
                location.reload();

            });


        } else if (komp == 2) {
            $("#racIzbira").css("backgroundImage", "url(papir.png)");
            $(".resultat").text("Tokrat nisi zmagal, poskusi ponovno!");


            rezultatRac++;
            $("#RezultatRacunalnika").text(rezultatRac);




            if (rezultatIgralca < rezultatRac && rezultatRac > 4) {
                $(".winner").css("display", "none");
                $("#drugDiv").css("display", "none");
                $("#prviDiv").css("display", "none");
                $(".ravnilo").css("display", "none");
                $("#koncKoncou").css("display", "block");
                $("#endGameDva").click(function () {
                    location.reload();

                });

            }


            $("#keepPlayin").click(function () {

                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $(".choose").css("display", "block");


            });


            $("#endGame").click(function () {
                location.reload();

            });


        } else {
            $("#racIzbira").css("backgroundImage", "url(skarje.png)");
            $("#tvojaIzbira").css("backgroundImage", "url(kamen.png)");
            $(".resultat").text("BRAVOOO! ZMAGAL SI!");

            rezultatIgralca++;

            $("#RezultatIgralca").text(rezultatIgralca);

            if (rezultatIgralca > rezultatRac && rezultatIgralca > 4) {
                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $("#drugDiv").css("display", "none");
                $("#prviDiv").css("display", "none");
                $("#koncKoncou").css("display", "block");
                $("#kvajblo").text("ZMAGAAA!");
                $("citat").text(" The amount of good luck coming your way depends on your willingness to act. <br/> -- Barbara Sher ");
                $("#endGameDva").click(function () {
                    location.reload();

                });
            }


            $("#keepPlayin").click(function () {

                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $(".choose").css("display", "block");


            });


            $("#endGame").click(function () {
                location.reload();

            });
        }

        $(".ravnilo").css("display", "block");




    });

    $("#papir").click(function () {
        var izbranka = 2;

        $(".choose").css("display", "none");
        $("#tvojaIzbira ").css("backgroundImage", "url(papir.png)");
        $(".winner").css("display", "block");



        var komp = Math.floor((Math.random() * 3 + 1));
        if (komp == 1) {
            $("#racIzbira").css("backgroundImage", "url(kamen.png)");
            $("#tvojaIzbira").css("backgroundImage", "url(papir.png)");
            $(".resultat").text("BRAVOOO! ZMAGAL SI!");

            rezultatIgralca++;

            $("#RezultatIgralca").text(rezultatIgralca);

            if (rezultatIgralca > rezultatRac && rezultatIgralca > 4) {
                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $("#drugDiv").css("display", "none");
                $("#prviDiv").css("display", "none");
                $("#koncKoncou").css("display", "block");
                $("#kvajblo").text("ZMAGAAA!");
                $("citat").text(" The amount of good luck coming your way depends on your willingness to act. <br/> -- Barbara Sher ");
                $("#endGameDva").click(function () {
                    location.reload();

                });
            }
            $("#keepPlayin").click(function () {

                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $(".choose").css("display", "block");


            });
            $("#endGame").click(function () {
                location.reload();

            });



        } else if (komp == 2) {
            $("#racIzbira").css("backgroundImage", "url(papir.png)");
            $(".resultat").text("Rezultat je izenačen");


            $("#keepPlayin").click(function () {

                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $(".choose").css("display", "block");


            });



        } else {
            $("#racIzbira").css("backgroundImage", "url(skarje.png)");
            $(".resultat").text("Tokrat nisi zmagal, poskusi ponovno!");




            rezultatRac++;
            $("#RezultatRacunalnika").text(rezultatRac);




            if (rezultatIgralca < rezultatRac && rezultatRac > 4) {
                $(".winner").css("display", "none");
                $("#drugDiv").css("display", "none");
                $("#prviDiv").css("display", "none");
                $(".ravnilo").css("display", "none");
                $("#koncKoncou").css("display", "block");
                $("#endGameDva").click(function () {
                    location.reload();

                });
            }



            $("#RezultatRacunalnika").text(rezultatRac);
            $("#keepPlayin").click(function () {

                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $(".choose").css("display", "block");


            });
            $("#endGame").click(function () {
                location.reload();

            });


        }

        $(".ravnilo").css("display", "block");

    });
    $("#skarje").click(function () {
        var izbranka = 3;

        $(".choose").css("display", "none");
        $("#tvojaIzbira ").css("backgroundImage", "url(skarje.png)");
        $(".winner").css("display", "block");



        var komp = Math.floor((Math.random() * 3 + 1));

        $("#tvojaIzbira ").css("backgroundImage", "url(skarje.png)");

        if (komp == 1) {
            $("#racIzbira").css("backgroundImage", "url(kamen.png)");
            $(".resultat").text("Tokrat nisi zmagal, poskusi ponovno!");

            rezultatRac++;
            $("#RezultatRacunalnika").text(rezultatRac);




            if (rezultatIgralca < rezultatRac && rezultatRac > 4) {
                $(".winner").css("display", "none");
                $("#drugDiv").css("display", "none");
                $("#prviDiv").css("display", "none");
                $(".ravnilo").css("display", "none");
                $("#koncKoncou").css("display", "block");
                $("#endGameDva").click(function () {
                    location.reload();

                });
            }



            $("#RezultatRacunalnika").text(rezultatRac);
            $("#keepPlayin").click(function () {

                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $(".choose").css("display", "block");


            });
            $("#endGame").click(function () {
                location.reload();

            });


        } else if (komp == 2) {
            $("#tvojaIzbira").css("backgroundImage", "url(skarje.png)");
            $("#racIzbira").css("backgroundImage", "url(papir.png)");
            $(".resultat").text("BRAVOOO! ZMAGAL SI!");

            rezultatIgralca++;

            $("#RezultatIgralca").text(rezultatIgralca);

            if (rezultatIgralca > rezultatRac && rezultatIgralca > 4) {
                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $("#drugDiv").css("display", "none");
                $("#prviDiv").css("display", "none");
                $("#koncKoncou").css("display", "block");
                $("#kvajblo").text("ZMAGAAA!");
                $("citat").text(" The amount of good luck coming your way depends on your willingness to act. <br/> -- Barbara Sher ");
                $("#endGameDva").click(function () {
                    location.reload();

                });


            }
            $("#keepPlayin").click(function () {

                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $(".choose").css("display", "block");


            });

            $("#endGame").click(function () {
                location.reload();

            });

        } else {
            $("#racIzbira").css("backgroundImage", "url(skarje.png)");
            $(".resultat").text("Rezultat je izenačen");
            $("#keepPlayin").click(function () {

                $(".winner").css("display", "none");
                $(".ravnilo").css("display", "none");
                $(".choose").css("display", "block");


            });
            $("#endGame").click(function () {
                location.reload();

            });

        }

        $(".ravnilo").css("display", "block");

    });

});
