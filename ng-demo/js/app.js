var demo = angular.module("demo", ["ngRoute", "ui.router"]);
demo.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("index", {
			url: "/",
			templateUrl: "template/index.html",
			controller: "index"
		})
		.state("content", {
			url: "/content",
			views: {
				"": {
					templateUrl: "template/content.html",
					controller: "content"
				},
				"left@content": {
					templateUrl: "template/content-left.html",
					controller: "content"
				},
				"right@content": {
					templateUrl: "template/content-all.html",
					controller: "content"
				}
			}

		})
		.state("content.content-1", {
			url: "/content-1",
			views: {
				"right@content": {
					templateUrl: "template/content-right.html",
					controller: "content"
				}
			}
		})
		.state("content.content-2", {
			url: "/content-2",
			views: {
				"right@content": {
					templateUrl: "template/content-right-2.html",
					controller: "content"
				}
			}
		})
		.state("content.content-3", {
			url: "/content-3",
			views: {
				"right@content": {
					templateUrl: "template/content-right-3.html",
					controller: "content"
				}
			}
		})
})