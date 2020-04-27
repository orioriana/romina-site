$('.menu > ul, li').off('click').on('click', function(e){
  e.stopPropagation()
  $('#const').addClass('constHide')
  $('h1 > .green').addClass('menuMove')
  $('h1').addClass('h1Shrink')
  $('.menu').addClass('menuShrink')
  $('.menu-li').each( (i,el) => {
    if (el.id === this.id){
      $(this).addClass('white')
    } else {
      el.classList.add('grey')
      el.classList.remove('white')
    }
  })
  $('.pages > div').removeClass('display-content').css('display', 'none');
  if(this.id == 'about'){
    $('#about-content').addClass('display-content').css('display', 'block');
  }
  if(this.id == 'skills'){
    $('#skills-content').addClass('display-content').css('display', 'flex');
  }
  if(this.id == 'work'){
    $('#work-content').addClass('display-content').css('display', 'flex');
  }
})