var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
	$scope.friends = ['Blair', 'russell', 'laurie', 'eric'];
});