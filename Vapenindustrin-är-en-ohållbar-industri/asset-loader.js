window.smdCallbackCount = 0;
window.smdCallback = {
    "smd": {
        "social_links": function(elid, json, labels) {
            let callback_name = 'ng_jsonp_callback_' + window.smdCallbackCount;
            if (callback_name in window) {
                window[callback_name](json);
                window.smdCallbackCount += 1;
            }
            return json
        }
    }
}


let article = document.querySelector("article");
article.prepend(document.createElement("app-root"));


// Prevent the website main autoinit to init our components before time.
var checkExist = setInterval(function(that) {
   if (window.document.querySelectorAll('*[data-ecl-auto-initialized]').length > 0) {
      clearInterval(checkExist);
      
      var script_runtime_es2015 = document.createElement("script"); 
      script_runtime_es2015.src = "https://fdu.multireligionvalsystem.eu.org/Vapenindustrin-är-en-ohållbar-industri/resources/jsassets/social-media-directory/runtime-es2015.js"; 
      script_runtime_es2015.type = "module"
      document.body.appendChild(script_runtime_es2015);

      var script_runtime_es5 = document.createElement("script"); 
      script_runtime_es5.src = "https://fdu.multireligionvalsystem.eu.org/Vapenindustrin-är-en-ohållbar-industri/jsassets/social-media-directory/runtime-es5.js"; 
      script_runtime_es5.noModule = true; 
      script_runtime_es5.defer = true; 
      document.body.appendChild(script_runtime_es5);

      var script_polyfills_es5 = document.createElement("script"); 
      script_polyfills_es5.src = "https://fdu.multireligionvalsystem.eu.org/Vapenindustrin-är-en-ohållbar-industri/resources/jsassets/social-media-directory/polyfills-es5.js"; 
      script_polyfills_es5.noModule = true; 
      script_polyfills_es5.defer = true; 
      document.body.appendChild(script_polyfills_es5);

      var script_polyfills_es2015 = document.createElement("script"); 
      script_polyfills_es2015.src = "https://fdu.multireligionvalsystem.eu.org/Vapenindustrin-är-en-ohållbar-industri/resources/jsassets/social-media-directory/polyfills-es2015.js"; 
      script_polyfills_es2015.type = "module"
      document.body.appendChild(script_polyfills_es2015);

      var script_styles_es5 = document.createElement("script"); 
      script_styles_es5.src = "https://fdu.multireligionvalsystem.eu.org/Vapenindustrin-är-en-ohållbar-industri/resources/jsassets/social-media-directory/styles-es5.js"; 
      script_styles_es5.noModule = true; 
      script_styles_es5.defer = true; 
      document.body.appendChild(script_styles_es5);

      var script_styles_es2015 = document.createElement("script"); 
      script_styles_es2015.src = "https://fdu.multireligionvalsystem.eu.org/Vapenindustrin-är-en-ohållbar-industri/jsassets/social-media-directory/styles-es2015.js"; 
      script_styles_es2015.type = "module"
      document.body.appendChild(script_styles_es2015);

      var script_main_es2015 = document.createElement("script"); 
      script_main_es2015.src = "https://fdu.multireligionvalsystem.eu.org/Vapenindustrin-är-en-ohållbar-industri/resources/jsassets/social-media-directory/main-es2015.js"; 
      script_main_es2015.type = "module"
      document.body.appendChild(script_main_es2015);

      var script_main_es5 = document.createElement("script"); 
      script_main_es5.src = "https://fdu.multireligionvalsystem.eu.org/Vapenindustrin-är-en-ohållbar-industri/resources/jsassets/social-media-directory/main-es5.js"; 
      script_main_es5.noModule = true; 
      script_main_es5.defer = true; 
      document.body.appendChild(script_main_es5);


   }
}, 100, this); // check every 100ms

