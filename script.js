// agar smooth pas scrolling
$('.page-scroll').on('click', function(e){
    let tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top-50}, 1250, 'swing'
    );

    e.preventDefault();
});