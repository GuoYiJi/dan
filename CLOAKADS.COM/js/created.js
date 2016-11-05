$(function (){

  // Enable or Disable
  $('.J-checkRadio').on('click', function (){
    var index = parseInt($(this).data('index')), $parent = $(this).parent().parent()
    $parent.find('[type="text"]').prop('disabled', !!index)
  })

  // menu
  $('.J-selectToggle').on('click', function (){
    var $this = $(this), $showContent = $this.next()
    if ($this.data('show') === 'hide') {
      $this.data('show', 'show').find('i').text('-')
      $showContent.show()
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
  $('.J-menuSelectSub input').focus(function (){
    var menuHeight = 0, $menu, $this= $(this), $menuSub
    $menu = $this.parents('.J-menu')
    $menuSub = $this.parent().next()
    menuHeight = $menu.find('.J-selectToggle').outerHeight() + 15 + $menuSub.outerHeight()
    $menu.height(menuHeight)
    $menuSub.show()
  }).blur(function (){
    $(this).parent().next().hide()
    $('.J-menu').height('auto')
  })
})
