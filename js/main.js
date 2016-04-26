$(document).ready(function() {
    $(window).resize(
        function() {
            window.location.href = window.location.href;
        });

    if (window.location.href.indexOf('#gallery') != -1) {
        $('#gal').modal('show');
    }

    // $('#gal').hide();
    $('#mycanvas').click(function() {
        $('#gal').modal('show');
        //pull work from work folder

        // handles closing modal when focus lost
        $('.modal-backdrop').click(function() {
            $('#gal').modal('hide');
        });
    });
    //


});
