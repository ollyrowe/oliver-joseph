
	// Define Functions
	function setURL(String_URL)
	{
		if(String_URL != "" && typeof(String_URL) != "undefined")
		{
			window.location.href = String_URL;
		}
		else
		{
			window.location.reload();
		}
	}

	function setCookie(String_Label, String_Value, Integer_Duration)
	{
		var Date_Expiry = new Date();

			Date_Expiry.setDate(Date_Expiry.getDate() + Integer_Duration);

			document.cookie = String_Label + "=" + escape(String_Value) + ((Integer_Duration == null) ? "" : "; expires=" + Date_Expiry.toUTCString());
	}

	function getCookie(String_Label)
	{
		var Integer_Cookie
		var Array_Cookies = document.cookie.split(";");

		for(Integer_Cookie = 0; Integer_Cookie < Array_Cookies.length; Integer_Cookie ++)
		{
			var String_Cookie = Array_Cookies[Integer_Cookie].substr(0, Array_Cookies[Integer_Cookie].indexOf("="));
			var String_Value = Array_Cookies[Integer_Cookie].substr(Array_Cookies[Integer_Cookie].indexOf("=") + 1);

				String_Cookie = String_Cookie.replace(/^\s+|\s+$/g,"");

				if(String_Cookie == String_Label)
				{
					return unescape(String_Value);
				}
		}
	}
	
	function getParameterByName(String_Parameter)
	{
		var Array_Match = RegExp('[?&]' + String_Parameter + '=([^&]*)').exec(window.location.search);

		return Array_Match && decodeURIComponent(Array_Match[1].replace(/\+/g, ' '));
	}