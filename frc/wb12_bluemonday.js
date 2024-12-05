$(document).ready(function()
{
   $('#wb_Heading1').addClass('visibility-hidden');
   $('#wb_MaterialIcon1').addClass('visibility-hidden');
   $('#wb_MaterialIcon2').addClass('visibility-hidden');
   $('#wb_ServicesText1').addClass('visibility-hidden');
   $('#wb_ServicesText2').addClass('visibility-hidden');
   $('#wb_MaterialIcon3').addClass('visibility-hidden');
   $('#wb_MaterialIcon4').addClass('visibility-hidden');
   $('#wb_ServicesText3').addClass('visibility-hidden');
   $('#wb_ServicesText4').addClass('visibility-hidden');
   $('#wb_Heading10').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon3').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon8').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon10').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon11').addClass('visibility-hidden');
   $('#wb_MaterialIcon5').addClass('visibility-hidden');
   $('#wb_MaterialIcon6').addClass('visibility-hidden');
   $('#wb_ServicesText5').addClass('visibility-hidden');
   $('#wb_ServicesText6').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon26').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon27').addClass('visibility-hidden');
   $('#wb_FontAwesomeIcon28').addClass('visibility-hidden');
   $('#wb_Heading5').addClass('visibility-hidden');
   $('#wb_Heading8').addClass('visibility-hidden');
   $('#wb_Heading13').addClass('visibility-hidden');
   $('#wb_Heading4').addClass('visibility-hidden');
   $('#wb_MaterialIcon2').addClass('visibility-hidden');
   $('#wb_MaterialIcon2').addClass('visibility-hidden');
   $('#wb_MaterialIcon2').addClass('visibility-hidden');
   $("a[href*='#home']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#home').offset().top }, 600, 'easeOutQuad');
   });
   function onScrollHeading1()
   {
      var $obj = $("#wb_Heading1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading1', 'vanish-in', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading1').inViewPort(true))
   {
      $('#wb_Heading1').addClass("in-viewport");
   }
   onScrollHeading1();
   $(window).scroll(function(event)
   {
      onScrollHeading1();
   });
   $("a[href*='#services']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top-100 }, 600, 'easeOutQuad');
   });
   function onScrollMaterialIcon1()
   {
      var $obj = $("#wb_MaterialIcon1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon1', 'transform-bounch-in-up', 100, 1000);
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
   onScrollMaterialIcon1();
   $(window).scroll(function(event)
   {
      onScrollMaterialIcon1();
   });
   function onScrollMaterialIcon2()
   {
      var $obj = $("#wb_MaterialIcon2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'transform-bounch-in-up', 100, 1000);
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
   onScrollMaterialIcon2();
   $(window).scroll(function(event)
   {
      onScrollMaterialIcon2();
   });
   function onScrollServicesText1()
   {
      var $obj = $("#wb_ServicesText1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText1', 'transform-bounch-in-up', 100, 1000);
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
   onScrollServicesText1();
   $(window).scroll(function(event)
   {
      onScrollServicesText1();
   });
   function onScrollServicesText2()
   {
      var $obj = $("#wb_ServicesText2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText2', 'transform-bounch-in-up', 100, 1000);
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
   onScrollServicesText2();
   $(window).scroll(function(event)
   {
      onScrollServicesText2();
   });
   function onScrollMaterialIcon3()
   {
      var $obj = $("#wb_MaterialIcon3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon3', 'transform-bounch-in-up', 100, 1000);
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
   onScrollMaterialIcon3();
   $(window).scroll(function(event)
   {
      onScrollMaterialIcon3();
   });
   function onScrollMaterialIcon4()
   {
      var $obj = $("#wb_MaterialIcon4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon4', 'transform-bounch-in-up', 100, 1000);
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
   onScrollMaterialIcon4();
   $(window).scroll(function(event)
   {
      onScrollMaterialIcon4();
   });
   function onScrollServicesText3()
   {
      var $obj = $("#wb_ServicesText3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText3', 'transform-bounch-in-up', 100, 1000);
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
   onScrollServicesText3();
   $(window).scroll(function(event)
   {
      onScrollServicesText3();
   });
   function onScrollServicesText4()
   {
      var $obj = $("#wb_ServicesText4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText4', 'transform-bounch-in-up', 100, 1000);
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
   onScrollServicesText4();
   $(window).scroll(function(event)
   {
      onScrollServicesText4();
   });
   $("a[href*='#pricing']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_pricing').offset().top-100 }, 600, 'easeOutQuad');
   });
   $("a[href*='#LayoutGrid5']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid5').offset().top-100 }, 600, 'easeOutQuad');
   });
   $("a[href*='#reviews']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_reviews').offset().top-100 }, 600, 'easeOutQuad');
   });
   var Carousel1Opts =
   {
      delay: 3000,
      duration: 500,
      easing: 'linear',
      mode: 'forward',
      direction: '',
      scalemode: 1,
      pagination: true,
      pause: null,
      start: 0
   };
   $("#Carousel1").on('beforeActivate', function(event, index)
   {
      switch(index)
      {
            case 0:
               AnimateCss('wb_Title1', 'transform-scale-in', 400, 500);
               AnimateCss('wb_Review1', 'transform-lightspeed-in', 800, 500);
               AnimateCss('wb_User1', 'animate-rotate-in-left', 800, 1000);
               break;
            case 1:
               AnimateCss('wb_Title2', 'transform-scale-in', 500, 500);
               AnimateCss('wb_Review2', 'transform-lightspeed-in', 800, 500);
               AnimateCss('wb_User2', 'animate-rotate-in-left', 800, 1000);
               break;
            case 2:
               AnimateCss('wb_Title3', 'transform-scale-in', 500, 500);
               AnimateCss('wb_Review3', 'transform-lightspeed-in', 800, 500);
               AnimateCss('wb_User3', 'animate-rotate-in-left', 800, 1000);
               break;
      }
   });
   $("#Carousel1").carousel(Carousel1Opts);
   $("#Carousel1_back a").click(function()
   {
      $('#Carousel1').carousel('prev');
   });
   $("#Carousel1_next a").click(function()
   {
      $('#Carousel1').carousel('next');
   });
   $("a[href*='#support']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_support').offset().top-100 }, 600, 'easeOutQuad');
   });
   $("a[href*='#contact']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top-100 }, 600, 'easeOutQuad');
   });
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
   function onScrollHeading10()
   {
      var $obj = $("#wb_Heading10");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading10', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading10', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading10').inViewPort(true))
   {
      $('#wb_Heading10').addClass("in-viewport");
   }
   onScrollHeading10();
   $(window).scroll(function(event)
   {
      onScrollHeading10();
   });
   function onScrollFontAwesomeIcon3()
   {
      var $obj = $("#wb_FontAwesomeIcon3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon3', 'transform-lightspeed-in', 100, 1000);
      }
   }
   onScrollFontAwesomeIcon3();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon3();
   });
   function onScrollFontAwesomeIcon8()
   {
      var $obj = $("#wb_FontAwesomeIcon8");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon8', 'transform-lightspeed-in', 200, 1000);
      }
   }
   onScrollFontAwesomeIcon8();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon8();
   });
   function onScrollFontAwesomeIcon10()
   {
      var $obj = $("#wb_FontAwesomeIcon10");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon10', 'transform-lightspeed-in', 300, 1000);
      }
   }
   onScrollFontAwesomeIcon10();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon10();
   });
   function onScrollFontAwesomeIcon11()
   {
      var $obj = $("#wb_FontAwesomeIcon11");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon11', 'transform-lightspeed-in', 400, 1000);
      }
   }
   onScrollFontAwesomeIcon11();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon11();
   });
   var NewsFeedTicker1_Data = new Array();
   NewsFeedTicker1_Data[0] = ["https://a-multi-religion-election-system.multireligionvalsystem.eu.org/", "Amulti-religion electoral system", "", "We start from the principle that it is democracy that has given all religious communities freedom of religion, and that democracy be introduced in all religions, without exception. <br><br>A transition from church elections to a multi-religion electoral system in those countries that already have church elections, In other countries (USA, UK, China, India, Iran, Israel.....) that do not have similar elections, a multi-religion electoral system is introduced. !"];
   NewsFeedTicker1_Data[1] = ["https://a-multi-religion-election.multireligionvalsystem.eu.org/", "A multi-religion election", "", "We believe democracy has given all religious communities freedom of religion. We also think democracy should be introduced in all religions, without exception.<br>First, we move from church elections to a multi-religion electoral system in countries with church elections. In other countries like the USA, UK, China, India, Iran, and Israel, which don&apos;t have these elections, we introduce a multi-religion system.<br><br><br><br>Vapenindustrin &#228;r en oh&#229;llbar industri och d&#228;rf&#246;r m&#229;ste den avvecklas p&#229; samma s&#228;tt som tobaksindustrin !<br>Krig utg&#246;r ett hot mot milj&#246;n och m&#228;nskligheten."];
   NewsFeedTicker1_Data[2] = ["https://multireligionvalsystem.eu.org/flaggdesignindustrin/flaggdesignindustrin.html", "The flags and ccTLDs", "", "Why the flags of the nations wave with religious symbols over the EU, UN and NATO therefore it is important to replace the religious symbols with the countries&apos; own ccTLDs ?<br>Why do the flags of nations wave with religious symbols over the EU, UN, and NATO? It&apos;s important to replace these symbols with the countries&apos; own ccTLDs. This change would make the flags more meaningful and respectful. "];
   $("#NewsFeedTicker1").newsviewer({ mode: 'rotate', pause: 2000, pause: 2000, animation: 4, animationDuration: 500, sortOrder: 0, dataSource: 'local', param: NewsFeedTicker1_Data, target: '_self', includeDate: false, maxItems: 10});
   function onScrollMaterialIcon5()
   {
      var $obj = $("#wb_MaterialIcon5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon5', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon5').inViewPort(true))
   {
      $('#wb_MaterialIcon5').addClass("in-viewport");
   }
   onScrollMaterialIcon5();
   $(window).scroll(function(event)
   {
      onScrollMaterialIcon5();
   });
   function onScrollMaterialIcon6()
   {
      var $obj = $("#wb_MaterialIcon6");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon6', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon6', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon6').inViewPort(true))
   {
      $('#wb_MaterialIcon6').addClass("in-viewport");
   }
   onScrollMaterialIcon6();
   $(window).scroll(function(event)
   {
      onScrollMaterialIcon6();
   });
   function onScrollServicesText5()
   {
      var $obj = $("#wb_ServicesText5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText5', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText5').inViewPort(true))
   {
      $('#wb_ServicesText5').addClass("in-viewport");
   }
   onScrollServicesText5();
   $(window).scroll(function(event)
   {
      onScrollServicesText5();
   });
   function onScrollServicesText6()
   {
      var $obj = $("#wb_ServicesText6");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText6', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText6', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText6').inViewPort(true))
   {
      $('#wb_ServicesText6').addClass("in-viewport");
   }
   onScrollServicesText6();
   $(window).scroll(function(event)
   {
      onScrollServicesText6();
   });
   function onScrollFontAwesomeIcon26()
   {
      var $obj = $("#wb_FontAwesomeIcon26");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon26', 'transform-lightspeed-in', 500, 1000);
      }
   }
   onScrollFontAwesomeIcon26();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon26();
   });
   function onScrollFontAwesomeIcon27()
   {
      var $obj = $("#wb_FontAwesomeIcon27");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon27', 'transform-lightspeed-in', 600, 1000);
      }
   }
   onScrollFontAwesomeIcon27();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon27();
   });
   function onScrollFontAwesomeIcon28()
   {
      var $obj = $("#wb_FontAwesomeIcon28");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_FontAwesomeIcon28', 'transform-lightspeed-in', 700, 1000);
      }
   }
   onScrollFontAwesomeIcon28();
   $(window).scroll(function(event)
   {
      onScrollFontAwesomeIcon28();
   });
   function onScrollHeading5()
   {
      var $obj = $("#wb_Heading5");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading5', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading5', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading5').inViewPort(true))
   {
      $('#wb_Heading5').addClass("in-viewport");
   }
   onScrollHeading5();
   $(window).scroll(function(event)
   {
      onScrollHeading5();
   });
   function onScrollHeading8()
   {
      var $obj = $("#wb_Heading8");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading8', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading8', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading8').inViewPort(true))
   {
      $('#wb_Heading8').addClass("in-viewport");
   }
   onScrollHeading8();
   $(window).scroll(function(event)
   {
      onScrollHeading8();
   });
   function onScrollHeading13()
   {
      var $obj = $("#wb_Heading13");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading13', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading13', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading13').inViewPort(true))
   {
      $('#wb_Heading13').addClass("in-viewport");
   }
   onScrollHeading13();
   $(window).scroll(function(event)
   {
      onScrollHeading13();
   });
   function onScrollHeading4()
   {
      var $obj = $("#wb_Heading4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_Heading4', 'transform-swing', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_Heading4', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Heading4').inViewPort(true))
   {
      $('#wb_Heading4').addClass("in-viewport");
   }
   onScrollHeading4();
   $(window).scroll(function(event)
   {
      onScrollHeading4();
   });
   function onScrollMaterialIcon15()
   {
      var $obj = $("#wb_MaterialIcon15");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon15').inViewPort(true))
   {
      $('#wb_MaterialIcon15').addClass("in-viewport");
   }
   onScrollMaterialIcon15();
   $(window).scroll(function(event)
   {
      onScrollMaterialIcon15();
   });
   function onScrollMaterialIcon16()
   {
      var $obj = $("#wb_MaterialIcon16");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon16').inViewPort(true))
   {
      $('#wb_MaterialIcon16').addClass("in-viewport");
   }
   onScrollMaterialIcon16();
   $(window).scroll(function(event)
   {
      onScrollMaterialIcon16();
   });
   function onScrollMaterialIcon17()
   {
      var $obj = $("#wb_MaterialIcon17");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'transform-bounch-in-up', 100, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon17').inViewPort(true))
   {
      $('#wb_MaterialIcon17').addClass("in-viewport");
   }
   onScrollMaterialIcon17();
   $(window).scroll(function(event)
   {
      onScrollMaterialIcon17();
   });
   var sliderSlideShow1 = $('#SlideShow1-gallery').lightSlider(
   {
      controls: false,
      gallery: true,
      item: 1,
      loop: true,
      thumbItem: 3,
      thumbMargin: 5,
      galleryMargin: 5,
      pause: 3000,
      auto: true
});
   var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
   if (iOS)
   {
      $('#home').css('background-attachment', 'scroll');
   }
});
