!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):n(jQuery)}(function(n){return n.ui=n.ui||{},n.ui.version="1.12.1"}),/*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}(function(n){"1.7"===n.fn.jquery.substring(0,3)&&(n.each(["Width","Height"],function(t,e){function i(t,e,i,u){return n.each(r,function(){e-=parseFloat(n.css(t,"padding"+this))||0,i&&(e-=parseFloat(n.css(t,"border"+this+"Width"))||0),u&&(e-=parseFloat(n.css(t,"margin"+this))||0)}),e}var r="Width"===e?["Left","Right"]:["Top","Bottom"],u=e.toLowerCase(),f={innerWidth:n.fn.innerWidth,innerHeight:n.fn.innerHeight,outerWidth:n.fn.outerWidth,outerHeight:n.fn.outerHeight};n.fn["inner"+e]=function(t){return t===undefined?f["inner"+e].call(this):this.each(function(){n(this).css(u,i(this,t)+"px")})},n.fn["outer"+e]=function(t,r){return"number"!=typeof t?f["outer"+e].call(this,t):this.each(function(){n(this).css(u,i(this,t,!0,r)+"px")})}}),n.fn.addBack=function(n){return this.add(null==n?this.prevObject:this.prevObject.filter(n))})});