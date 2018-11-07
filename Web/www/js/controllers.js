angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('plantCtrl', function($scope, $state, $rootScope, PlantEdit) {
    $scope.list = [{text:"Farm1",time:"12:00",index:0},{text:"Farm2",time:"9:00",index:1},{text:"Farm3",time:"15:00",index:2}];
	$rootScope.$on('add', function() {
		var data = PlantEdit.get();
		data["index"] = $scope.list.length;
        $scope.list.push(data);
		console.log($scope.list);
    });
	$rootScope.$on('edit', function() {
		var data = PlantEdit.get();
        $scope.list[data["index"]] = data;
		console.log($scope.list);
    });
})
.controller('plantCtrl2', function($scope, $state, PlantEdit, $stateParams) {
	$scope.addval = function() {
		var id = $stateParams.Id;
		if(id == -1){
			PlantEdit.update();
		}else{
			PlantEdit.update2(id);
		}
		$state.go('app.plant');
	};
})
.factory('PlantEdit', function($rootScope){
     
     var data = {text:"Farm1",time:"12:00"};

     return {
        get: function(){
			return data;
        },
        update : function(){
			data = {text:document.getElementById("name").value,time:document.getElementById("time").innerHTML};
			$rootScope.$broadcast('add');
        },
		update2 : function(id){
			data = {text:document.getElementById("name").value,time:document.getElementById("time").innerHTML,index:id};
			$rootScope.$broadcast('edit');
        }
     }

})

.controller('HomeCtrl', function($scope, $state, PlantEdit, $stateParams) {
	
})

.controller('AirCtrl', function($scope, $state, $stateParams) {
	$scope.temperature = 25;
	$scope.tempColor = "balanced";	
	$scope.changeColor=function(temp){
		if(temp > 50){
			$scope.tempColor = "assertive";
		}else{
			if(temp > 40 && temp <= 50){
				$scope.tempColor = "energized";
			}else{
				if(temp > 20 && temp <= 40){
					$scope.tempColor = "balanced";
				}else{
					$scope.tempColor = "positive";
				}
			}
		}
	};
	$scope.increaseTemp=function(){this.temperature++;$scope.changeColor(this.temperature);};
	$scope.decreaseTemp=function(){this.temperature--;$scope.changeColor(this.temperature);};
	$scope.change=function(){$scope.changeColor(this.temperature);};
	$scope.powerstatus=0;
	$scope.airpower="assertive";
	$scope.airmode="normal";
	$scope.fanlevel="1";
	$scope.starttime="-";
	$scope.stoptime="-";
	$scope.changepower=function(){
		if($scope.powerstatus==0){
			$scope.airpower="balanced";
			$scope.powerstatus=1;
		}
		else if($scope.powerstatus==1){
			$scope.airpower="assertive";
			$scope.powerstatus=0;
		}
	};
})



.controller('VaccumCtrl', function($scope, $state,  $stateParams) {
	
})

.controller('viewcamCtrl', function($scope, $state,  $stateParams) {
	$scope.id = $stateParams.Id;
})

.controller('CamCtrl', function($scope, $state, $stateParams) {
	$scope.list = [[{name:"cam1",state:"balanced"},{name:"cam2",state:"balanced"}],[{name:"cam3",state:"assertive"},{name:"cam4",state:"balanced"}]];
})

.controller('GarageCtrl', function($scope, $state, $stateParams,$timeout) {
	var status=0;
	$scope.garagestatus="Garage is closed";
	$scope.garageimg="img/storage.svg";
	$scope.changestatus=function(){
		if(status==0){
			$scope.garagestatus="Garage is opening ..."
			$timeout(function(){
				$scope.garageimg="img/garagestatus1.png"
				$timeout(function(){
					$scope.garageimg="img/garagestatus2.png"
					$timeout(function(){
						$scope.garageimg="img/garagestatus3.png"
						$timeout(function(){
							$scope.garageimg="img/garagestatus4.png"
							$timeout(function(){
								$scope.garagestatus="Garage is opened"
						},2000);
						},1000);
					},1000);
				},1000);
			},1000);
			status=1;
		}
		else{
			$scope.garagestatus="Garage is closing ..."
			$timeout(function(){
				$scope.garageimg="img/garagestatus3.png"
				$timeout(function(){
					$scope.garageimg="img/garagestatus2.png"
					$timeout(function(){
						$scope.garageimg="img/garagestatus1.png"
						$timeout(function(){
							$scope.garageimg="img/garagestatus0.png"
							$timeout(function(){
								$scope.garagestatus="Garage is closed"
						},2000);
						},1000);
					},1000);
				},1000);
			},1000);
			
			status=0;
		}
	};
})

.controller('LockCtrl', function($scope, $state, $stateParams) {
	
})

.controller('MusicCtrl', function($scope, $state, $stateParams) {
	$scope.artist="Oasis";
	$scope.songname="Stop Crying Your Heart Out";
	$scope.musicpic="img/sleep_icon.jpg";
	$scope.playlist = [
		{name:"something just like this",pic:"img/sofa_icon.png",artist:"The Chainsmokers & Coldplay "},
		{name:"Hello",cpic:"img/sleep_icon.jpg",artist:"Adele"},
		{name:"I Feel It Coming",pic:"img/kitchen_icon.png",artist:"The Weeknd ft. Daft Punk"},
		{name:"Lost Stars",pic:"img/bathroom_icon.png",artist:"Adam Levine"},
		{name:"I'm Yours",pic:"img/home_icon.png",artist:"Jason Mraz"},
		{name:"Let Her Go",pic:"img/garage_icon.png",artist:"Passenger"}];
})

.controller('SelectsongCtrl', function($scope, $state, $stateParams) {
	$scope.playlist = [
		{name:"something just like this",pic:"img/sofa_icon.png",artist:"The Chainsmokers & Coldplay "},
		{name:"Hello",cpic:"img/sleep_icon.jpg",artist:"Adele"},
		{name:"I Feel It Coming",pic:"img/kitchen_icon.png",artist:"The Weeknd ft. Daft Punk"},
		{name:"Lost Stars",pic:"img/bathroom_icon.png",artist:"Adam Levine"},
		{name:"I'm Yours",pic:"img/home_icon.png",artist:"Jason Mraz"},
		{name:"Let Her Go",pic:"img/garage_icon.png",artist:"Passenger"}];
})

.controller('TempCtrl', function($scope, $state, $stateParams) {
	
})

.controller('LightCtrl', function($scope, $state, $rootScope, LightEdit) {
	$scope.list = [
		{text:"ห้องนั่งเล่น",urlicon:"img/sofa_icon.png",index:0},
		{text:"ห้องนอน",urlicon:"img/sleep_icon.jpg",index:1},
		{text:"ห้องครัว",urlicon:"img/kitchen_icon.png",index:2},
		{text:"ห้องน้ำ",urlicon:"img/bathroom_icon.png",index:3},
		{text:"หน้าบ้าน",urlicon:"img/home_icon.png",index:4},
		{text:"โรงรถ",urlicon:"img/garage_icon.png",index:5}];
	$rootScope.$on('add', function() {
		var data = LightEdit.get();
		data["index"] = $scope.list.length;
        $scope.list.push(data);
    });
})
.controller('LightCtrl2', function($scope, $state, LightEdit, $stateParams) {
	$scope.addval = function() {
		var id = $stateParams.Id;
		if(id == -1){
			LightEdit.update();
		}
		$state.go('app.light');
	};
})
.factory('LightEdit', function($rootScope){
     
     var data = {text:"ห้อง"};

     return {
        get: function(){
			return data;
        },
        update : function(){
			data = {text:document.getElementById("name").value,urlicon:"img/other_icon.png"};
			$rootScope.$broadcast('add');
        }
     }

})