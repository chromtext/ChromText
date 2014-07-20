var chromtext = angular.module('chromtext', [
	'ngRoute'
]);



// This method run the default editor
chromtext.run(function(){
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/clouds");
    editor.getSession().setMode("ace/mode/javascript");	
})
