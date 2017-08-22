// ==UserScript==
// @name         scanlime live-stream gitter embedderer
// @namespace    http://electronoob.com/
// @version      0.1
// @description  fanboi script for replacing yt live chat with gitter.im on micahs live streams only.
// @author       electronoob
// @include        https://*.youtube.com/*
// @include        https://gitter.im/scanlime/live*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //yt
    if (document.evaluate('//*[@id="watch7-user-header"]/div/a', document, null, XPathResult.ANY_TYPE, null).iterateNext())
        if ("Micah Elizabeth Scott" === document.evaluate('//*[@id="watch7-user-header"]/div/a', document, null, XPathResult.ANY_TYPE, null).iterateNext().innerText)
            document.getElementById('live-chat-iframe').src = "https://gitter.im/scanlime/live#electronoob";
        // gitter
    if (window.location.hash) {
        if (window.location.hash.substring(1) === 'electronoob') {
            window.electronoob = {};
            window.electronoob.timer_event = function() {
                if ((document.evaluate('//*[@id="room-menu-container"]', document, null, XPathResult.ANY_TYPE, null).iterateNext()) && (document.evaluate('/html/body/div[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext())) {
                    var widthOfSideBar = parseInt(document.evaluate('//*[@id="room-menu-container"]', document, null, XPathResult.ANY_TYPE, null).iterateNext().offsetWidth, 10);
                    var widthOfBody = parseInt(document.evaluate('/html/body/div[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().offsetWidth, 10);
                    document.evaluate('/html/body/div[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().style.position = 'relative';
                    document.evaluate('//*[@id="room-menu-container"]', document, null, XPathResult.ANY_TYPE, null).iterateNext().style.display = 'none';
                    document.evaluate('/html/body/div[1]', document, null, XPathResult.ANY_TYPE, null).iterateNext().style.width = (widthOfBody + widthOfSideBar) + 'px';
                    clearInterval(window.electronoob.timer);
                }
            };
            window.electronoob.timer = setInterval(window.electronoob.timer_event, 10);
        }
        if (window.location.href === 'https://gitter.im/scanlime/live/~chat#electronoob') {
            window.electronoob = {};
            window.electronoob.timer_event = function() {
                if (document.evaluate('//*[@id="right-toolbar-layout"]', document, null, XPathResult.ANY_TYPE, null).iterateNext()) {
                    document.evaluate('//*[@id="right-toolbar-layout"]', document, null, XPathResult.ANY_TYPE, null).iterateNext().style.display = 'none';
                    clearInterval(window.electronoob.timer);
                }
            };
            window.electronoob.timer = setInterval(window.electronoob.timer_event, 10);
        }
    }

})();
