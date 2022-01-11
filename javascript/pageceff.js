// HTML 5

!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.2",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b)}(this,document);

var JSON = JSON || {};

if(!Array.prototype.includes)
{
    Array.prototype.includes = function (container, value)
    {
        var returnValue = false;
        var pos = container.indexOf(value);
        if (pos >= 0) {
            returnValue = true;
        }
        return returnValue;
    }
}

// implement JSON.stringify serialization (If JSON )
JSON.stringify = JSON.stringify || function (Object_ToString)
{
	var String_TypeOf = typeof(Object_ToString);

	if (String_TypeOf != "object" || Object_ToString === null)
	{
		// simple data type
		if (String_TypeOf == "string")
		{
			Object_ToString = '"' + Object_ToString + '"';
		}

		return String(Object_ToString);
	}
	else
	{
		// recurse array or object
		var Integer_Index;
		var Mixed_Value;
		var Array_JSON = [];
		var Array_Type = (Object_ToString && Object_ToString.constructor == Array);

		for (Integer_Index in Object_ToString)
		{
			Mixed_Value = Object_ToString[Integer_Index];
			String_TypeOf = typeof(Mixed_Value);

			if(String_TypeOf == "string")
			{
				Mixed_Value = '"' + Mixed_Value + '"';
			}
			else if (String_TypeOf == "object" && Mixed_Value !== null)
			{
				Mixed_Value = JSON.stringify(Mixed_Value);
			}

			Array_JSON.push((Array_Type ? "" : '"' + Integer_Index + '":') + String(Mixed_Value));
		}

		return (Array_Type ? "[" : "{") + String(Array_JSON) + (Array_Type ? "]" : "}");
	}
};

// Implements filter if it doesn't exist
if (!Array.prototype.filter)
{
	Array.prototype.filter = function(fun /*, thisp */)
	{
		"use strict";

		if (this === void 0 || this === null)
			throw new TypeError();

		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function")
			throw new TypeError();

		var res = [];
		var thisp = arguments[1];
		for (var i = 0; i < len; i++)
		{
			if (i in t)
			{
				var val = t[i]; // in case fun mutates this
				if (fun.call(thisp, val, i, t))
					res.push(val);
			}
		}

		return res;
	};
}

function nullOrUndefined(Element_Variable)
{
	return(Element_Variable == null || Element_Variable == undefined);
}

// Called when style update requires another but the animation does both at the same time.
function triggerReflow(Element_Restyled)
{
	Element_Restyled.offsetHeight;
}

function elementFadeDisplay(Element_Item, Boolean_Visibility, String_Speed, Integer_Delay)
{
	if(Element_Item != "")
	{
		if(nullOrUndefined(Boolean_Visibility))
		{
			if($(Element_Item).css('display') == 'block')
			{
				Boolean_Visibility = 0;
			}
			else
			{
				Boolean_Visibility = 1;
			}
		}

		if(nullOrUndefined(String_Speed) || String_Speed == "")
		{
			String_Speed = "slow";
		}

		if(nullOrUndefined(Integer_Delay))
		{
			Integer_Delay = 0;
			if(Boolean_Visibility)
			{
				Integer_Delay = 800;
			}
		}

		if(Boolean_Visibility)
		{
			if($(Element_Item).css('display') == 'none')
			{
				$(Element_Item).delay(Integer_Delay).slideDown(function()
				{
					$(Element_Item + ' *').fadeTo(String_Speed, 1);
				});
			}
		}
		else
		{
			if($(Element_Item).css('display') == 'block')
			{
				if($(Element_Item + ' *').length > 0)
				{
					$(Element_Item + ' *').delay(Integer_Delay).fadeTo(String_Speed, 0, function()
					{
						$(Element_Item).slideUp();
					});
				}
				else
				{
					$(Element_Item).delay(Integer_Delay).slideUp();
				}
			}
		}
	}
}

/* CSS animations */
var Integer_AnimationQueueDelay = 0;
var Boolean_ShowAboveElements = false;

function activateAnimations(Integer_QueueDelay, Boolean_ShowAbove)
{
	if(!nullOrUndefined(Integer_QueueDelay) && Integer_QueueDelay > 0 && parseInt(Integer_QueueDelay) != "NaN")
	{
		Integer_AnimationQueueDelay = Integer_QueueDelay;
	}
	if(!nullOrUndefined(Integer_QueueDelay))
	{
		Boolean_ShowAboveElements = Boolean_ShowAbove;
	}

	performAnimations();

	$(window).on("scroll", function()
	{
		performAnimations();
	});

	$(window).on("resize", function()
	{
		performAnimations();
	});
}

function performAnimations()
{
	if($(".css-animation:not(.animated)").length > 0)
	{
		var Element_Window = $(window);
		var Integer_HeaderHeight = 0;

		// Scroll top is a fix.  Sticky nav may be affecting this
		if($("header").css("position") == "fixed" && Element_Window.scrollTop() > 0)
		{
			Integer_HeaderHeight = $("header").height();
		}

		var Integer_Start = Element_Window.scrollTop() + Integer_HeaderHeight;
		var Integer_ConditionalStart = Integer_Start + (Element_Window.height() * 0.1);

		var Integer_End = Integer_Start + Element_Window.height();
		var Integer_ConditionalEnd = Integer_Start + (Element_Window.height() * 0.9) - Integer_HeaderHeight;

		/*

		Activate if debugging

		if($('.ani-debug').length < 1)
		{
			$("body").append("<div style='display:none;' class='ani-debug'><div class='start-marker' style='top: " + Integer_HeaderHeight + "px; width: 100%; height: 1px; background-color: #00FF00; position: fixed;'></div><div class='cond-start-marker' style='top: " + (Element_Window.height() * 0.1 + Integer_HeaderHeight) + "px; width: 100%; height: 1px; background-color: #0000FF; position: fixed;'></div><div class='cond-end-marker' style='top: " + (Element_Window.height() * 0.9) + "px; width: 100%; height: 1px; background-color: #0000FF; position: fixed;'></div><div class='end-marker' style='top: " + (Element_Window.height() - 1) + "px; width: 100%; height: 1px; background-color: #FF0000; position: fixed;'></div></div>");
		}
		else
		{
			$(".start-marker").css("top", Integer_HeaderHeight);
			$(".cond-start-marker").css("top", Integer_ConditionalStart);
			$(".cond-end-marker").css("top", Integer_ConditionalEnd);
			$(".end-marker").css("top", (Element_Window.height() - 1));
		}

		*/

		var Integer_Index = 0;

		$(".css-animation:not(.animated)").each(function()
		{
			var Integer_AnimatedTop = $(this).offset().top;
			var Boolean_HeaderArea = false;

			if($(this).prop("tagName") == "H1")
			{
				// console.log($(this).offset().top);
			}

			if($(this).parents("header").length > 0 || $(this).is("header"))
			{
				Boolean_HeaderArea = true;
			}

			if(((Integer_AnimatedTop > Integer_Start || (Integer_AnimatedTop + $(this).outerHeight()) > Integer_ConditionalStart) && ((Integer_AnimatedTop + $(this).outerHeight()) < Integer_End || Integer_AnimatedTop < Integer_ConditionalEnd)) || Boolean_HeaderArea)
			{
				if(Integer_AnimationQueueDelay == 0)
				{
					$(this).addClass("animated");
				}
				else
				{
					$(this).delay(Integer_AnimationQueueDelay * Integer_Index).queue(function()
					{
						$(this).addClass("animated").dequeue();
					});
				}

				Integer_Index++;
			}
		});
	}
}
/* CSS animations End */

function variableScroll(Element_ScrollTo, Integer_MaxTime)
{
	if(!nullOrUndefined(Element_ScrollTo) && typeof(Element_ScrollTo) == "object")
	{
		Integer_HeaderHeight = 0;

		if($("header").css("position") == "fixed")
		{
			Integer_HeaderHeight = $("header").height();
		}

		var Object_ScrollingElement = $("html, body");

		if(nullOrUndefined(Integer_MaxTime) || Integer_MaxTime == "")
		{
			Integer_MaxTime = 900;
		}

		var Integer_ScrollTime = Math.abs(Element_ScrollTo.offset().top - Integer_HeaderHeight - Object_ScrollingElement.scrollTop()) * 5 / 6;

		if(Integer_ScrollTime > Integer_MaxTime && Integer_MaxTime >= 0)
		{
			Integer_ScrollTime = Integer_MaxTime;
		}

		Object_ScrollingElement.animate({ scrollTop: Element_ScrollTo.offset().top - Integer_HeaderHeight }, Integer_ScrollTime);
	}
}

// Detects if hovers can be used with device (TAKES PERIPHERALS INTO ACCOUNT)
// Initially sets hover-active as touch will be detected, whereas mousemove can be prevented at first (Reload on hover state, Mouse has not been moved but still needs hover)
function detectMouseMove()
{
	$(document).one('mousemove', function()
	{ 
		$('body').addClass('hover-active');
		detectTouchEvent();
	});
}

function detectTouchEvent()
{
	$(document).one('touchstart', function()
	{ 
		$('body').removeClass('hover-active');
		detectMouseMove();
	});
}

/****** Events ******/

	$.event.special.tap = {
		setup: function(data, namespaces) {
			var $elem = $(this);
			$elem.on('touchstart', $.event.special.tap.handler)
				.on('touchmove', $.event.special.tap.handler)
				.on('touchend', $.event.special.tap.handler);
		},

		teardown: function(namespaces) {
			var $elem = $(this);
			$elem.off('touchstart', $.event.special.tap.handler)
				.off('touchmove', $.event.special.tap.handler)
				.off('touchend', $.event.special.tap.handler);
		},

		handler: function(event) {
			var $elem = $(this);
			$elem.data(event.type, 1);
			if (event.type === 'touchend' && !$elem.data('touchmove')) {
				event.type = 'tap';
				$.event.handle.apply(this, arguments);
			} else if ($elem.data('touchend')) {
				$elem.removeData('touchstart touchmove touchend');
			}
		}
	};

/****** END OF Events ******/

/****** Image Preloader ******/

$.fn.preload = function(Image_New)
{
	$('<img src="' + Image_New + '" />')[0] = this;

	$(this).clearQueue();

	$(this).animate({ 'opacity': '0' }, "slow", function()
	{
		$(this).attr('src', Image_New);

		if($(this).prop("complete"))
		{
			$(this).animate({ 'opacity': '1' }, "slow", function()
			{
				$(this).parent().removeClass('wg-preloading');
			});
		}
		else
		{
			$(this).on('load', function()
			{
				$(this).animate({ 'opacity': '1' }, "slow", function()
				{
					$(this).parent().removeClass('wg-preloading');
				});
			});
		}
	});
}

$.fn.preloadAbort = function()
{
	$(this).clearQueue();
}

function preloadImages(Element_Parent, Function_Callback)
{
	if(nullOrUndefined(Element_Parent) || Element_Parent == "")
	{
		Element_Parent = $('body');
	}

	$(Element_Parent).find('.wg-preloading img').each(function()
	{
		var Image_Src = $(this).data('src');

		if(Image_Src == "")
		{
			Image_Src = $(this).attr('data-src');
		}

		if($(this).attr('src') != Image_Src && Image_Src != "")
		{
			$(this).preload(Image_Src);
		}
		else
		{
			$(this).parent().removeClass('wg-preloading');
		}
	}).promise().done(function()
	{
		if(!nullOrUndefined(Function_Callback))
		{
			Function_Callback();
		}
	});
}

function updateIMGToSVG()
{
	// Updates SVG to be controlled by CSS
	$('img[src$=".svg"]').each(function()
	{
		var $Element_Image = $(this);
		var String_ID = $Element_Image.attr('id');
		var String_Class = $Element_Image.attr('class');

		$.get($Element_Image.attr('src'), function(data)
		{
			// Get the SVG tag, ignore the rest
			var $Element_SVG = $(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof String_ID !== 'undefined')
			{
				$Element_SVG = $Element_SVG.attr('id', String_ID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof String_Class !== 'undefined')
			{
				$Element_SVG = $Element_SVG.attr('class', String_Class+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$Element_SVG = $Element_SVG.removeAttr('xmlns:a');

			// Replace image with new SVG
			$Element_Image.replaceWith($Element_SVG);
		}, 'xml');
	});
}

function getForm(Integer_FormID, Object_Selector, Function_Callback)
{
	$.post("ajax.php", { 'function': 'getForm', 'form_id': Integer_FormID }, function(HTML_Response)
	{
		Object_Selector.html(HTML_Response);

		if(!nullOrUndefined(Function_Callback))
		{
			Function_Callback();
		}
	});
}

function saveFormEntry(String_Process, Element_Form)
{
	Element_Submit = Element_Form.find("button");
	Element_Submit.attr("disabled", "disabled");

	Boolean_Signature = true;

	if($(Element_Form).find(".sign_here").length > 0)
	{
		$.each($(Element_Form).find(".sign_here"), function()
		{
			Element_TextArea = $(this).siblings("textarea");

			if($(this).jSignature('getData', 'native').length == 0 && Element_TextArea.hasClass("required"))
			{
				Element_TextArea.html("");
			}
			else
			{
				Array_SVGImage = $(this).jSignature('getData', 'base30');

				Element_TextArea.html("data:" + Array_SVGImage[0] + "," + Array_SVGImage[1]);
			}
		});
	}

	var Array_FormData = new FormData();

	Array_FormData.append('function', 'enquiryForm');
	Array_FormData.append('form_id', Element_Form.data('form_id'));
	Array_FormData.append('data', Element_Form.find('input:not([type="file"]), select, textarea').serialize());
	Array_FormData.append('process', String_Process);

	$.each(Element_Form.find('input[type="file"]'), function(Integer_FieldIndex, Element_Input)
	{
		$.each(Element_Input.files, function(Integer_FileIndex)
		{
			Array_FormData.append(Element_Input.name + "[" + Integer_FileIndex + "]", this);
		});
	});

	$.ajax({ url: "ajax.php", type: 'POST', dataType: 'JSON', data: Array_FormData, cache: false, processData: false, contentType: false,
		success: function(JSON_Response)
		{
			Element_Submit.removeAttr('disabled');
			Element_Form.find("p.error").remove();
			Element_Form.find("ul.error").remove();

			if(JSON_Response['status'] == "Complete")
			{
				JSON_Response['next_step'] = JSON_Response['next_step'] || "";
				JSON_Response['form_redirect'] = JSON_Response['form_redirect'] || "";
				JSON_Response['html_response'] = JSON_Response['html_response'] || "";

				var Array_Data = [];
				Array_Data['form_label'] = Element_Form.data('form_label');
				trackAnalytics('form', Array_Data, function()
				{
				
					if(JSON_Response['next_step'] != "")
					{
						Element_Form.find(".step-container").html(JSON_Response['next_step']);

						variableScroll(Element_Form.find(".step-container"), 500);
					}
					else if(JSON_Response['form_redirect'] != "")
					{
						if(JSON_Response['message'] != "")
						{
							PopupPanel(JSON_Response['message'], "confirm", { }, "", function(String_PopupResponse)
							{
								if(String_PopupResponse == "true")
								{
									$.post("ajax.php", { "function": "form_confirm", "form_id": Element_Form.data('form_id') }, function()
									{
										window.location = JSON_Response['form_redirect'];
									});
								}
							});
						}
						else
						{
							window.location = JSON_Response['form_redirect'];
						}
					}
					else
					{
						Element_Form.html(JSON_Response['html_response']);
					}
				});
			}
			else
			{
				variableScroll(Element_Form.find(".step-container"), 500);

				Element_Form.find(".step-section").prepend("<p class='error'>Please correct the following fields</p><ul class='error'></ul>");

				$.each(JSON_Response['message'], function(Integer_Index, Object_Error)
				{
					Element_Form.find("ul.error").append("<li>" + Object_Error + "</li>"); 
				});
			}
		},
		error: function()
		{
			Element_Submit.removeAttr("disabled");
		}
	});
}

$(window).load(function()
{
	preloadImages();
});

$(function()
{
	var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

	if (typeof MutationObserver == 'function')
	{
		var observer = new MutationObserver(function(mutations)
		{
			var Boolean_Loading = false;

			mutations.forEach(function(mutation)
			{
				String_ClassList = mutation.target.classList;

				if(!nullOrUndefined(String_ClassList))
				{
					if(String_ClassList.contains('wg-preloading'))
					{
						Boolean_Loading = true;
					}
				}
			});

			if(Boolean_Loading)
			{
				preloadImages();
			}
		});

		observer.observe(document.body, { attributes: true, childList: true, subtree: true, characterData: true });
	}

	if($('#ifmobile').length < 1)
	{
		$("body").append("<div id='ifmobile'></div>");
	}
	if($('#ifmobilesize').length < 1)
	{
		$("body").append("<div id='ifmobilesize'><span class=\"s1200\"></span><span class=\"s1100\"></span><span class=\"s1000\"></span><span class=\"s900\"></span><span class=\"s800\"></span><span class=\"s700\"></span><span class=\"s600\"></span><span class=\"s500\"></span><span class=\"s400\"></span><span class=\"s300\"></span></div>");
	}

	$("body").on("keydown keypress keyup", ".page.hide-for-popup *", false);

	$("body").addClass("hover-active");
	detectTouchEvent();

	updateIMGToSVG();
});

/****** END OF Image Preloader ******/

/****** Default Popup ******/

var Array_DefaultPopupControls = { 'close_cross': true, 'close_button': true, 'close_button_message': 'OK', 'background_close': true, 'mobile_full_screen': true, onOpen: function() { } };

function PopupPanel(String_HTML, String_PopupType, Array_Controls, String_Classes, Function_Callback)
{
	var Array_PopupControls = $.parseJSON(JSON.stringify(Array_DefaultPopupControls));
	var Integer_StartPosition = $(window).scrollTop();

	if(nullOrUndefined(String_PopupType) || String_PopupType == "")
	{
		String_PopupType = "alert";
	}

	if(nullOrUndefined(String_Classes))
	{
		String_Classes = "";
	}	
	
	if(!nullOrUndefined(Array_Controls))
	{
		$.each(Array_Controls, function(String_Index, String_Value)
		{
			Array_PopupControls[String_Index] = String_Value;
		});
	}

	if(Array_PopupControls['close_cross'])
	{
		String_HTML = '<span class="close">X</span>' + String_HTML;
	}

	if(String_PopupType == "confirm")
	{
		String_HTML += "<button class='ok' value='true'>OK</button><button class='cancel' value='false'>Cancel</button>";
	}
	else if(Array_PopupControls['close_button'])
	{
		String_HTML += "<button class='close'>" + Array_PopupControls['close_button_message'] + "</button>";
	}

	var String_Background = "";

	if(Array_PopupControls['mobile_full_screen'])
	{
		String_Background = " full";
	}

	$("body").append('<div class="popup-background' + String_Background + '" style="opacity: 0;"><div class="popup-panel ' + String_PopupType + ' ' + String_Classes + '">' + String_HTML + '</div></div>');

	if(Array_PopupControls['mobile_full_screen'])
	{
		if($('#ifmobile').css('display') == 'block')
		{
			window.scrollTo(0, 0);
		}
	}

	$('.popup-background').fadeTo(500, 1, function()
	{
		if(Array_PopupControls['mobile_full_screen'])
		{
			$(".page").addClass("hide-for-popup");
		}
	});

	$(".popup-panel").off("close");
	$(".popup-panel").on("close", function()
	{
		if(!nullOrUndefined(Function_Callback))
		{
			Function_Callback.apply($(this), [false]);
		}

		ClosePopupPanel($(this).parent(".popup-background"), Integer_StartPosition);
	});

	$(".popup-panel .close").off("click");
	$(".popup-panel .close").on("click", function()
	{
		$(this).parents(".popup-panel").trigger("close");
	});

	$(".popup-panel button:not('.close, .keep-open')").off("click");
	$(".popup-panel button:not('.close, .keep-open')").on("click", function()
	{
		if(!nullOrUndefined(Function_Callback))
		{
			Function_Callback.apply($(this).parents(".popup-panel"), [$(this).val()]);
		}

		ClosePopupPanel($(this).parents(".popup-background"), Integer_StartPosition);
	});

	if(Array_PopupControls['background_close'])
	{
		$(".popup-background").off("click");
		$(".popup-background").on("click", function(Event)
		{
			if(this == Event.target)
			{
				$(this).find(".popup-panel").trigger("close");
			}
		});
	}

	if(!nullOrUndefined(Array_PopupControls.onOpen))
	{
		Array_PopupControls.onOpen();
	}
}

function ClosePopupPanel(Element_PopUp, Integer_ReturnPositionY)
{
	// If only 1 popup present, remove background
	// If 2 popups present, remove the popup shown ontop

	if(Element_PopUp.length > 0)
	{
		$(Element_PopUp).fadeTo(500, 0, function()
		{
			$(".page").removeClass("hide-for-popup");

			if($('#ifmobile').css('display') == 'block')
			{
				if(!nullOrUndefined(Integer_ReturnPositionY))
				{
					window.scrollTo(0, Integer_ReturnPositionY);
				}
			}

			$(Element_PopUp).remove();
		});
	}
}

function changeToiCheck(Element_Inputs)
{
	if(typeof $.fn.iCheck === 'function')
	{
		$.each(Element_Inputs, function()
		{
			$(this).iCheck({
				checkboxClass: 'icheckbox_square',
				radioClass: 'iradio_square',
				hoverClass: ' ',
				labelHover: false,
				inheritClass: true
			});

			$(this).on('ifChecked', function()
			{
				$(this).attr("checked", "checked");
				$(this).trigger("change");
			});

			$(this).on('ifUnchecked', function()
			{
				$(this).removeAttr("checked");
				$(this).trigger("change");
			});
		});
	}
}

/****** END OF Default Popup ******/

/****** Unicode Detection ******/

function detectUnicodeCharacterRange(String_OriginalString, Hex_Start, Hex_End)
{
	String_OriginalString = String_OriginalString || "";
	Hex_Start = Hex_Start || null;
	Hex_End = Hex_End || null;

	var Array_Return = { "edited_string": String_OriginalString, "count": 0 };

	var String_Character = "";

	if(Array_Return['edited_string'] != "" && typeof Array_Return['edited_string'] === "string" && Hex_Start != null && Hex_End != null)
	{
		String_ConstructString = "";

		for(var Integer_Index = 0; Integer_Index < Array_Return['edited_string'].length; Integer_Index++)
		{
			String_Character = Array_Return['edited_string'].charCodeAt(Integer_Index);
			Boolean_Found = false;

			if(Hex_End != null)
			{
				if(String_Character >= Hex_Start && String_Character <= Hex_End)
				{
					Boolean_Found = true;
				}
			}
			else
			{
				if(String_Character == Hex_Start)
				{
					Boolean_Found = true;
				}
			}

			if(Boolean_Found)
			{
				Array_Return['count']++;
			}
			else
			{
				String_ConstructString += Array_Return['edited_string'].charAt(Integer_Index);
			}
		}

		Array_Return['edited_string'] = String_ConstructString;
	}

	return Array_Return;
}

function detectUnicodeCharacterRanges(String_OriginalString, Array_HexRange)
{
	String_OriginalString = String_OriginalString || "";
	Array_HexRange = Array_HexRange || [];

	var Array_Return = { "edited_string": String_OriginalString, "count": 0 };

	if(Array_Return['edited_string'] != "" && typeof Array_Return['edited_string'] === "string" && Array_HexRange.length > 0)
	{
		$.each(Array_HexRange, function()
		{
			Array_Update = detectUnicodeCharacterRange(Array_Return['edited_string'], this[0], this[1]);
			Array_Return['count'] += Array_Update['count'];
			Array_Return['edited_string'] = Array_Update['edited_string'];
		});
	}

	return Array_Return;
}

/****** END OF Unicode Detection ******/

/****** START OF ANALYTICS TRACKING ******/

function trackAnalytics(String_Type, Array_Data, CallBackFunction)
{
	// Look for analytics tag
	if(String_Type != "")
	{
		
		try
		{
		
			// Only load analytics if the analytics code is present
			// This is maintained in the body of index
			if(new String($('body').data('analytics')).valueOf() === "true")
			{
				switch(String_Type)
				{
					case 'customer_signup':

						ga('send', {
							hitType: 'event',
							eventCategory: 'Customers',
							eventAction: 'Signup',
							eventLabel: 'c_id: ' + Array_Data['customer_id']
						});

					break;

					case 'customer_login':

						ga('send', {
							hitType: 'event',
							eventCategory: 'Customers',
							eventAction: 'Login',
							eventLabel: 'c_id: ' + Array_Data['customer_id']
						});

					break;

					case 'customer_passwordreset':

						ga('send', {
							hitType: 'event',
							eventCategory: 'Customers',
							eventAction: 'Password Reset',
							eventLabel: 'c_id: ' + Array_Data['customer_id']
						});

					break;

					case 'form':

						ga('send', {
							hitType: 'event',
							eventCategory: 'Forms',
							eventAction: 'Submitted',
							eventLabel: Array_Data['form_label']
						});

					break;

					case 'ecommerce_order':

						ga('send', {
							hitType: 'event',
							eventCategory: 'eCommerce',
							eventAction: 'Order Created',
							eventLabel: Array_Data['order_data']['order_reference'], 
							eventValue: Array_Data['order_data']['order_gross']
						});

						ga('require', 'ecommerce'); // Request the commerce plugin

						ga('ecommerce:addTransaction', {
						'id': Array_Data['order_data']['order_id'],
						'affiliation': Array_Data['order_data']['order_affiliation'],
						'revenue': Array_Data['order_data']['order_gross'],
						'shipping': Array_Data['order_data']['order_shipping'],
						'tax': Array_Data['order_data']['order_tax'],
						'currency': Array_Data['order_data']['order_currency']  // local currency code.
						});

						ga('ecommerce:send');
						ga('ecommerce:clear');

					break;

				}
			}
		}
		catch(err)
		{
			//
			// console.log(err);
		}	

	}

	//if (typeof CallBackFunction == 'function')
	if(arguments.length > 2 && arguments[2] != undefined)
	{
		CallBackFunction();
	}
	
}


/****** END OF ANALYTICS TRACKING ******/

$(document).ready(function()
{
	//changeToiCheck($('input'));

	// Feed Behaviour

	$(".feed").filter("form").each(function(Integer_Feed, Element_Feed)
	{
		var Integer_Interval = parseInt($(Element_Feed).parents("section.feed").eq(0).data('interval')) || 9;

		$(Element_Feed).find("input").on('initialise click automatic', function(Event)
		{
			if($(Element_Feed).find("input.previous:visible").length < 1 && Event.type == 'automatic')
			{
				$(Element_Feed).siblings("ul").css({ 'margin-top': '0%' });

				return false;
			}

			switch($(this).attr('class'))
			{
				case 'previous':

				case 'next':

					var Element_List = $(this).parent().siblings("ul");

					var Integer_Items = $(Element_List).children("li").length;

					var Integer_Position = parseInt($(Element_List).data('current')) || 0;

					var Integer_Movement = ($(this).attr('class') == 'previous') ? -1 : 1;

					if(Integer_Position + Integer_Movement < 0)
					{
						Integer_Position = $(Element_List).children("li").length - 1;
					}
					else if(Integer_Position + Integer_Movement > Integer_Items - 1)
					{
						Integer_Position = 0;
					}
					else
					{
						Integer_Position = Integer_Position + Integer_Movement;
					}

					$(Element_List).fadeOut(300, function()
					{ 
						$(Element_List).css({ 'margin-top': ((Integer_Position) * -3.7) + '%' });

						$(Element_List).data('current', Integer_Position);

						$(Element_List).fadeIn(300);
					});

				break;

				case 'feed':

					window.location = 'feed.php';

				break;

				case 'latest':

					window.location = 'news-and-events/';

				break;
			}

			return false;
		});

		setInterval(function()
		{
			$(Element_Feed).find("input.next").trigger('automatic');
		}, Integer_Interval * 1000);
	});

	// File Protection

	var Array_DomainExtensions = ['com','net','org','site','ac','us','au','bz','dev','club','info','co','uk','io'];

	var Array_Files = $.makeArray($("body").find("a[href]").map(function(Integer_Index, Element_Link)
	{
		var String_File = $(Element_Link).attr('href').split('/').pop();

		if(String_File.split('.').length > 1 && String_File.split('.').pop() != 'php' && !Array_DomainExtensions.includes(String_File.split('.').pop()))
		{
			return $(Element_Link).attr('href');
		}

		return false;

	})).filter(function(v) { return v; });

	if(Array_Files.length > 0)
	{
		$.post("protect.php", {

			'files': Array_Files

		}, function(Array_Protected)
		{
			if(Array_Protected instanceof Array)
			{
				$.each(Array_Protected, function(Integer_Index, Boolean_Protected)
				{
					if(Boolean_Protected)
					{
						$("div.page").find("a[href='" + Array_Files[Integer_Index].replace("'", "\'") + "']").on('click', function(Event)
						{
							Event.preventDefault();

							$("#login").remove();

							var Element_Link = $(this);

							var Element_Form = $(

								'<form id="login" method="post">' +

									'<h3>Log-in Required</h3>' +

									'<p>The downloadable file you are attempting to access is available to <strong>registered users only</strong>.</p>' +

									'<p>If you have already registered, please log in to access these files. Otherwise please <a href="/register/?target=' + encodeURI($(Element_Link).attr('href')) + '">register now</a> for free and immediate access...</p>' +

									'<fieldset>' +

										'<label><input name="member_email" placeholder="Email address" value="" type="email" /></label>' +

										'<label><input name="member_password" placeholder="Password" value="" type="password" /></label>' +

									'</fieldset>' +

									'<p id="reset"><strong>Forgotten your password?</strong> You can <a href="/reset/?referer=' + encodeURI(window.location) + '">click here</a> to receive a new password by email.</p>' +

									'<input type="button" name="action" value="Cancel" />' +

									'<input type="submit" name="action" value="Login" />' +

								'</form>'

							).prependTo("div.page");

							$("#reset").hide();

							$(Element_Form).css({ 'margin-top': Math.round($(Element_Form).height() * -0.5) + 'px' }).off('click').on('click', "input[type='button'], input[type='submit']", function(Event)
							{
								Event.preventDefault();

								switch($(this).val())
								{
									case 'Cancel':

										$("#login").remove();

									break;

									case 'Login':

										$.post("protect.php", $(Element_Form).serialize(), function(Object_Response)
										{
											if(typeof Object_Response['error'] != 'undefined')
											{
												alert(Object_Response['error']);

												if(Object_Response['error'].indexOf('password') >= 0)
												{
													$("#reset").show();
												}
											}

											if(typeof Object_Response['member'] != 'undefined')
											{
												$(Element_Form).html('<h3>Thank You</h3>' + '<p>You have successfully logged in as <strong>' + Object_Response['member']['member_firstname'] + ' ' + Object_Response['member']['member_lastname'] + '</strong>, loading <strong>' + $(Element_Link).attr('href').split('/').pop() + '</strong>...</p>');

												setTimeout(function()
												{
													window.location = $(Element_Link).attr('href');
												}, 3000);
											}
										}, 'json');

									break;
								}
							});
						});
					}
				});
			}
		}, 'json');
	}

	$("body").off('click', "button.form_back, ul.steps li.complete");
	$("body").on('click', "button.form_back, ul.steps li.complete", function()
	{
		var Element_Form = $(this).closest('form');

		var Integer_ChosenStep = $(this).data("step") || $(this).val();

		var Array_FormData = new FormData();

		Array_FormData.append('function', 'goto_formstep');
		Array_FormData.append('form_id', Element_Form.data('form_id'));
		Array_FormData.append('data', Element_Form.find('input:not([type="file"]), select, textarea').serialize());
		Array_FormData.append('step', Integer_ChosenStep);

		$.each(Element_Form.find('input[type="file"]'), function(Integer_Index, Element_Input)
		{
			Array_FormData.append(Element_Input.name, Element_Input.files[0]);
		});

		$.ajax({ url: "ajax.php", type: 'POST', dataType: 'JSON', data: Array_FormData, cache: false, processData: false, contentType: false,
			success: function(JSON_Response)
			{
				if(JSON_Response['status'] == "Complete")
				{
					Element_Form.find(".step-container").html(JSON_Response['step_html']);
					variableScroll(Element_Form.find(".step-container"), 500);
				}
			}
		});
	});
	
	$("body").off('click', "button.enquiryFormSubmit");
	$("body").on('click', "button.enquiryFormSubmit", function()
	{
		saveFormEntry($(this).val(), $(this).closest('form'));
	});
});