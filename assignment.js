// put your javascript code here

//variable for all animal tab 
var animals_template, reptiles_template, slideshow_template;
//variable to store the current display animals and photo
var current_reptiles = animals_data.category[0];
var current_mammles = animals_data.category[1];
var current_birds = animals_data.category[2];
var current_animal = current_reptiles.animals[0];

//a healper function that instantiates a template and 
// displays the results in the content div
function showTemplate(template, data){
	var html = template(data);
	$('#content').html(html);
}

//document read gets called when the whole document
//is loaded, so we put most od the code that needs to run in here 
$(document).ready(function(){
	
	//tab1
	
	//compile all of our templates ready for userAgent
	var source = $("#animals-template").html();
	animals_template = Handlebars.compile(source);
	
	source = $("#slideshow-template").html();
	slideshow_template = Handlebars.compile(source);	
	
	source = $("#reptiles-template").html();
	reptiles_template = Handlebars.compile(source);
	
	$(".animals-tab").click(function(){
		
		showTemplate(animals_template, animals_data);
	
		$(".nav-tabs .active").removeClass("active");
		// then make albums tab active
		$(".animals-tab").addClass("active");
		
		$(".animal-thumbnail").click( function (){
			var index = $(this).data("id");			
			current_reptiles = animals_data.category[index];
			showTemplate(reptiles_template, current_reptiles);
			
			$(".reptile-thumbnail").click(function (){
				var index = $(this).data("id");

				
				// displays the single photo template
				showTemplate(slideshow_template, current_reptiles);
			});
		});			
	});
	
	//tab2
	
	
	$(".reptiles-tab").click(function(){
		
		showTemplate(reptiles_template, current_reptiles);	
		
	});
	
	//tab3
	source = $("#mammles-template").html();
	mammles_template = Handlebars.compile(source);
	
	$(".mammles-tab").click(function(){
		showTemplate(mammles_template, current_mammles);										
	});
	
	//tab4
	source = $("#birds-template").html();
	birds_template = Handlebars.compile(source);
	
	$(".birds-tab").click(function(){
		showTemplate(birds_template, current_birds);										
	});
	
	//tab5 all
	source = $("#all-template").html();
	all_template = Handlebars.compile(source);
	
	$(".all-tab").click(function(){
		showTemplate(all_template, animals_data);										
	});
	
	
	// start the page by showing the albums view
	// we do this by virtually clicking on the animals tab
	$(".animals-tab").click();	
});