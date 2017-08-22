// ==UserScript==
// @name         scanlime live-stream gitter embedderer
// @namespace    http://electronoob.com/
// @version      0.1
// @description  fanboi script for replacing yt live chat with gitter.im on micahs live streams only.
// @author       electronoob
// @match        https://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if("Micah Elizabeth Scott" === document.evaluate('//*[@id="watch7-user-header"]/div/a', document, null, XPathResult.ANY_TYPE, null ).iterateNext().innerText)
	{
		document.getElementById('live-chat-iframe').src="https://gitter.im/scanlime/live"; 
		document.getElementById('live-chat-iframe').style.resize= 'both';
	}
})();
