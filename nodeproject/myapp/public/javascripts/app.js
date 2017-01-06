var myApp = angular.module("myApp", ["ui.router"]);
myApp.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise("/index");
	$stateProvider
	.state("index", {
		url: "/index",
		views: {
			"": {
				templateUrl: "index.html"
			},
			"head@index":{
				templateUrl:"../template/header.html"
			},
			"content@index":{
				templateUrl:"../template/content.html"
			}
		}
	})
	.state("index.reg",{
		url:"/reg",
		views:{
			"content@index":{
				templateUrl:"../template/reg.html",
				controller:"reg"
			}
		}
	})
})