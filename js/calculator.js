var app = angular.module('CalculatorApp',[]);

app.controller('CalculatorController', ['$scope', '$timeout', function ($scope, $timeout) {

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

        $scope.loading = true;
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
        $scope.error = '';

        $timeout(function () {

            if ($scope.aproximation) {
                $scope.result = (result.toFixed(2))/1;
            } else {
                $scope.result = result;
            }
            $scope.loading = false;

        }, 500);

    };

    var validateValue = function (value) {
        if (value == null || value == '') {
            return 'Please insert a number';
        }
        else if (!checkNumber(value)) {
            return 'Please insert a correct value';
        }
        else {
            return ;
        }
    }

    var checkNumber = function (n) {
        return !isNaN((n)) && isFinite(n);
    }

}]);
