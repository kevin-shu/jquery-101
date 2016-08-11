var $ = (function(w, d){

  function stringToHTML(htmlString){
    var _temp = d.createElement('div');
    _temp.innerHTML = htmlString;
    return _temp.firstChild;
  }

  return function(selector){
    var dom = d.querySelectorAll(selector);
    for (var i=0; i<dom.length; i++){
      dom[i].html = function(html){
        if(html){
          this.innerHTML = html;
        } else {
          return this.innerHTML;
        }
      };
      dom[i].append = function(htmlString){
        this.appendChild(stringToHTML(htmlString));
      };
    }

    if(dom.length==1){dom=dom[0];}

    return dom;
  };
})(window, document);
