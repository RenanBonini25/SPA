$(document).ready(function () {
    console.log("Olá mundo!");

    $('#preco-min').on('input', function () {
        var min = $('#preco-min').val();
        console.log(`Preço min: ${min}`);
        $('#valor-min').html(min);
    });
});

