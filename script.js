var min_w = 300;
var vid_w_orig;
var vid_h_orig;

$(function() {

    vid_w_orig = parseInt($('video').attr('width'));
    vid_h_orig = parseInt($('video').attr('height'));

    $(window).resize(function () { fitVideo(); });
    $(window).trigger('resize');

});

function fitVideo() {
    if($(window).width() > 1000 ){
        $("video").html('<source src="https://s3.ap-southeast-1.amazonaws.com/navatar.live/html/navatar_video2.mp4" type="video/mp4" />' );
    }else{
        $("video").html('<source src="https://s3.ap-southeast-1.amazonaws.com/navatar.live/html/navatar_video_mobile2.mp4" type="video/mp4" />' );
    }
    /*$('#video-viewport').width($('.fullsize-video-bg').width());
    $('#video-viewport').height($('.fullsize-video-bg').height());

    var scale_h = $('.fullsize-video-bg').width() / vid_w_orig;
    var scale_v = $('.fullsize-video-bg').height() / vid_h_orig;
    var scale = scale_h > scale_v ? scale_h : scale_v;

    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

    $('video').width(scale * vid_w_orig);
    $('video').height(scale * vid_h_orig);

    $('#video-viewport').scrollLeft(($('video').width() - $('.fullsize-video-bg').width()) / 2);
    $('#video-viewport').scrollTop(($('video').height() - $('.fullsize-video-bg').height()) / 2);
*/
};

$(window).scroll(function(){
    var _cur_top = $(window).scrollTop();
    if(_cur_top > $(window).height()){
        $("#logo").attr("src","https://s3.ap-southeast-1.amazonaws.com/navatar.live/html/navatar_logo_transparent_grey.png");
    }else{
        $("#logo").attr("src","https://s3.ap-southeast-1.amazonaws.com/navatar.live/html/navatar_logo_transparent_white.png");
    }
});