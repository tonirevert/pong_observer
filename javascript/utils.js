function clearSelection() {
     if(document.selection && document.selection.empty) {
         document.selection.empty();
     } else if(window.getSelection) {
         var sel = window.getSelection();
         sel.removeAllRanges();
     }
 }

function extend(obj, interface){
  var i;
  for (i in interface){
    obj[i] = interface[i];
  }
}

 module.exports.clearSelection = clearSelection;
 module.exports.extend = extend;
