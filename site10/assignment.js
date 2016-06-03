// put your javascript code here
var albums_template;
var photos_template;
var photo_template;
var slideshow_template;
var current_album = animals_data.category[0];	
var current_photo = current_album.animals[0];	
	
		function showTemplate(template, data){
			var html    = template(data);
			$('#content').html(html);
		};
		
		$(document).ready(function(){
				
			var source =$("#albums-template").html();
			albums_template = Handlebars.compile(source);
			
			source =$("#photos-template").html();
			photos_template = Handlebars.compile(source);
			
			source =$("#photo-template").html();
			photo_template = Handlebars.compile(source);
			
			source = $("#slideshow-template").html();
			slideshow_template = Handlebars.compile(source);
			
			
			
			$("#albums-tab").click(function () {
				showTemplate(albums_template, animals_data);
				$(".nav-tabs .active").removeClass("active");
				$("#albums-tab").addClass("active");
				$(".album-thumbnail").click(function (){
					var index = $(this).data("id");
					current_album = animals_data.category[index];
					showTemplate(photos_template, current_album);
					$(".photo-thumbnail").click(function (){
						
						var index = $(this).data("id");
						current_photo = current_album.animals[index];
						showTemplate(photo_template, current_photo);
						$('#myModal').modal('show');
					});
				});
			});
			$("#photos-tab").click(function () {
				showTemplate(photos_template, current_album);
				$(".nav-tabs .active").removeClass("active");
				$("#photos-tab").addClass("active");
				$(".photo-thumbnail").click(function (){
					var index = $(this).data("id");
					current_photo = current_album.animals[index];
					showTemplate(photo_template, current_photo);
					$('#myModal').modal('show');
				});
			});
			$("#slideshow-tab").click(function () {
				showTemplate(slideshow_template, current_album);
				$(".nav-tabs .active").removeClass("active");
				$("#slideshow-tab").addClass("active");
			});
			$("#about").click(function(){
				$('#content').html("Welcome to Aquila Zoo")
			});
			$("#albums-tab").click();
		});
		