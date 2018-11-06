


// menu toggle button first way with jquery

 $(document).ready(function(){


  


  $('#toggle-btn').click(function(){
  
    $('.nav-links').slideToggle('slow');

   });
  



  $(window).scroll(function(){
   let scroll = $(window).scrollTop();

   if(scroll>=70){
    $('#nav').addClass("new-nav");
   }

   else{
     $('#nav').removeClass("new-nav");
   }

  })


  //smooth scroll
  $('nav a').click(function(link){
    
   link.preventDefault();
   let target = $(this).attr('href');
   $('html,body').animate({
     scrollTop:$(target).offset().top
   },'slow');
  })


  // jquery progressbar

  $( "#p-bar-1" ).progressbar({
    value: 90
  });

  $( "#p-bar-2" ).progressbar({
    value: 68
  });

  $( "#p-bar-3" ).progressbar({
    value: 53
  });

  $( "#p-bar-4" ).progressbar({
    value: 57
  });


 })




// menu toggle button second way with pure javascript

//  let button = document.getElementById('toggle-btn');
//  let links = document.querySelector('.nav-links');

//  button.addEventListener('click',change);

//  function change(){
//  if(links.style.display ==='block'){
//   links.style.display ='none';
  
//  }

//  else{

//   links.style.display ='block';

//  }

//  }


