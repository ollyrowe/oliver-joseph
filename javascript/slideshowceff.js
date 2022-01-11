(function($)
{
	$.fn.slideshow = function(options)
	{
		Array_Defaults = {

			animation: 'fade',
			animationDirection: "left",
			animationLength: 1500,
			duration: 6000,
			infinite: false,
			autoplay: true,
			loopLimit: -1,
			queueAnimations: false,
			continueOnClick: true,
			pauseOnHover: false,
			arrows: true,
			arrowsInside: true,
			showPips: true,
			dragAndSlide: true,
			globalContent: false,
			hideContent: true,
			contentFromEdge: true

		}

		var Array_Default = $.extend(true, {}, Array_Defaults, options);

		return this.each(function(Integer_Slideshow, Element_Slideshow)
		{
			var Interval_Slideshow;

			var Integer_Slides = $(Element_Slideshow).find(".slide").length;

			var Integer_Loops = Array_Default.loopLimit;
			var Boolean_Autoplay = Array_Default.autoplay;

			var String_SlideshowClass = $(Element_Slideshow).attr("class").replace("wg-slider ", "");

			var Integer_DirectionAdjustment = 1;

			if(Array_Default.animationDirection == "right")
			{
				Integer_DirectionAdjustment = -1;
			}

			if(Array_Default.duration < 1000)
			{
				Array_Default.duration = 1000;
			}

			if(Array_Default.animationLength >= Array_Default.duration)
			{
				Array_Default.animationLength = Array_Default.duration / 4;
			}

			if(Array_Default.globalContent)
			{
				$(Element_Slideshow).after("<div class='content globalContent'></div>");

				$(Element_Slideshow).find(".globalContent").css({
					'-webkit-transition'	: 'opacity ' + Array_Default.animationLength / 10 + 'ms ease 0s',
					'-moz-transition'		: 'opacity ' + Array_Default.animationLength / 10 + 'ms ease 0s',
					'-o-transition'			: 'opacity ' + Array_Default.animationLength / 10 + 'ms ease 0s',
					'transition'			: 'opacity ' + Array_Default.animationLength / 10 + 'ms ease 0s'
				});
			}

			$(window).on('resize', function()
			{
				refreshInterval();

				preloadImages();

				if(Array_Default.hideContent)
				{
					$(Element_Slideshow).find(".slide").each(function(Integer_Index)
					{
						if(!$(this).hasClass("current"))
						{
							moveContent($(this), "hidden", false);
						}
						else
						{
							moveContent($(this), "show", false);
						}
					});
				}
			});

			$(Element_Slideshow).on('initialise', function(Event)
			{
				if(Array_Default.dragAndSlide)
				{
					$(this).addClass("draggable");
				}

				if(!Array_Default.showPips)
				{
					$(this).find("div.pips").addClass("no-pips");
				}

				$(this).find(".slide").first().addClass("current");

				$(this).find(".slide").each(function(Integer_Index)
				{
					$(this).addClass("no-transition");

					if(Array_Default.hideContent)
					{
						moveContent($(this), "hidden", false);
					}

					if(Array_Default.animation == 'move')
					{
						if(Array_Default.infinite && Integer_Index > Math.floor(Integer_Slides / 2))
						{
							$(this).data('position', Integer_Index - Integer_Slides);
						}
						else
						{
							$(this).data('position', Integer_Index);
						}

						$(this).css({ 'margin-left': Integer_DirectionAdjustment * $(this).data('position') * 100 + '%' });
					}

					triggerReflow(this);
					$(this).removeClass("no-transition");

					$(Element_Slideshow).find("div.pips").append('<span class="pip" data-index="' + Integer_Index + '"></span>');
				});

				if(Array_Default.arrows)
				{
					String_ArrowStyles = '';

					if(Integer_Slides <= 1)
					{
						String_ArrowStyles = ' style="display:none"';
					}

					if(Array_Default.arrowsInside)
					{
						$(this).find(".slides-container").append('<div class="slide-arrow arrow-left"' + String_ArrowStyles + '></div><div class="slide-arrow arrow-right"' + String_ArrowStyles + '></div>');
					}
					else
					{
						console.log("Outside Arrows");
						$(this).append('<div class="slide-arrow arrow-left"' + String_ArrowStyles + '></div><div class="slide-arrow arrow-right"' + String_ArrowStyles + '></div>');
					}
				}

				$(this).css({ 'opacity': '0' });

				if(Array_Default.animation == 'fade')
				{
					$(this).find(".slide").css({ 'opacity': '0' });
					$(this).find(".slide").first().css({ 'opacity': '1' });
				}

				$(this).find(".pip").first().addClass("current");

				$(this).removeAttr('style');

				var String_AnimationStyle = "opacity";

				if(Array_Default.animation == 'move')
				{
					String_AnimationStyle = "margin";
				}

				$(this).find(".slide").css({
					'-webkit-transition'	: String_AnimationStyle + ' ' + Array_Default.animationLength + 'ms ease 0s',
					'-moz-transition'		: String_AnimationStyle + ' ' + Array_Default.animationLength + 'ms ease 0s',
					'-o-transition'			: String_AnimationStyle + ' ' + Array_Default.animationLength + 'ms ease 0s',
					'transition'			: String_AnimationStyle + ' ' + Array_Default.animationLength + 'ms ease 0s'
				});

				preloadImages();

				if($(this).find(".slides").children().length < 2)
				{
					return true;
				}

				refreshInterval();
			});

			$(Element_Slideshow).on('click automatic', "div.pips .pip", function(Event)
			{
				if($(Element_Slideshow).find(".slide").length < 2)
				{
					Element_Slideshow.stopAnimating();
					return;
				}

				if(Event.type != 'automatic' && Array_Default.continueOnClick)
				{
					refreshInterval();
				}

				var Integer_Target = parseInt($(this).data('index'));

				var Integer_Current = parseInt($(Element_Slideshow).find(".pip.current").data('index'));

				if(Event.type == 'click')
				{
					if(Integer_Target == Integer_Current)
					{
						return;
					}

					$(Element_Slideshow).find(".slide").stop();
				}

				Element_TargetSlide = $(Element_Slideshow).find(".slide").eq(Integer_Target);
				Element_CurrentSlide = $(Element_Slideshow).find(".slide").eq(Integer_Current);

				switch(Array_Default.animation)
				{
					case 'fade':

						Element_TargetSlide.css('display', 'block');
						triggerReflow(Element_TargetSlide[0]);
						Element_TargetSlide.css({ 'opacity': 1 });

						Element_TargetSlide.addClass('current');
						Element_CurrentSlide.removeClass('current');

						if(Array_Default.queueAnimations)
						{
							Element_TargetSlide.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e)
							{
								Element_CurrentSlide.css({ 'opacity': 0 });
							});
						}
						else
						{
							Element_CurrentSlide.css({ 'opacity': 0 });
						}

						Element_CurrentSlide.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e)
						{
							this.css('display', 'none');
						});

					break;

					case 'move':

						if(Array_Default.infinite)
						{
							var Integer_PositionDisplacement = Element_TargetSlide.data('position') - Element_CurrentSlide.data('position');

							$(Element_Slideshow).find(".slide").each(function(Integer_Index)
							{
								var Boolean_StopTransition = false;
								$(this).data('position', $(this).data('position') - Integer_PositionDisplacement);

								if(Math.abs($(this).data('position')) > Math.floor(Integer_Slides / 2))
								{
									Boolean_StopTransition = true;

									if($(this).data('position') < 0)
									{
										$(this).data('position', $(this).data('position') + Integer_Slides);
									}
									else
									{
										$(this).data('position', $(this).data('position') - Integer_Slides);
									}
								}

								if(Boolean_StopTransition)
								{
									$(this).addClass("no-transition");
								}

								$(this).css({ 'margin-left': Integer_DirectionAdjustment * $(this).data('position') * 100 + '%' });

								$(this).removeClass('current');

								if(Boolean_StopTransition)
								{
									triggerReflow(this);
									$(this).removeClass("no-transition");
								}
							});
						}
						else
						{
							$(Element_Slideshow).find(".slide").each(function()
							{
								$(this).css({ 'margin-left': Integer_DirectionAdjustment * ($(this).data('position') - Integer_Target) * 100 + '%' });

								$(this).removeClass('current');
							});
						}
					
					break;
				}

				if(Array_Default.hideContent)
				{
					var slideContent = transitionEvent(Element_TargetSlide);

					var contentListener = function(event)
					{
						$(this).addClass("no-transition");
						moveContent(Element_TargetSlide, "hidden", true);
						triggerReflow(this);
						$(this).removeClass("no-transition");
						triggerReflow(this);

						moveContent(Element_CurrentSlide, "hidden", true);
						moveContent($(this), "show", true);

						this.removeEventListener(slideContent, contentListener, false);
					};

					Element_TargetSlide[0].addEventListener(slideContent, contentListener, false);
				}

				Element_TargetSlide.addClass('current');

				updateGlobalContent();

				$(Element_Slideshow).find(".pip").removeClass('current');

				$(this).addClass('current');

				return false;

			});

			$(this).trigger('initialise');

			if(Array_Default.pauseOnHover)
			{
				$(this).hover(function()
				{
					Element_Slideshow.stopAnimating();
				}, function()
				{
					Element_Slideshow.startAnimating();
				});
			}

			if(Array_Default.arrows)
			{
				$(this).on("click", 'div.slide-arrow', function()
				{
					if($(this).hasClass('arrow-left'))
					{
						Element_Slideshow.prevSlide();
					}

					if($(this).hasClass('arrow-right'))
					{
						Element_Slideshow.nextSlide();
					}
				});
			}

			if(Array_Default.dragAndSlide)
			{
				var Boolean_Dragging = false, Integer_TouchStartX = 0, Integer_NewX = 0;

				$(this).on("touchstart mousedown", ".slides", function(e)
				{
					touches = e.originalEvent !== undefined ? e.originalEvent.touches : null;

					if(touches && touches.length !== 1)
					{
						return false;
					}

					Element_Slideshow.stopAnimating();
					Boolean_Dragging = true;

					$(this).addClass("grabbing");
					$(this).find(".slide").addClass("no-transition");

					Integer_TouchStartX = touches !== undefined ? touches[0].pageX : e.clientX;

					Integer_NewX = Integer_TouchStartX;
				});

				$(this).on("touchmove mousemove", ".slides", function(e)
				{
					if(Boolean_Dragging)
					{
						touches = e.originalEvent !== undefined ? e.originalEvent.touches : null;

						if(touches && touches.length !== 1)
						{
							return false;
						}

						Integer_NewX = touches !== undefined ? touches[0].pageX : e.clientX;

						var Integer_Current = parseInt($(Element_Slideshow).find(".pip.current").data('index'));

						var Integer_Next = Integer_Current + 1;
						var Integer_Previous = Integer_Current - 1;

						if(!$(Element_Slideshow).find("div.pips .pip").eq(Integer_Previous).length)
						{
							Integer_Previous = $(Element_Slideshow).find("div.pips .pip").last().data('index');
						}

						if(!$(Element_Slideshow).find("div.pips .pip.current").next(".pip").length)
						{
							Integer_Next = $(Element_Slideshow).find("div.pips .pip").first().data('index');
						}

						var Integer_Movement = (Integer_TouchStartX - Integer_NewX) / $(Element_Slideshow).outerWidth();

						switch(Array_Default.animation)
						{
							case 'fade':

								Integer_Movement = Math.abs(2 * Integer_Movement);

								$(this).find(".slide").eq(Integer_Current).css({ 'opacity': 1 - Integer_Movement });

								if(Integer_TouchStartX - Integer_NewX < 0)
								{
									if($(this).find(".slide").eq(Integer_Previous).css('display') == 'none')
									{
										$(this).find(".slide").eq(Integer_Previous).css('display', 'block');
									}

									$(this).find(".slide").eq(Integer_Previous).css({ 'opacity': Integer_Movement});
								}
								else if(Integer_TouchStartX - Integer_NewX > 0)
								{
									if($(this).find(".slide").eq(Integer_Next).css('display') == 'none')
									{
										$(this).find(".slide").eq(Integer_Next).css('display', 'block');
									}

									$(this).find(".slide").eq(Integer_Next).css({ 'opacity': Integer_Movement });
								}

							break;

							case 'move':

								$(Element_Slideshow).find(".slide").each(function()
								{
									if(Array_Default.infinite)
									{
										$(this).css({ 'margin-left': ((($(this).data('position') * Integer_DirectionAdjustment) - Integer_Movement) * 100) + '%' });
									}
									else
									{
										$(this).css({ 'margin-left': ((($(this).data('position') - Integer_Current) * Integer_DirectionAdjustment - Integer_Movement) * 100) + '%' });
									}
								});

							break;
						}
					}
				});

				$(this).on("touchend mouseup mouseleave", ".slides", function(e)
				{
					if(Boolean_Dragging)
					{
						Boolean_Dragging = false;
						$(this).removeClass("grabbing");
						$(this).find(".slide").removeClass("no-transition");

						var Integer_Next = Integer_Current + 1;
						var Integer_Previous = Integer_Current - 1;

						if(!$(Element_Slideshow).find("div.pips").eq(Integer_Previous).length)
						{
							Integer_Previous = $(Element_Slideshow).find("div.pips").last().data('index');
						}

						if(!$(Element_Slideshow).find("div.pips .pip.current").next(".pip").length)
						{
							Integer_Next = $(Element_Slideshow).find("div.pips").first().data('index');
						}

						var Integer_Movement = (Integer_TouchStartX - Integer_NewX) * Integer_DirectionAdjustment / $(Element_Slideshow).outerWidth();

						if(Integer_Movement > 0.25)
						{
							Element_Slideshow.nextSlide();
						}
						else if(Integer_Movement < -0.25)
						{
							Element_Slideshow.prevSlide();
						}
						else
						{
							switch(Array_Default.animation)
							{
								case 'fade':

									$(this).find(".slide").eq(Integer_Next).css({ 'display': 'none', 'opacity': 0 });
									$(this).find(".slide").eq(Integer_Previous).css({ 'display': 'none', 'opacity': 0 });
									$(this).find(".current").css({ 'opacity': 1 });

								break;

								case 'move':

									if(Array_Default.infinite)
									{
										$(this).find(".slide").each(function()
										{
											$(this).css({ 'margin-left': Integer_DirectionAdjustment * $(this).data('position') * 100 + '%' });
										});
									}
									else
									{
										var Integer_Current = parseInt($(Element_Slideshow).find(".pip.current").data('index'));

										$(this).find(".slide").each(function()
										{
											$(this).css({ 'margin-left':  ((Integer_DirectionAdjustment * ($(this).data('position') - Integer_Current)) * 100) + '%' });
										});
									}

								break;
							}
						}

						refreshInterval();
					}
				});
			}

			this.targetSlide = function(Integer_Target)
			{
				refreshInterval();

				if($(this).find("div.pips .pip.current").eq(Integer_Target).length > 0)
				{
					$(this).find("div.pips .pip.current").eq(Integer_Target).trigger('click');
				}
			};

			this.prevSlide = function()
			{
				refreshInterval();

				if($(this).find("div.pips .pip.current").prev(".pip").length > 0)
				{
					$(this).find("div.pips .pip.current").prev(".pip").trigger('click');
				}
				else
				{
					$(this).find("div.pips").children(".pip").last().trigger('click');
				}
			};

			this.nextSlide = function()
			{
				refreshInterval();

				if($(this).find("div.pips .pip.current").next(".pip").length)
				{
					$(this).find("div.pips .pip.current").next(".pip").trigger('click');
				}
				else
				{
					$(this).find("div.pips").children(".pip").first().trigger('click');
				}
			};

			this.stopAnimating = function()
			{
				clearInterval(Interval_Slideshow);

				return "Stopped Slideshow";
			};

			this.startAnimating = function()
			{
				// Public way of starting.  As it could be called if an interval is already in place, refresh clears it to stop any bugs.
				refreshInterval();

				return "Starting Slideshow";
			};

			this.addSlide = function(Image_NewSlide, HTML_Content, Integer_Position)
			{
				if(Image_NewSlide.length > 0)
				{
					this.stopAnimating();

					Element_AddAfter = $(this).find(".slides").children(".slide").last();
					Integer_Index = $(this).find("div.pips .pip").length;

					if(typeof Integer_Position !== "undefined")
					{
						Element_AddAfter = $(this).find(".slides").children(".slide").eq(Integer_Position - 1);
					}

					Element_NewSlide = $(this).find(".slides").children(".slide").last().clone();

					Element_NewSlide.find(".slide-image").css("background-image", "").addClass('slide-loading').data('image', Image_NewSlide);
					Element_NewSlide.find(".slide-caption").addClass('loading-large loading-thumb');
					Element_NewSlide.removeClass("current");
					Element_NewSlide.find(".content").html(HTML_Content);

					Element_AddAfter.after(Element_NewSlide);

					$(this).find("div.pips").append('<span class="pip" data-index="' + Integer_Index + '"></span>');

					updateSlidePosition();

					Integer_Slides = $(this).find("div.pips .pip").length;

					if(Integer_Slides > 1)
					{
						$(this).find("div.slide-arrow").show();
					}

					preloadImages();

					this.startAnimating();

					return "Slide Added";
				}
				else
				{
					return false;
				}
			};

			this.removeSlide = function(Integer_Target)
			{
				Element_Target = $(this).find(".slides").children(".slide").eq(Integer_Target);

				if(Element_Target.length > 0)
				{
					this.stopAnimating();

					Boolean_CurrentSlide = false;

					if(Element_Target.hasClass("current"))
					{
						Boolean_CurrentSlide = true;
					}

					Element_Target.remove();
					$(this).find("div.pips").children(".pip").last().remove();

					updateSlidePosition();

					Integer_Slides = $(this).find("div.pips .pip").length;

					if(Integer_Slides <= 1)
					{
						$(this).find("div.slide-arrow").hide();
					}

					if(Boolean_CurrentSlide)
					{
						this.nextSlide();
					}
					else
					{
						this.startAnimating();
					}

					return "Slide Removed";
				}
				else
				{
					return false;
				}
			};

			this.disableLoopLimit = function()
			{
				if(Array_Default.loopLimit >= 0)
				{
					Integer_Loops = -1;

					if(Array_Default.autoplay)
					{
						Boolean_Autoplay = true;

						this.startAnimating();
					}

					return "Slideshow will loop indefinitely";
				}
				else
				{
					return "Slideshow already loops indefinitely";
				}
			};

			this.enableLoopLimit = function(Integer_Amount)
			{
				if(Array_Default.loopLimit < 0)
				{
					Integer_Loops = 0;

					if(Array_Default.autoplay)
					{
						Boolean_Autoplay = true;

						this.startAnimating();
					}

					return "Slideshow will loop " + Integer_Loops + " times";
				}
				else
				{
					return "Slideshow already has a limited loop";
				}
			};

			this.adjustLoopLimit = function(Integer_Amount)
			{
				if(Array_Default.loopLimit >= 0)
				{
					Integer_Loops += Integer_Amount;

					if(Integer_Loops < 0)
					{
						Integer_Loops = 0;
					}

					if(Array_Default.autoplay)
					{
						Boolean_Autoplay = true;

						this.startAnimating();
					}

					return "Slideshow will loop " + Integer_Loops + " times";
				}
				else
				{
					return "Slideshow loops indefinitely";
				}
			};

			function updateSlidePosition()
			{
				$(Element_Slideshow).find(".slide").each(function(Integer_Index)
				{
					if(Array_Default.animation == 'move')
					{
						if(Array_Default.infinite && Integer_Index > Math.floor(Integer_Slides / 2))
						{
							$(this).data('position', Integer_Index - Integer_Slides);
						}
						else
						{
							$(this).data('position', Integer_Index);
						}
					}
				});
			};

			function moveContent(Element_ContentSlide, String_ContentStatus, Boolean_Animation)
			{
				Element_ContentSlide.find(".slide-caption").each(function()
				{
					if(!Boolean_Animation)
					{
						$(this).addClass("no-transition");
					}

					switch(String_ContentStatus)
					{
						case 'show':

							$(this).removeClass("hide-caption");
							$(this).addClass("show-caption");

							if(Array_Default.contentFromEdge)
							{
								$(this).attr("style", "");
							}

						break;

						case "hidden":

							$(this).removeClass("show-caption");
							$(this).addClass("hide-caption");

							if(Array_Default.contentFromEdge)
							{
								$(this).attr("style", "");

								if($(this).hasClass("caption-span-left"))
								{
									$(this).css("left", -$(this).outerWidth());
								}
								else if($(this).hasClass("caption-span-right"))
								{
									$(this).css("right", -$(this).outerWidth());
								}
								else if($(this).hasClass("caption-span-top"))
								{
									$(this).css("top", -$(this).outerHeight());
								}
								else
								{
									$(this).css("bottom", -$(this).outerHeight());
								}
							}

						break;
					}

					if(!Boolean_Animation)
					{
						triggerReflow($(this));
						$(this).removeClass("no-transition");
						triggerReflow($(this));
					}
				});
			}

			// Called when style update requires another but the animation does both at the same time.
			// Separated incase this needs updating
			function triggerReflow(Element_Restyled)
			{
				Element_Restyled.offsetHeight;
			}

			function refreshInterval()
			{
				clearInterval(Interval_Slideshow);

				if(Boolean_Autoplay)
				{
					Interval_Slideshow = setInterval(function()
					{
						if($(Element_Slideshow).find("div.pips .pip.current").next(".pip").length)
						{
							$(Element_Slideshow).find("div.pips .pip.current").next(".pip").trigger('automatic');
						}
						else
						{
							if(Integer_Loops > 0)
							{
								Integer_Loops -= 1;
							}
							else if(Integer_Loops == 0)
							{
								Boolean_Autoplay = false;
								Element_Slideshow.stopAnimating();

								console.log("End of loop limit for slideshow '" + String_SlideshowClass + "'");
								return false;
							}

							$(Element_Slideshow).find("div.pips").children(".pip").first().trigger('automatic');
						}
					}, Array_Default.duration);
				}
				else if(Array_Default.loopLimit >= 0)
				{
					console.log("No more loops for slideshow '" + String_SlideshowClass + "'");
				}
			};

			function preloadImages()
			{
				$(Element_Slideshow).find('.slide-loading').each(function()
				{
					if($(this).css("display") != "none")
					{
						var Element_Image = $(this);
						var Image_Src = $(this).data('image');

						if($(this).css('background-image') != "url('" + Image_Src + "');" & Image_Src != "")
						{
							$(this).clearQueue();

							$('<img/>').attr('src', Image_Src).on('load', function()
							{
								$(this).remove();

								Element_Image.animate({ 'opacity': '0' }, "slow", function()
								{
									$(this).removeClass('slide-loading');

									$(this).css('background-image', "url('" + Image_Src + "')");

									if($(this).hasClass("slide-thumb"))
									{
										$(this).siblings(".loading-thumb").removeClass("loading-thumb");
									}
									else
									{
										$(this).siblings(".loading-large").removeClass("loading-large");
									}

									$(this).animate({ 'opacity': '1' }, "slow", function()
									{
										if($(this).parent().hasClass("current"))
										{
											moveContent($(this).parent(), "show", true);
										}
									});
								});
							});
						}
						else
						{
							$(this).removeClass('slide-loading');
						}
					}
				}).promise().done();
			};

			function updateGlobalContent()
			{
				if(Array_Default.globalContent)
				{
					var Element_GlobalContent = $(Element_Slideshow).find(".globalContent");
					var Element_Current = $(Element_Slideshow).find(".slide.current");

					Element_GlobalContent.css( 'opacity', '0');

					triggerReflow(Element_GlobalContent);

					Element_Current.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e)
					{
						Element_GlobalContent.html($(Element_Current).find(".content").html());

						Element_GlobalContent.css('opacity', '1');
					});
				}
			};

			document.addEventListener("visibilitychange", function()
			{
				if(document.hidden)
				{
					Element_Slideshow.stopAnimating();
				}
				else
				{
					Element_Slideshow.startAnimating();
				}
			}, false);

			function transitionEvent(Element_TransitionedElement)
			{
				Element_TransitionedElement = Element_TransitionedElement[0];

				var Element_Transition;
				var Array_Transitions = {
					'transition':'transitionend',
					'OTransition':'oTransitionEnd',
					'MozTransition':'transitionend',
					'WebkitTransition':'webkitTransitionEnd'
				}

				for(Element_Transition in Array_Transitions)
				{
					if(Element_TransitionedElement.style[Element_Transition] !== undefined)
					{
						return Array_Transitions[Element_Transition];
					}
				}
			};
		});
	};

})(jQuery);