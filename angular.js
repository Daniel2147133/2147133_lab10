var myapp = angular.module("emp_details",[]);
myapp.controller("emp_ctrl",function($scope,$http)
    {
        console.log("success1");
        $http.get("http://127.0.0.1:5200/emp")
        // .success()
        .then(function(response)
        {   
            console.log("success");
            $scope.emp=response.data.data;
            console.log($scope.emp);
        });
    }
);
