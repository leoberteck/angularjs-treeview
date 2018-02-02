angular.module("angularjs-treeview").component("treeview", {
    controllerAs: '$ctrl'
    , controller: ['$scope', function($scope){
        $scope.isCollapsed = false
        this.onCollapseClick = function(){
            $scope.isCollapsed = !$scope.isCollapsed
        }

        this.onParentCheckChange = function() {
            this.node.checked = !(this.node.checked)
            if(this.node.items){
                this.node.items.forEach(element => {
                    element.checked = this.node.checked
                });
            }
            this.setState(this.node.checked)
        }

        this.onChildCheckChange = function(element) {
            this.updateState()
        }

        this.onChildParentStateChange = function(childNode, childNodeState){
            this.updateState()
        }

        this.updateState = function(){
            var hasSomeChecked = this.node.items.some(function(item){
                return item.checked == true || item.state == "indeterminate"
            })
            var hasSomeUnchecked = this.node.items.some(function(item){
                return !item.checked
            })
            if(hasSomeChecked && hasSomeUnchecked){
                this.setState("indeterminate")
            } else if(hasSomeChecked && !hasSomeUnchecked) {
                this.setState(true)
            } else {
                this.setState(false)
            }
            if(this.state != "indeterminate"){
                this.node.checked = this.state
            } else {
                //TODO: criar algum tratamento para o estado indeterminado
            }
        }

        this.setState = function(state){
            this.state = state
            if(this.onStateChange != null){
                this.onStateChange(this.node, this.state)
            }
        }
    }]
    , bindings : {
        node : "="
        , state : "@"
        , onStateChange : "&"
    }
    , templateUrl : "app/view/treeview.html"
})