pageCount = 0;
//tells us what point we're at in page progression
audioMenu = 1;

function init(){
	$(".fill-page").css("opacity", "0");
	$(".header-main").html("hey Curalate");
	$(".intro-sub").html("i heard you like unique intros");
	$(".intro-sub-two").html("so i made this website -- (fyi, he took my name... ");
	$(".intro-sub-three").html(" ... and my good looks)");

	setTimeout(function(){
		$(".fill-page").css("background-color", "black");
		$(".fill-page").css("background-image", "none");
		setTimeout(function(){
			$(".fill-page").css("opacity", "1");
		}, 1000);
	}, 1000);

	setTimeout(function(){
		$(".header-main").css("opacity", "1");
	}, 800);

	setTimeout(function(){
		$(".intro-sub").css("opacity", "1");
		$(".gosling").css("opacity", "1");
		$(".gosling").css("display", "block");
		$(".fill-page").css("opacity", "0.6");
		setTimeout(function(){
			$(".intro-sub-two").css("opacity", "1");
			setTimeout(function(){
				$(".intro-sub-three").css("opacity", "1");
				setTimeout(function(){
					clearPage();
					pageCount++;
					setTimeout(function(){
						trans();
						//need a 1k timeout to wait for transition property
					}, 1000);	
				}, 4000);			
			}, 4000);
		}, 3000);
	}, 3000);
}

function clearPage(){
	$(".center").children().css("opacity", "0");
	$(".intro-sub-bonus").css("opacity", "0");
	setTimeout(function(){
		//wait for transition property before removing text
		$(".center").children().html("");
		$(".intro-sub-bonus").html("");
	}, 1000);
}

function trans(){
	switch(pageCount) {
		case 1: 
			$(".gosling").css("opacity", "0");
			$(".fill-page").css("opacity", "1");
			$(".header-main").css("display", "none");
			$(".intro-sub").html("so hi  :)");
			$(".intro-sub").css("opacity", "1");
			setTimeout(function(){
				$(".intro-sub-two").html("enough with this adult swim stuff though (it kinda just happened)");
				$(".intro-sub-two").css("opacity", "1");
				$(".gosling").css("display", "none");
				setTimeout(function(){
					clearPage();
					pageCount++;
					setTimeout(function(){
						trans();
					}, 1000)
				}, 4000);
			}, 2000);
			break;
		case 2:
			$(".intro-sub").html("ive noticed you guys really like these...");
			$(".intro-sub").css("opacity", "1");
			$(".fill-page-color").css("display", "block");
			setTimeout(function(){
				$(".instagram").slideDown(function(){
					$(".facebook").animate({ width:'toggle' }, function() {
						$(".linkedin").animate({ width: 'toggle' }, function(){
							$(".twitter").animate({ width:'toggle' }, function(){
								$(".fill-page-color").css("opacity", "0.8");
								$(".intro-sub").css("opacity", "0");
								setTimeout(function(){
									pageCount++;
									clearPage();
									setTimeout(function(){
										trans();
									}, 1000);
								}, 1000);
							});
						});
					});
				});
			}, 4000);
			break;
		case 3:
			$(".intro-sub").html("i like these too but not for the reasons that most people like them");
			$(".center").css("z-index", "102");
			$(".intro-sub").css("opacity", "1");
			$(".intro-sub-two").html("(personally im really, and i mean im REALLY bad at using them)");
			setTimeout(function(){
				$(".intro-sub-two").css("opacity", "1");
				$(".intro-sub-three").html("i make the type of facebook statuses you wish there was a downlike button for how bad they are");
				setTimeout(function(){
					$(".intro-sub-three").css("opacity", "1");
					setTimeout(function(){
						pageCount++;
						clearPage();
						$(".instagram").css("opacity", "0");
						$(".facebook").css("opacity", "0");
						$(".twitter").css("opacity", "0");
						$(".linkedin").css("opacity", "0");
						setTimeout(function(){
							trans();
						}, 1000);
					}, 8000);
				}, 5000);
			}, 4000);
			break;
		case 4:
			$(".intro-sub").html("im not the best at social media 'pranks' either");
			$(".intro-sub").css("opacity", "1");
			setTimeout(function(){
				$(".intro-sub-two").html('i see this stuff come across my feed all the time... "KATIE WAS HERE #hacked"');
				$(".intro-sub-two").css("opacity", "1");
				setTimeout(function(){
					$(".intro-sub-three").html("katie has earned 0 originality points from ryan");
					$(".intro-sub-three").css("opacity", "1");
					setTimeout(function(){
						clearPage();
						pageCount++;
						setTimeout(function(){
							trans();
						}, 1000);
					}, 4000);
				}, 5000);
			}, 4000);
			break;
		case 5:
			$(".intro-sub").html("i tried posting to twitter a few times... everything sounded so much better in my head than it did in the tweet");
			$(".intro-sub-two").html("instagram is the only one ive been somewhat decent at");
			$(".intro-sub-three").html("i get wayyyy too carried away with filters and food. theyve seriously stumbled on something magical here");
			$(".intro-sub-bonus").html('"i thought it was chocolate pudding for the longest time..."');

			$(".center-poop").css("opacity", "0");
			$(".center-poop").css("background-image", "url(poop_emoji.png)");
			$(".center-poop").animate({ opacity: 1 }, { duration: 1000 });
			
			$(".fill-page").css("opacity", "0");
			$(".fill-page-color").css("opacity", "0");
			setTimeout(function(){
				$(".fill-page-color").css("background-color", "#3DC4DA");
				$(".fill-page-color").css("opacity", ".8");

				$(".intro-sub").css("opacity", "1");
				$(".intro-sub-bonus").css("opacity", "1");
				setTimeout(function(){
					$(".intro-sub-two").css("opacity", "1");
					setTimeout(function(){
						$(".intro-sub-three").css("opacity", "1");
						setTimeout(function(){
							clearPage();
							pageCount++;
							setTimeout(function(){
								trans();
							}, 1000);
						}, 6000);
					}, 4000);
				}, 4000);
			}, 1000);

			break;
		case 6:
			$(".intro-sub").html("but i do do (ha) fun things with these social networks");
			$(".intro-sub-two").html("they're much nerdier than your standard selfie but thats fine considering im already terrible at their intended use");
			$(".intro-sub-three").html("but that's pretty much why im excited to be making this website. i want to do more with my skills and interests");

			$(".intro-sub").css("opacity", "1");
			setTimeout(function(){
				$(".intro-sub-two").css("opacity", "1");
				setTimeout(function(){
					$(".intro-sub-three").css("opacity", "1");
					setTimeout(function(){
						clearPage();
						pageCount++;
						setTimeout(function(){
							trans();
						}, 1000);
					}, 7000);
				}, 6000);
			}, 4000);
			break;
		case 7:
			$(".intro-sub").html("anyway, enough about me.");
			$(".intro-sub-two").html("this was a really small project, but i do love crafting [getting carried away with] the occassional nonsense.");
			$(".intro-sub-three").html("pls dont look at the scripts :D");

			$(".center-poop").animate({ opacity: 0 }, { duration: 1000 });
			$(".fill-page-color").css("opacity", "0");			
			setTimeout(function(){
				$(".fill-page-color").css("background-color", "#B94651");
				$(".fill-page-color").css("opacity", "1");
				$(".intro-sub").css("opacity", "1");
				setTimeout(function(){
					$(".intro-sub-two").css("opacity", "1");
					setTimeout(function(){
						$(".intro-sub-three").css("opacity", "1");
						setTimeout(function(){
							$(".play-again").css("color", "white");
							$(".play-again").html("replay if you dare (that means click here)");
							$(".play-again").css("background-color", "rgba(255, 0, 224, 0.62)");
							$(".play-again").animate({ opacity: 1 }, { duration: 1000 });
							pageCount++;
						}, 6000);
					}, 5000);
				}, 3000);
			}, 1000);
			break;
	}
}

$(document).ready(function(){
	$(".play-again").click(function() {
		if(pageCount > 7){
			//reset presentation before replaying
			clearPage();
			setTimeout(function(){
				$(".fill-page").css("background-color", "black");
				$(".fill-page-color").css("opacity", "0");
				$(".header-main").attr("style", "");
				$(".header-main").css("display", "block");
				$(".play-again").animate({ opacity: 0 }, { duration: 1000 });
				$(".fill-page-color").css("background-color", "transparent");
				
				pageCount = 0;
				setTimeout(1000);
				init();
			}, 1500);
		} else {
			$(".play-again").animate({ opacity: 0 }, { duration: 1000 });
			init();
		}
	});

	$(".fa-bars").click(function(){
		if(audioMenu == 0){
			$(".audio-fill-color").css("display", "block");
			$(".audio-file").css("display", "block");
			$(".audio-file-info").css("display", "block");
			$(".audio-fill-color").stop().animate({ opacity: 0.9}, {duration: 500});
			$(".audio-file").stop().animate({ opacity: 0.9}, {duration: 500});
			audioMenu = 1;
		} else {
			$(".audio-fill-color").stop().animate({ opacity: 0}, {duration: 500});
			$(".audio-file").stop().animate({ opacity: 0}, {duration: 500});
			setTimeout(function(){
				$(".audio-fill-color").css("display", "none");
				$(".audio-file").css("display", "none");
				$(".audio-file-info").css("display", "none");
			}, 1000);
			audioMenu = 0;
		}
	});

	var audio = $("#audio")[0];
	$(".audio-file").click(function () {
		$(".audio-file").removeClass("audio-file-active");
		$(this).addClass("audio-file-active");

		switch($(this).html()){
			case "Jungle - Busy Earnin":
				$("#audio").attr("src", "Jungle_-_Busy_Earnin.mp3");
				break;
			case "Jaymes Young - Habits of My Heart":
				$("#audio").attr("src", "Jaymes_Young_-_Habits_of_My_Heart.mp3");
				break;
			case "Axel Thesleff - Bad Karma":
				$("#audio").attr("src", "Axel_Thesleff_-_Bad_Karma.mp3");
				break;
			case "Juice Newton - Angel Of The Morning":
				$("#audio").attr("src", "Juice_Newton_-_Angel_Of_The_Morning.mp3");
				break;
			case "The 1975 - Chocolate":
				$("#audio").attr("src", "The_1975_-_Chocolate.mp3");
				break;
		}

		audio.play();
		audio.volume = 0.6;
		$(".audio-fill-color").animate({ opacity: 0}, {duration: 1000});
		$(".audio-file").animate({ opacity: 0}, {duration: 1000});
		setTimeout(function(){
			$(".audio-fill-color").css("display", "none");
			$(".audio-file").css("display", "none");
			$(".audio-file-info").css("display", "none");
		}, 1000);
		audioMenu = 0;
	});

	$(".fa-volume-down").click(function(){
		$(this).attr("style", "display: none !important");
		audio.volume = 1;
		$(".fa-volume-up").attr("style", "display: block !important");
	});
	$(".fa-volume-up").click(function(){
		$(this).attr("style", "display: none !important");
		audio.volume = 0;
		$(".fa-volume-off").attr("style", "display: block !important");
	});
	$(".fa-volume-off").click(function(){
		$(this).attr("style", "display: none !important");
		audio.volume = 0.6;
		$(".fa-volume-down").attr("style", "display: block !important");
	});
});