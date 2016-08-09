<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Calculator app</title>
        <link rel="stylesheet" href="scssconvert/style.php/calculator.scss"/>
        <link rel="stylesheet" href="scss/bootstrap.min.css"/>
    </head>
    <body>
        <div class="calc-container" ng-app="CalculatorApp" ng-controller="CalculatorController">
            <h2>Calculator app</h2>
            <form ng-submit="calculate()">
                <fieldset class="form-group">
                    <span class="col-xs-4 text">First value:</span>
                    <div class="col-xs-8">
                        <input class="form-control" type="text" ng-model="firstVal"
                                placeholder="Insert a value" ng-class="error.first == '' || error.first == null ? '' : 'error'"/>
                        <span class="col-xs-12 error" ng-bind="error.first"></span>
                    </div>
                </fieldset>

                <fieldset class="form-group">
                    <span class="col-xs-4 text">Operation:</span>
                    <div class="col-xs-12 select-container">
                        <select class="form-control" ng-init="operation = options[0]" ng-model="operation"
                            ng-options="option for option in options" ></select>
                    </div>
                </fieldset>

                <fieldset class="form-group">
                    <span class="col-xs-4 text">Second value:</span>
                    <div class="col-xs-8">
                        <input class="form-control" type="text" ng-model="secondVal"
                               placeholder="Insert a value" ng-class="error.second == '' || error.second == null ? '' : 'error'" />
                        <span class="col-xs-12 error" ng-bind="error.second"></span>
                    </div>
                </fieldset>

                <fieldset class="form-group checkbox">
                    <label class="col-xs-8 col-xs-offset-4">
                        <input type="checkbox" ng-model="aproximation"/>
                        <span>With aproximation</span>
                    </label>
                </fieldset>

                <fieldset class="form-group">
                    <span class="col-xs-4 text">Total:</span>
                    <div class="col-xs-8">
                        <span ng-bind="result"></span>
                    </div>
                </fieldset>

                <button type="submit" class="btn btn-primary"
                        ng-disabled="loading"
                        ng-bind="loading ? 'Loading...' : 'Calculate'">
                </button>
            </form>
        </div>

        <script type="text/javascript" src="js/angular.js"></script>
        <script type="text/javascript" src="js/calculator.js"></script>
    </body>
</html>


