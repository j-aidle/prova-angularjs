angular.module('chartGrid')
    .controller('chartGridController', ['$scope', function chartGridController($scope) {

        $scope.filterRow = {
            visible: true,
            applyFilter: "auto"
        };

        $scope.gridOptions = {
            dataSource: cars,
            allowColumnReordering: true,
            allowColumnResizing: true,
            columnAutoWidth: true,
            showBorders: true,
            "export": {
                enabled: true,
                fileName: "cars",
                allowExportSelectedData: false
            },
            bindingOptions: {
                filterRow: "filterRow",
            },
            editing: {
                mode: "cell",
                allowAdding: true,
                allowUpdating: true,
                allowDeleting: true
            },
            columnChooser: {
                enabled: true
            },
            columnFixing: {
                enabled: true
            },
            columns: ["model", "total", "total2"],
            summary: {
                totalItems: [{
                    column: "model",
                    summaryType: "count"
                }, {
                    column: "total",
                    valueFormat: "#0.00",
                    summaryType: "sum"
                }, {
                        column: "total2",
                        valueFormat: "#0.00",
                        summaryType: "sum"
                }]
            }
        };

        $scope.chartOptions = {
            dataSource: cars,
            title: "Venta de Cotxes",
            series: [
                { argumentField: 'model', valueField: 'total' },
                { argumentField: 'model', valueField: 'total2' }
            ],legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                itemTextPosition: "bottom"
            }
        };

}]);

