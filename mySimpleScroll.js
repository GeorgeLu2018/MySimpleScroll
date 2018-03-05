(function(document){
   'use strict';
    
  var scroll = function(options) {
    var targetDiv = document.getElementById(options.selector),
    onlyChild =  targetDiv.firstElementChild,   
    onlyChildWidth = onlyChild.scrollWidth,
    scrollContainer = document.createElement('div'),
    targetDivWidth = targetDiv.style.width,
    virtualContentDiv = document.createElement('div');
    
    scrollContainer.setAttribute('style', 'width:'+targetDivWidth+';height:15px;background:transparent;overflow:auto;'); 
    virtualContentDiv.setAttribute('style','width:'+ onlyChildWidth +'px;height:15px;background:transparent;');
    scrollContainer.appendChild(virtualContentDiv);
    
    if(targetDiv.nextHtmlSibling) {
       targetDiv.parentNode.insertBefore(scrollContainer, targetDiv.nextHtmlSibling);
    }else {
       targetDiv.parentNode.appendChild(scrollContainer);      
    }
    
    scrollContainer.addEventListener('scroll', function() {
       targetDiv.scrollLeft = this.scrollLeft;
    });
  }
  
  window.simpleScroll = scroll;
})(document);
