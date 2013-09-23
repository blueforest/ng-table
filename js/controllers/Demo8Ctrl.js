define('controllers/Demo8Ctrl', [
    'app',
], function (app) {

    app.controller('Demo8Ctrl', ['$scope', '$filter', 'ngTableParams', function($scope, $filter, ngTableParams) {
        var data = [{name: "Moroni", age: 50, money: -10},
                    {name: "Tiancum", age: 43,money: 120},
                    {name: "Jacob", age: 27, money: 5.5},
                    {name: "Nephi", age: 29,money: -54},
                    {name: "Enos", age: 34,money: 110},
                    {name: "Tiancum", age: 43, money: 1000},
                    {name: "Jacob", age: 27,money: -201},
                    {name: "Nephi", age: 29, money: 100},
                    {name: "Enos", age: 34, money: -52.5},
                    {name: "Tiancum", age: 43, money: 52.1},
                    {name: "Jacob", age: 27, money: 110},
                    {name: "Nephi", age: 29, money: -55},
                    {name: "Enos", age: 34, money: 551},
                    {name: "Tiancum", age: 43, money: -1410},
                    {name: "Jacob", age: 27, money: 410},
                    {name: "Nephi", age: 29, money: 100},
                    {name: "Enos", age: 34, money: -100}];

        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            total: data.length, // length of data
            count: 10           // count per page
        });
        
        $scope.$watch('tableParams', function(params) {
            // use build-in angular filter
            var orderedData = params.sorting ? 
                                $filter('orderBy')(data, params.orderBy()) :
                                data;

            $scope.users = orderedData.slice((params.page - 1) * params.count, params.page * params.count);
        }, true);
    }]);

});