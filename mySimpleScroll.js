(function(document){
   'use strict';
    
  var LScroll = function(options) {
    var targetDiv = document.getElementById(options.selector),
    onlyChild =  targetDiv.firstElementChild,   
    onlyChildWidth = onlyChild.scrollWidth,
    scrollContainer = document.createElement('div'),
    targetDivWidth = targetDiv.style.width,
    virtualContentDiv = document.createElement('div');
    
    scrollContainer.setAttribute('style', 'width:'+targetDivWidth+';height:15px;background:transparent;overflow:auto;'); 
    virtualContentDiv.setAttribute('style','width:'+ onlyChildWidth +'px;height:15px;background:transparent;');
    scrollContainer.appendChild(virtualContentDiv);
    
    if(targetDiv.nextElementSibling) {
       targetDiv.parentNode.insertBefore(scrollContainer, targetDiv.nextElementSibling);
    }else {
       targetDiv.parentNode.appendChild(scrollContainer);      
    }
    
    scrollContainer.addEventListener('scroll', function() {
       targetDiv.scrollLeft = this.scrollLeft;
    });
  }
  
  // CommonJS/AMD/CMD规范导出LScroll
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = LScroll
  }
  if (typeof define === 'function') {
    define(function () {
      return LScroll
    })
  }
   
  // 支持在页面上直接通过script标签直接引入LScroll插件
  window.simpleScroll = LScroll;
})(document);
