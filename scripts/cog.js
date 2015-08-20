$(document).ready(function(){
    
    
 $(document).on({
    mouseenter: function() {
        $("#mein").html("me");
        $("#mein").addClass("high");
    },
    mouseleave: function() {
        $("#mein").html("<i class='fa fa-user'></i>");
        $("#mein").removeClass("high");
    },
    click: function() {
        $('html, body').animate({scrollTop: $("#me").offset().top}, 600);
    }
}, "#mein"); 
    
    
 $(document).on({
    mouseenter: function() {
        $("#projectus").html("projects");
        $("#projectus").addClass("high");
    },
    mouseleave: function() {
        $("#projectus").html("<i class='fa fa-cog'></i>");
        $("#projectus").removeClass("high");
    },
    click: function() {
        $('html, body').animate({scrollTop: $("#projects").offset().top}, 600);
    }
}, "#projectus");

    
 $(document).on({
    mouseenter: function() {
        $("#galleria").html("gallery");
        $("#galleria").addClass("high");
    },
    mouseleave: function() {
        $("#galleria").html("<i class='fa fa-camera'></i>");
        $("#galleria").removeClass("high");
    },
    click: function() {
        $('html, body').animate({scrollTop: $("#gallery").offset().top}, 600);
    }
}, "#galleria");
    

 $(document).on({
    mouseenter: function() {
        $("#contacto").html("contact");
        $("#contacto").addClass("high");
    },
    mouseleave: function() {
        $("#contacto").html("<i class='fa fa-comments'></i>");
        $("#contacto").removeClass("high");
    },
    click: function() {
       $('html, body').animate({scrollTop: $("#contact").offset().top}, 600);
    }
}, "#contacto");


    
$(window).scroll(function(){
    
    var win_top = $(window).scrollTop()-30;
    var nav_top = $('#nav-anchor').offset().top;
    var me_top = $('#me').offset().top;
	var pro_top = $('#projects').offset().top;
	var gal_top = $('#gallery').offset().top;
	var con_top= $('#contact').offset().top;
    if (win_top > nav_top) 
        $('#nav-bar').addClass('sticker');
    else 
        $('#nav-bar').removeClass('sticker');

	var sti_top = $('#nav-bar').outerHeight();

	if ((win_top + sti_top) > con_top - 100) {
		$('#nav-bar a').removeClass('high');
		$('#contacto').addClass('high');
	} else if ((win_top + sti_top) > gal_top) {
		$('#nav-bar a').removeClass('high');
		$('#galleria').addClass('high');
	} else if ((win_top + sti_top) > pro_top) {
		$('#nav-bar a').removeClass('high');
		$('#projectus').addClass('high');
	} else if ((win_top + sti_top) > me_top) {
		$('#nav-bar a').removeClass('high');
		$('#mein').addClass('high');
	} else if ((win_top + sti_top) < me_top) {
		$('#nav-bar a').removeClass('high');
	}
});


});





