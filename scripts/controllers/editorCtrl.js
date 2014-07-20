var chromText = angular.module('chromtext', [])

chromText.controller('editorCtrl', ['$scope', function($scope){
	$scope.themes = ['chaos', 'monokai', 'textmate'];

	$scope.changeTheme = function (theme) {
		editor.setTheme("ace/theme/" + theme);	
	}
}])