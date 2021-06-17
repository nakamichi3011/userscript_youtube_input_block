// ==UserScript==
// @name         Disable YouTube input key
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Stop the anoying 0 to 9 YouTube shortcuts from ruining your wathing experience while allowing all the other shortcuts to work
// @author       Kota Nakamichi based on code by( Éric Beaudoin from Tampermonkey (based on code by Martin J.H. from StackOverflow) )
// @match        *://*.youtube.com/*
// @match        *://*.youtube.com
// @match        *://youtube.com/*
// @match        *://youtube.com
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // The keys that we want to ignore (from keydownEvent.key)
    // for Video Speed Controller (Chrome Extension)
    var keys = "sdr ";

    (window.opera ? document.body : document).addEventListener('keydown', function(e) {
        //console.log(`==> event.key: ${ e.key}, event.isComposing: ${ e.isComposing }, keys.indexOf(event.key): ${ keys.indexOf(e.key) } ` ); //uncomment to find more key
        if (keys.indexOf(e.key) != -1 && !(e.isComposing || e.ctrlKey || e.altKey)) {
            return false;
            //console.log(`==> intercepted: ${ e.key }`);
        }
        e.cancelBubble = true;
        e.stopImmediatePropagation();
    }, !window.opera);
})();
