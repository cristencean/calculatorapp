var app = angular.module('CalculatorApp',[]);

app.controller('CalculatorController', ['$scope', function ($scope) {

    $scope.options = ['+','-','/','*'];
    var result = 0;

    $scope.calculate = function() {
        var error = {
            first : validateValue($scope.firstVal),
            second : validateValue($scope.secondVal)
        }
        $scope.error = error;

        if (error.first || error.second) {
            return;
        }

        firstValue = parseFloat($scope.firstVal);
        secondValue = parseFloat($scope.secondVal);

        if ($scope.operation == '+') {
            result = firstValue + secondValue;
        }
        if ($scope.operation == '-') {
            result = firstValue - secondValue;
        }
        if ($scope.operation == '/') {
            result = firstValue / secondValue;
        }
        if ($scope.operation == '*') {
            result = firstValue * secondValue;
        }
        $scope.result = result.toFixed(2);
    };

    var validateValue = function (value) {
        console.log(value);
        if (value == null || value == '') {
            return 'Please insert a number';
        }
        else if (!checkNumber(value)) {
            return 'Please insert a correct value';
        }
        else {
            return false;
        }
    }

    var checkNumber = function (n) {
        return !isNaN((n)) && isFinite(n);
    }

}]);
