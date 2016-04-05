$(document).ready(function(){
		
	particlesJS('particles-js',
	  
	  {
	  "particles": {
	    "number": {
	      "value": 80,
	      "density": {
	        "enable": true,
	        "value_area": 800
	      }
	    },
	    "color": {
	      "value": "#1a9645"
	    },
	    "shape": {
	      "type": "circle",
	      "stroke": {
	        "width": 0,
	        "color": "#000000"
	      },
	      "polygon": {
	        "nb_sides": 5
	      },
	      "image": {
	        "src": "img/github.svg",
	        "width": 100,
	        "height": 100
	      }
	    },
	    "opacity": {
	      "value": 0.2725800503471389,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 1,
	        "opacity_min": 0.1,
	        "sync": false
	      }
	    },
	    "size": {
	      "value": 10,
	      "random": true,
	      "anim": {
	        "enable": false,
	        "speed": 40,
	        "size_min": 0.1,
	        "sync": false
	      }
	    },
	    "line_linked": {
	      "enable": true,
	      "distance": 150,
	      "color": "#1a9645",
	      "opacity": 0.4,
	      "width": 1
	    },
	    "move": {
	      "enable": true,
	      "speed": 2,
	      "direction": "none",
	      "random": false,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": false,
	      "attract": {
	        "enable": false,
	        "rotateX": 600,
	        "rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
	        "enable": true,
	        "mode": "grab"
	      },
	      "onclick": {
	        "enable": true,
	        "mode": "repulse"
	      },
	      "resize": true
	    },
	    "modes": {
	      "grab": {
	        "distance": 182.71737276780266,
	        "line_linked": {
	          "opacity": 0.4359915105049279
	        }
	      },
	      "bubble": {
	        "distance": 400,
	        "size": 40,
	        "duration": 2,
	        "opacity": 8,
	        "speed": 3
	      },
	      "repulse": {
	        "distance": 200,
	        "duration": 0.4
	      },
	      "push": {
	        "particles_nb": 4
	      },
	      "remove": {
	        "particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	}
	
	);
});




var quiz_array = Array();

$("#start_quiz_form").validate({

    rules: {
	    name:{
		    required:true
	    },
	    email:{
		    required:true,
		    email:true
	    }
    },
	success: function(label, element){
		$(element).removeClass("form_error").siblings(".validation").show().removeClass("error").html("<i class='fa fa-check'></i>");
		
	},   
	highlight: function(element, errorClass) {
	    $(element).addClass("form_error");	
		$(element).siblings(".validation").show().addClass("error").html("<i class='fa fa-exclamation-triangle'></i>");
	},
    submitHandler: function (form) {
	    
        $("#start_quiz_form_error").html("Loading <i class='fa fa-spinner fa-spin'></i>");
		
		var full_name = $("#start_quiz_name").val();
 		var email = $("#start_quiz_email").val();
   
        var data = {
	        full_name: full_name,
	        email: email
        }; 
        
        quiz_array["name"] = full_name;
        quiz_array["email"] = email;
        
        ///send email and name somewhere.....
        
         
    
        
        ///send email and name somewhere.....
        
        $("#start_page").fadeOut(500, function(){
	        $("#start_page").hide();
	        $("#quiz_page").fadeIn(500, function(){
		        $("#quiz_page").show();
	        });
        });
       
        
        
        
		/*
        $.ajax({
            type: "POST",
            url: "custom_script.php",
            data: data,
            success: function (res) {
				
				try
				{
				 	
				}
				catch(e)
				{
                 $("#start_quiz_form_error").html(e);
				} 
            }
        });
        */
    }
});


