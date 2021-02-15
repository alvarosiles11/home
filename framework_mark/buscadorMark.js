$(function () {

    var mark = function () {

        // Read the keyword
        var keyword = $("input[name='keyword']").val();

        // Determine selected options
        var options = {};
        $("input[name='opt[]']").each(function () {
            options[$(this).val()] = $(this).is(":checked");
        });

        // Remove previous marked elements and mark
        // the new keyword inside the context
        $(".contextMark").unmark({
            done: function () {
                $(".contextMark").mark(keyword, options);
            }
        });
    };

    $("input[name='keyword']").on("input", mark);
    $("input[type='checkbox']").on("change", mark);
});

$("#btnBuscarModul").click(function () {
    var str = $('#campobuscar').val();
    var espaci = str.trim(); //espacios
    var minus = espaci.toLocaleLowerCase(); //minuscula
    var campo = minus; //minuscula

    $("#Dashboard").removeClass("validarIncorrecto");
    $("#Ventas").removeClass("validarIncorrecto");
    $("#Productos").removeClass("validarIncorrecto");
    $("#Inventarios").removeClass("validarIncorrecto");
    $("#Clientes").removeClass("validarIncorrecto");
    $("#Perfil").removeClass("validarIncorrecto");
    $("#Colaboradores").removeClass("validarIncorrecto");
    $("#Glosario").removeClass("validarIncorrecto");

    switch (campo) {

        case (campo.match(/dashboard/) || {}).input:
            $("#hela").addClass("validarIncorrecto");

            $('html, body').animate({
                scrollTop: $("#hela").offset().top
            }, 500);
            //return false;
            break;
        case (campo.match(/ventas/) || {}).input:
            $("#helb").addClass("validarIncorrecto");
            $('html, body').animate({
                scrollTop: $("#helb").offset().top
            }, 500);
            break;
        case (campo.match(/inventarios/) || {}).input:
            $("#helc").addClass("validarIncorrecto");
            $('html, body').animate({
                scrollTop: $("#helc").offset().top
            }, 500);
            break;




        default:

    }
});