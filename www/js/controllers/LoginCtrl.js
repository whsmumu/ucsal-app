angular.module('ucsalApp')
  .controller('LoginCtrl', function ($scope, $state, $ionicHistory, AuthService) {

    $scope.form = { matricula: '', senha: '' };
    $scope.erro = '';

    $scope.entrar = function () {
      if (!$scope.form.matricula || !$scope.form.senha) {
        $scope.erro = 'Informe a matrícula e a senha.';
        return;
      }

      var aluno = AuthService.login($scope.form.matricula, $scope.form.senha);
      if (!aluno) {
        $scope.erro = 'Matrícula ou senha inválidas.';
        return;
      }

      $scope.erro = '';
      $scope.form = { matricula: '', senha: '' };
      $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
      $state.go('app.noticias');
    };
  });
