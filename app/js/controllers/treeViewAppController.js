angular.module("angularjs-treeview").controller("treeViewAppController", function($scope) {
    $scope.tree_nodes = {
        name : "Item 1"
        , items : [
            { name : "Item 1.1" }
            , { name : "Item 1.2" }
            , { name : "Item 1.3" }
            , { name : "Item 1.4" }
            , {
                name : "Item 1.5" 
                , items : [
                    { name : "Item 1.5.1" }
                    , { name : "Item 1.5.2" }
                    , { name : "Item 1.5.3" }
                    , { name : "Item 1.5.4" }
                ]
            }
        ]
    }
})