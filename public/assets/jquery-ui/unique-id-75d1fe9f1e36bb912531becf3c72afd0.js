!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):n(jQuery)}(function(n){return n.ui=n.ui||{},n.ui.version="1.12.1"}),/*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
function(n){"function"==typeof define&&define.amd?define(["jquery","./version"],n):n(jQuery)}(function(n){return n.fn.extend({uniqueId:function(){var n=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&n(this).removeAttr("id")})}})});