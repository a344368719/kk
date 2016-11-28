demo.controller("index", function($scope, $rootScope) {
	$scope.user = "",
	$scope.pwd = "",
	$rootScope.user = ""
	$scope.cli = function() {
		$rootScope.user = $scope.user
		location.href = "#/content"
	},
	$scope.qk = function() {
		$scope.use = "",
		$scope.pwd = ""
	}
})
demo.factory("htt", function($http) {
	return $http({
		method: "GET",
		url: "http://localhost:10001/Jobboards"
	})
})
demo.controller("content", function($scope, $http, htt) {
	htt.success(function(data) {
		$scope.con = data.ResultMessage;
		//		console.log(data)
	})
})
demo.controller("content", function($scope,$rootScope, $http, htt) {
	htt.success(function(data) {
		$scope.con = data.ResultMessage
		$scope.data = data.Results
		$scope.dataList = data.Results
		$scope.dataList1 = data.Results[0]
		$scope.dataList2 = data.Results[1]
		$scope.dataList3 = data.Results[2]
			//		console.log($scope.data)
	})
	$scope.user=$rootScope.user;
	if($scope.user==undefined){
		location.href="#/"
	}
})