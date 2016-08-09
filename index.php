<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Calculator app</title>
        <link rel="stylesheet" href="scssconvert/style.php/calculator.scss"/>
    </head>
    <body>
        <div class="calc-container" ng-app="CalculatorApp" ng-controller="CalculatorController">
            <form ng-submit="calculate()">
                <input type="text" ng-model="firstVal"  />
                <span ng-bind="error.first"></span>

                <select ng-init="operation = options[0]" ng-model="operation"
                        ng-options="option for option in options" ></select>

                <input type="text" ng-model="secondVal"  />
                <span ng-bind="error.second"></span>

                <span ng-bind="result"></span>

                <input type="submit" value="Calculate" />
            </form>
        </div>

        <script type="text/javascript" src="js/angular.js"></script>
        <script type="text/javascript" src="js/calculator.js"></script>
    </body>
</html>


