$(function () {
  $(window).on('resize load', function() {
      $('#main , #wrapper').css({"top": $(".navbar-fixed-top").height() + 32 + "px" , position: "absolute"});

  });
  for(var i = 0;i<15;i++) {
    var newRow = $('.table>tbody>tr:first').clone();
    newRow.find('td:last').text(i + 2);
    $('.table>tbody').append(newRow);
  }
  $('.footer>h5').html('只显示前100名');

  $('#inviteBtn').bind('click' , showOverlay);
});

function showOverlay() {
    var docHeight = $(document).height();
    $("body").append("<div id='overlay'></div>");
    $("#overlay").height(docHeight).css({
        'opacity': 0.6,
        'position': 'absolute',
        'background-color': '#000000',
        'background-size: ': '100% 100%',
        'background': 'rgba(0, 0, 0, 0.6);',
        'z-index': 9999,
        'top': 0,
        'left': 0,
        'width': '100%'
    });
    showTooltip();

    $('#topTooltip , #overlay').bind('click' , function(){
      $("#overlay").remove();
      $("#topTooltip").hide();
    });
}

function showTooltip() {
    if ($("#topTooltip").is(":visible")) {
        $("#topTooltip").hide();
    } else {
        var width = $('#topTooltip').css('width');
        var height = $('#topTooltip').css('height');
        width = width.replace('px', '');
        height = height.replace('px', '');
        var srcWith = width;
        if ($(window).width() < width) {
            width = $(window).width() - 32;
            height = height * (width / srcWith);
        }
        $('#topTooltip img').css({'width': width + 'px', 'height': height + 'px'});
        $('#topTooltip').css({'left': '50%', 'margin-left': -(parseInt(width / 2)) + 'px','z-index':99999}).fadeIn();
    }
}
