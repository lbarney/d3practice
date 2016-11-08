angular.module('d3').controller("mainCtrl", function($scope, mainServ){

	//establish intial data
	$scope.data = [10,23,54,87,746,534,92,52,85,645,03,52];
	console.log('I am Here')
	//enter and append data
	

	//if new data establish data
	$scope.data2 = [12,23,54,8,746,54,1,2,5,2,2,52];

	

	//transition data
	$scope.changer = function(){
		for(var i = 0; i<100; i++){
			$scope.data.push (Math.round((Math.random()*100)));
		}
		console.log($scope.data);
	};


	$scope.transition = function(){

	d3.select(".bars")
	.selectAll("div")
	.data($scope.data)
	.enter()
	.append("div")
	.style('height', function(d, i){  //d is data i is index
		return ((1/$scope.data.length)*100) + "vh"
	})
	.style("width", function(d, i){
		return (d/d3.max($scope.data))*100 + "vw";
	})
	.style("background-color", function(d, i){
		return d3.hsl(Math.random()*360, Math.random()*30, Math.random())
	});

	d3.select('.bars')
	.selectAll("div")
	.data($scope.data2)
	.transition()
	.duration(3000)
	.style("width", function(d, i){
		return (d/d3.max($scope.data))*100 + "vw";
	})
	.style("background-color", function(d, i){
		return d3.hsl(Math.random()*360, Math.random()*30, Math.random())
	});
	};

	


});