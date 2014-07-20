var chromtext = angular.module('chromtext', [
	'ngRoute'
]);

// This method run the default editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/javascript");	
