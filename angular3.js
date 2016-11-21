/**
 * Created by 13521 on 2016/11/9.
 */
function MyCtrl1($scope,$rootScope) {
    $scope.name="霍建华1"; /* 模型 */
    $scope.age="37"; /* 局部作用域 */
    $scope.work=function () {
        alert("演员");
    };
    $rootScope.name="胡歌"; /* 全局作用域 */
}

function MyCtrl2($scope, $rootScope) {
    $scope.name="靳东";
    $scope.age="40";
    $rootScope.good="演戏";
    $rootScope.name="胡歌2";
}

function MyCtrl3($scope) {
    $scope.firstname="霍";
    $scope.lastname="建华";
    $scope.fullname=function () {
        return $scope.firstname+$scope.lastname;
    }
}
function CommonCtrl($scope) {
    $scope.CommonFn=function () {
        alert("共同的方法");
    }
}