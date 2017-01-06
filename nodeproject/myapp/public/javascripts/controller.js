myApp.controller("reg", function($scope,$http) {
	$scope.user = {
		"username": "",
		"pwd": "",
		"pwd2": ""
	};
	$scope.sub = function() {
		if($scope.user.username == "") {
			ale("请输入用户名")
		}else if($scope.user.pwd==""){
			ale("请输入密码")
		}else if($scope.user.pwd2==""){
			ale("请输入密码")
		}else if($scope.user.pwd!==$scope.user.pwd2){
			ale("两次密码输入不一致")
		};
		$http({
			url:"/api/addUser?username="+$scope.user.username+"&pwd="+$scope.user.pwd,
			method:"POST",
		}).success(function(d){
			ale(d.msg)
		})
	}
})

function ale(a) {
	$("body").append("<div class='lay'><h4>"+a+"</h4></div>");
	setTimeout(function(){
		$(".lay").remove();
	},3000)
}