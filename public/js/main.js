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
  if(this.id == 'contact'){
    $('#contact-content').addClass('display-content').css('display', 'flex');
  }
})

$('#next').on('click', function(e){
  e.stopPropagation()
  $('#experience-page1').removeClass('display-content').css('display', 'flex').css('display', 'none');
  $('#experience-page2').addClass('display-content').css('display', 'flex');
  $('#previous').css('display', 'block');
  $('#next').css('display', 'none');

})
$('#previous').on('click', function(e){
  e.stopPropagation()
  $('#experience-page2').removeClass('display-content').css('display', 'none');
  $('#experience-page1').addClass('display-content').css('display', 'flex');
  $('#previous').css('display', 'none');
  $('#next').css('display', 'block');
})

$('#present').on('click', function(e){
  e.stopPropagation()
  $(this).removeClass('grey').addClass('green');
  $("#past").removeClass('green').addClass('grey');
  $(".present-section").addClass('display-content').css('display', 'block');
  $('.past-section').removeClass('display-content').css('display', 'none');
})

$('#past').on('click', function(e){
  e.stopPropagation()
  $(this).removeClass('grey').addClass('green');
  $("#present").removeClass('green').addClass('grey');
  $(".past-section").addClass('display-content').css('display', 'block');
  $('.present-section').removeClass('display-content').css('display', 'none');
})

