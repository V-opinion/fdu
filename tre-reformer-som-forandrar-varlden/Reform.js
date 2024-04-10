$(document).ready(function()
{
   $('#wb_MaterialIcon1').addClass('visibility-hidden');
   $('#wb_MaterialIcon2').addClass('visibility-hidden');
   $('#wb_ServicesText1').addClass('visibility-hidden');
   $('#wb_ServicesText2').addClass('visibility-hidden');
   $('#wb_MaterialIcon3').addClass('visibility-hidden');
   $('#wb_MaterialIcon4').addClass('visibility-hidden');
   $('#wb_ServicesText3').addClass('visibility-hidden');
   $('#wb_ServicesText4').addClass('visibility-hidden');
   $('#wb_PanelText1').addClass('visibility-hidden');
   $('#wb_PanelImage1').addClass('visibility-hidden');
   $('#wb_PanelImage2').addClass('visibility-hidden');
   $('#wb_PanelImage3').addClass('visibility-hidden');
   $('#wb_PanelText2').addClass('visibility-hidden');
   $('#wb_PanelText3').addClass('visibility-hidden');
   $("a[href*='#home']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#home').offset().top }, 600, 'easeInQuad');
   });
   $("a[href*='#party']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_party').offset().top-80 }, 600, 'easeInQuad');
   });
   function MaterialIcon1Scroll()
   {
      var $obj = $("#wb_MaterialIcon1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon1', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon1').inViewPort(true))
   {
      $('#wb_MaterialIcon1').addClass("in-viewport");
   }
   MaterialIcon1Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon1Scroll();
   });
   function MaterialIcon2Scroll()
   {
      var $obj = $("#wb_MaterialIcon2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon2').inViewPort(true))
   {
      $('#wb_MaterialIcon2').addClass("in-viewport");
   }
   MaterialIcon2Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon2Scroll();
   });
   function ServicesText1Scroll()
   {
      var $obj = $("#wb_ServicesText1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText1', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText1').inViewPort(true))
   {
      $('#wb_ServicesText1').addClass("in-viewport");
   }
   ServicesText1Scroll();
   $(window).scroll(function(event)
   {
      ServicesText1Scroll();
   });
   function ServicesText2Scroll()
   {
      var $obj = $("#wb_ServicesText2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText2', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText2').inViewPort(true))
   {
      $('#wb_ServicesText2').addClass("in-viewport");
   }
   ServicesText2Scroll();
   $(window).scroll(function(event)
   {
      ServicesText2Scroll();
   });
   function MaterialIcon3Scroll()
   {
      var $obj = $("#wb_MaterialIcon3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon3', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon3').inViewPort(true))
   {
      $('#wb_MaterialIcon3').addClass("in-viewport");
   }
   MaterialIcon3Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon3Scroll();
   });
   function MaterialIcon4Scroll()
   {
      var $obj = $("#wb_MaterialIcon4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon4', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon4', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon4').inViewPort(true))
   {
      $('#wb_MaterialIcon4').addClass("in-viewport");
   }
   MaterialIcon4Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon4Scroll();
   });
   function ServicesText3Scroll()
   {
      var $obj = $("#wb_ServicesText3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText3', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText3').inViewPort(true))
   {
      $('#wb_ServicesText3').addClass("in-viewport");
   }
   ServicesText3Scroll();
   $(window).scroll(function(event)
   {
      ServicesText3Scroll();
   });
   function ServicesText4Scroll()
   {
      var $obj = $("#wb_ServicesText4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText4', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText4', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText4').inViewPort(true))
   {
      $('#wb_ServicesText4').addClass("in-viewport");
   }
   ServicesText4Scroll();
   $(window).scroll(function(event)
   {
      ServicesText4Scroll();
   });
   $("a[href*='#gallery']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_gallery').offset().top-80 }, 600, 'easeInQuad');
   });
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
   function PanelText1Scroll()
   {
      var $obj = $("#wb_PanelText1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelText1', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelText1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelText1').inViewPort(true))
   {
      $('#wb_PanelText1').addClass("in-viewport");
   }
   PanelText1Scroll();
   $(window).scroll(function(event)
   {
      PanelText1Scroll();
   });
   $("a[href*='#contact']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-80 }, 600, 'easeInQuad');
   });
   function PanelImage1Scroll()
   {
      var $obj = $("#wb_PanelImage1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelImage1', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelImage1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelImage1').inViewPort(true))
   {
      $('#wb_PanelImage1').addClass("in-viewport");
   }
   PanelImage1Scroll();
   $(window).scroll(function(event)
   {
      PanelImage1Scroll();
   });
   function PanelImage2Scroll()
   {
      var $obj = $("#wb_PanelImage2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelImage2', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelImage2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelImage2').inViewPort(true))
   {
      $('#wb_PanelImage2').addClass("in-viewport");
   }
   PanelImage2Scroll();
   $(window).scroll(function(event)
   {
      PanelImage2Scroll();
   });
   function PanelImage3Scroll()
   {
      var $obj = $("#wb_PanelImage3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelImage3', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelImage3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelImage3').inViewPort(true))
   {
      $('#wb_PanelImage3').addClass("in-viewport");
   }
   PanelImage3Scroll();
   $(window).scroll(function(event)
   {
      PanelImage3Scroll();
   });
   function PanelText2Scroll()
   {
      var $obj = $("#wb_PanelText2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelText2', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelText2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelText2').inViewPort(true))
   {
      $('#wb_PanelText2').addClass("in-viewport");
   }
   PanelText2Scroll();
   $(window).scroll(function(event)
   {
      PanelText2Scroll();
   });
   function PanelText3Scroll()
   {
      var $obj = $("#wb_PanelText3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelText3', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelText3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelText3').inViewPort(true))
   {
      $('#wb_PanelText3').addClass("in-viewport");
   }
   PanelText3Scroll();
   $(window).scroll(function(event)
   {
      PanelText3Scroll();
   });
});
$(document).ready(function()
{
   // change the date here
   var dateFuture = new Date("June 21, 2018 12:00:00");
   var dateNow = new Date();
   var seconds = Math.floor((dateFuture - (dateNow))/1000);
   var minutes = Math.floor(seconds/60);
   var hours = Math.floor(minutes/60);
   var days = Math.floor(hours/24);

   hours = hours-(days*24);
   minutes = minutes-(days*24*60)-(hours*60);
   seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
   
   $('#wb_days strong').first().data('value', days).addClass('counter');
   $('#wb_hours strong').first().data('value', hours).addClass('counter');
   $('#wb_minutes strong').first().data('value', minutes).addClass('counter');
   $('#wb_seconds strong').first().data('value', seconds).addClass('counter');

   // change the ID here: 'home' is the ID of the layout grid!
   var $numbers = $('#home .counter');
     
   $numbers.each(function() 
   {
     var $obj = $(this);
     $obj.data('done', false);
     $obj.text('0');
   });
   $(window).bind('scroll', function() 
   {
      $numbers.each(function() 
      {
         var $obj = $(this);
         if (!$obj.data('done') && $(window).scrollTop() + $(window).height() >= $obj.offset().top) 
         {
            $obj.data('done', true);
            $obj.animate({scroll: 1}, 
            { 
               duration: 3000, 
               step: function(now) 
               {
                  var $obj = $(this);
                  var val = Math.round($obj.data('value') * now);
                  $obj.text(val);
               }
            });
         }
      });
   }).triggerHandler('scroll');
});
