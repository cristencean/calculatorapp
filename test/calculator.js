describe("CalculatorController",function(){
    var $rootScope,
        $scope,
		$timeout;

    beforeEach(function(){
		module('CalculatorApp');
		
        inject(function($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
			$timeout = $injector.get('$timeout');
            controller = $injector.get('$controller')("CalculatorController",{$scope:$scope});
		});
        $scope.$digest();
    });
        

	//Watchers
	describe('Watchers', function(){

		describe('validation', function() {
		   it('Should return "Please insert a number" if first value is null', function() {
			   $scope.calculate();
			   expect($scope.error.first).toEqual("Please insert a number");
		   });
		   it('Should return "Please insert a number" if second value is null', function() {
			   $scope.calculate();
			   expect($scope.error.second).toEqual("Please insert a number");
		   });
		   it('Should return "Please insert a correct value" if first value is not a number', function() {
			   $scope.firstVal = 'sdfg545';
			   $scope.calculate();
			   expect($scope.error.first).toEqual("Please insert a correct value");
		   });
		   it('Should return "Please insert a correct value" if second value is not a number', function() {
			   $scope.secondVal = 'sdfg545';
			   $scope.calculate();
			   expect($scope.error.second).toEqual("Please insert a correct value");
		   }); 
		   it('Expect errors to be null if values are numbers', function() {
			   $scope.firstVal = '5345';
			   $scope.secondVal = '453.453';
			   $scope.calculate();
			   expect($scope.error).toEqual("");
		   });
		});
		
		describe('calculation', function() {			
		   it('Expect numbers to be added if addition is selected', function() {
			   $scope.firstVal = 8;
			   $scope.secondVal = 2;
			   $scope.operation = '+';
			   $scope.aproximation = false;
			   $scope.calculate();
			   $timeout.flush();
			   expect($scope.result).toEqual(10);
		   });					
		   it('Expect numbers to be substracted if substration is selected', function() {
			   $scope.firstVal = 8;
			   $scope.secondVal = 2;
			   $scope.operation = '-';
			   $scope.aproximation = false;
			   $scope.calculate();
			   $timeout.flush();
			   expect($scope.result).toEqual(6);
		   });			
		   it('Expect numbers to be divided if division is selected', function() {
			   $scope.firstVal = 8;
			   $scope.secondVal = 2;
			   $scope.operation = '/';
			   $scope.aproximation = false;
			   $scope.calculate();
			   $timeout.flush();
			   expect($scope.result).toEqual(4);
		   });			
		   it('Expect numbers to be multiplied if multiplication is selected', function() {
			   $scope.firstVal = 8;
			   $scope.secondVal = 2;
			   $scope.operation = '*';
			   $scope.aproximation = false;
			   $scope.calculate();
			   $timeout.flush();
			   expect($scope.result).toEqual(16);
		   });		
		   it('Expect result to be rounded if approximation is checked', function() {
			   $scope.firstVal = 8;
			   $scope.secondVal = 3;
			   $scope.operation = '/';
			   $scope.aproximation = true;
			   $scope.calculate();
			   $timeout.flush();
			   expect($scope.result).toEqual(2.67);
		   });			
		});
	});

		
});
