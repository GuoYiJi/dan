function initPos(parent){
  var pos = []
  // 初始化定位在input里面的tag
  parent.find('.J-inputDefault').css( 'min-height', parent.find('.J-inputDefault').height() || 42 )
  parent.find('.J-deleteTag:visible').each(function (){
    pos.push($(this).position())
  }).each(function (i){
    $(this).css({
      position: 'absolute',
      zIndex: 11,
      left: pos[i].left,
      top: pos[i].top,
    })
  })
  return pos
}
$(function (){
  initPos($('#J-inputDefault1'))

  // Enable or Disable
  $('.J-checkRadio').on('click', function (){
    var index = parseInt($(this).data('index')), $parent = $(this).parent().parent()
    $parent.find('[type="text"]').prop('disabled', !!index)
  })

  // menu
  $('.J-selectToggle').on('click', function (){
    var pos
    var $this = $(this), $showContent = $this.next()
    if ($this.data('show') === 'hide') {
      $this.data('show', 'show').find('i').text('-')
      $showContent.show()
      pos = initPos($showContent)
    } else {
      $this.data('show', 'hide').find('i').text('+')
      $showContent.hide()
    }
  })

  // menu-select__hd > a
  $('.J-menuSelectBtn > a').on('click', function (){
    $(this).hasClass('active') ? $(this).removeClass('active') : $(this).addClass('active')
  })

  // menu-select__bd

  $('.J-inputDefault').focus(function (){
    var menuHeight = 0, $menu, $this= $(this), $menuSub
    $menu = $this.parents('.J-menu')
    $menuSub = $this.next()
    menuHeight = $menu.find('.J-selectToggle').outerHeight() + 15 + $menuSub.outerHeight()
    $menu.height(menuHeight)
    $menuSub.show()
  }).blur(function (){
    var _this = $(this)
    setTimeout(function (){
      _this.next().hide()
      _this.parents('.J-menu').height('auto')
    }, 200)
  })
  $('.J-inputDefault input').focus(function (){
    var menuHeight = 0, $menu, $this= $(this), $menuSub
    $menu = $this.parents('.J-menu')
    $menuSub = $this.parent().next()
    menuHeight = $menu.find('.J-selectToggle').outerHeight() + 15 + $menuSub.outerHeight()
    $menu.height(menuHeight)
    $menuSub.show()
  }).blur(function (){
    var _this = $(this)
    setTimeout(function (){
      _this.parent().next().hide()
      $('.J-menu').height('auto')
    }, 200)
    _this.parent().find('.J-deleteTag').css({
      position: 'relative',
      left: 'auto',
      top: 'auto'
    })
  })

  $('.J-menuSelectSub a').on('click', function (){
    var _html = '<div class="create-form__tag J-deleteTag"><i>x</i>' + $(this).text() + '</div>', $last

    $last = $(this).parent().parent().prev().append(_html).find('.J-deleteTag').last()
    $last.css({
      position: 'absolute',
      left: $last.position().left,
      top: $last.position().top,
      zIndex: 11
    })
  })


  // deleteTag
  $('.J-inputDefault').on('click', '.J-deleteTag', function (){
    var pos = [], $deleteTag
    $deleteTag = $(this).parent().find('.J-deleteTag')
    $deleteTag.css({
      position: 'relative',
      left: 'auto',
      top: 'auto'
    })
    $(this).remove()

    $deleteTag.each(function (){
      pos.push($(this).position())
    }).each(function (i){
      $(this).css({
        position: 'absolute',
        zIndex: 11,
        left: pos[i].left,
        top: pos[i].top,
      })
    })
  })
})
