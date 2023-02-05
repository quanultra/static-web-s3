setTimeout(function () {
    if ($('#loading').length > 0) {
        $('#loading').addClass("hide-loading");
        setTimeout(function() {
            $('#loading').remove();
        }, 2000)
    }
}, 1500)
