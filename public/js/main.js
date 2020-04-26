$('.menu > ul, li').off('click').on('click', function(e){
  e.stopPropagation()
  $('#const').addClass('constHide')
  $('.menu-container').addClass('menuMove')
  $('h1').addClass('h1Shrink')
  $('.menu').addClass('menuShrink')
  $('li').each( (i,el) => {
    console.log(el.id)
    console.log(this.id)
    if (el.id === this.id){
      $(this).addClass('white')
    } else {
      el.classList.add('grey')
      el.classList.remove('white')
    }
  })
})