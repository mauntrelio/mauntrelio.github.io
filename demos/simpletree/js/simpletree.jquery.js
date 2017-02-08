/*
Simple Tree jQuery plugin

Based on JS for simple unobtrusive javascript treeview plugin
developed by Krijn Hoetmer
http://krijnhoetmer.nl/stuff/javascript/list-treeview-menu/

Adapted as a jQuery plugin by Maurizio Manetti

*/

(function( $ ) {
 
  "use strict";

  $.fn.simpletree = function( options ) {
 
  var settings = $.extend({
     classChanged: 'st-treed',
     classOpen: 'st-open',
     classCollapsed: 'st-collapsed',
     classLeaf: 'st-file',
     classLast: 'st-last',
     startCollapsed: true
  }, options); 			


  var handleClick = function(e) {
    if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
  }

  this.addClass('st-treed');
  this.find('li').each(function(index){
    var $li = $(this);
    if ($li.children('ul').length > 0) {
      $li.addClass(settings.classCollapsed);
      $li.on('mousedown',function(event) {
          $li.toggleClass(settings.classOpen + ' ' + settings.classCollapsed);
          handleClick(event);
        });
    } else {
      $li.addClass(settings.classLeaf);
    }
    if ($li.next('li').length == 0) {
      $li.addClass(settings.classLast);
    }
  });

  this.find('a').on('mousedown',handleClick);
       
  return this;
  
  };
 
}( jQuery ));

