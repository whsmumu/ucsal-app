// RF01 - Autenticação com login mockado
angular.module('ucsalApp')
  .controller('LoginCtrl', function ($scope, $state, $ionicHistory, AuthService) {

    // Objeto (e não variável solta) para o ng-model funcionar dentro do ion-content
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
      // Mural vira a tela inicial (sem botão de voltar para o login)
      $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
      $state.go('app.noticias');
    };
  });
