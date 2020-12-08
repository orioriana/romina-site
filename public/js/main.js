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

const experiencePage1 = $('#experience-page1')
const experiencePage2 = $('#experience-page2')
const experiencePastSection = $(".present-section")
const experiencePresentSection =  $(".past-section")

$('#next').on('click', function(e){
  e.stopPropagation()
  toggleVisibility(experiencePage1, experiencePage2)
  $('#previous').css('display', 'block');
  $('#next').css('display', 'none');

})
$('#previous').on('click', function(e){
  e.stopPropagation()
  toggleVisibility(experiencePage2, experiencePage1)
  $('#previous').css('display', 'none');
  $('#next').css('display', 'block');
})

$('#present').on('click', function(e){
  e.stopPropagation()
  $(this).removeClass('grey').addClass('green');
  $("#past").removeClass('green').addClass('grey');
  toggleVisibility(experiencePastSection, experiencePresentSection)
})

$('#past').on('click', function(e){
  e.stopPropagation()
  $(this).removeClass('grey').addClass('green');
  $("#present").removeClass('green').addClass('grey');
  toggleVisibility(experiencePresentSection, experiencePastSection)
})

const toggleVisibility = ( hide, show ) => {
  hide.removeClass('display-content').css('display', 'none');
  show.addClass('display-content').css('display', 'flex');
}