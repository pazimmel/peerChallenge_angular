myApp.directive('zetaInfo',
    function(){
        return {
            restrict: "E",
            scope: {
                info: "="
            },
            templateUrl: "/assets/views/zetaInfo.html"
        }
    }
);