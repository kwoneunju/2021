$(function(jQuery) {
  var layer = $('.layer_wrap'),
      arrHeight = []
  
  function chagngeLayer(_index, _flag) {
    layer.removeClass('layer_on').eq(_index).addClass('layer_on')
  
    if (_flag == 'prev') {
      // hide Layer
      layer.find('.layer_inner').css({
        height: arrHeight[_index + 1]
      })
  
      // show Layer
      layer.find('.layer_inner').css({
        height: arrHeight[_index]
      })
    } else {
      // hide Layer
      layer.find('.layer_inner').css({
        height: arrHeight[_index - 1]
      })
  
      // show Layer
      layer.find('.layer_inner').css({
        height: arrHeight[_index]
      })
    }
  }
  
  $('button').on('click', function () {
    var leng = $('.layer_wrap').index(),
      idx = $(this).closest('.layer_wrap').index() - leng,
      flag = '';
  
    if($(this).hasClass('btn_sm')) {
      if ($(this).hasClass('gray')) {
        if (idx != 0) {
          idx -= 1
          flag = 'prev'
        }
      } else {
        if (idx != layer.length - 1) {
          idx += 1
          flag = 'next'
        }
      }
      chagngeLayer(idx, flag)
    } else {
      if($(this).hasClass('btn_show')) {
        chagngeLayer(0)
      } else {
        $(this).closest('.layer_wrap').removeClass('layer_on')
      }
    }
  })
})