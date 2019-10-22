angular.module('chartGrid')
    .controller('chartGridController', ['$scope', function chartGridController($scope) {

        $scope.filterRow = {
            visible: true,
            applyFilter: "auto"
        };

        $scope.grouping = {
            autoExpandAll: false
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
                grouping: "grouping"
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
            columns: [
                "model",
                "any",
                "total",
                { dataField: "marca", groupIndex: 0 }
            ],
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
                    }],
                groupItems: [{
                    column: "marca",
                    summaryType: "count"
                },{
                        column: "total",
                        summaryType: "sum"
                }]

            }
        };

        $scope.chartOptions = {
            dataSource: cars,
            title: "Venta de Cotxes",
            series: [
                { name: "cotxes venuts per model", type: "spline", argumentField: 'model', valueField: 'total' },
                { name: "cotxes venuts per marca", type: "stackedBar", argumentField: 'marca', valueField: 'total' }
            ], legend: {
                verticalAlignment: "bottom",
                horizontalAlignment: "center",
                itemTextPosition: "bottom"
            }
        };

}]);

