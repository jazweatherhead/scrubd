// ==UserScript==
// @author          JAZ
// @name            scrubd
// @namespace       scribd.com
// @include         *://www.scribd.com/*
// @description     Improves the Scribd web interface
// @version         1.0.0
// ==/UserScript==

setInterval(function () {
  const promo1 = document.getElementsByClassName('auto__doc_page_app_page_body_fixed_viewport_bottom_components')

  if (promo1 !== undefined) {
  	for (let promo of promo1) {
  		promo.setAttribute("style", "display:none;")
    	clearInterval()
  	}
  }
}, 250)

setInterval(function () {
  const promo2 = document.getElementsByClassName('recommender_carousel_wrapper')

  if (promo2 !== undefined) {
    for (let promo of promo2) {
  		promo.setAttribute("style", "display:none;")
    	clearInterval()
  	}
  }
}, 250)

setInterval(function () {
  const promo3 = document.getElementsByClassName('between_page_portal_root')

  if (promo3 !== undefined) {
    for (let promo of promo3) {
  		promo.setAttribute("style", "display:none;")
    	clearInterval()
  	}
  }
}, 250)

setInterval(function () {
  const useful = document.getElementsByClassName('wrapper__doc_page_webpack_doc_page_body_document_useful entered')

  if (useful !== undefined) {
    for (let instance of useful) {
  		instance.setAttribute("style", "display:none;")
    	clearInterval()
  	}
  }
}, 250)