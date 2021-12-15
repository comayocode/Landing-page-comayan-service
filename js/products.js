$(document).ready(function(){

    /* Agrega clase active a la primera clase */
    $('.products__buttons-btn[category="todo"]').addClass('btn--active');

    /* --- Filtro de productos --- */
    $('.products__buttons-btn').click(function(){
        var catProduct = $(this).attr('category');

        /* --- Agregar btn--active al dar clic --- */
        $('.products__buttons-btn').removeClass('btn--active');
        $(this).addClass('btn--active');

        /* --- Ocultar productos --- */
        $('.products__card').css('transform', 'scale(0)');
        function hideProducts(){
            $('.products__card').hide();
        }setTimeout(hideProducts,400);

        /* --- Mostrar productos --- */
        function showProducts(){
            $('.products__card[category="'+catProduct+'"]').show();
            $('.products__card[category="'+catProduct+'"]').css('transform', 'scale(1)');
        }setTimeout(showProducts,400);
    });
    /* --- Mostrar todo --- */
    $('.products__buttons-btn[category="todo"]').click(function(){
        function showAll(){
            $('.products__card').show();
            $('.products__card').css('transform', 'scale(1)');
        }setTimeout(showAll,400);
    });
});