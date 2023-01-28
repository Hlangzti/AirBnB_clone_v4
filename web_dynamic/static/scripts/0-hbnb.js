$('link').attr('href', function(i, href) {
    return href + "?cache_id=" + cache_id;
});
