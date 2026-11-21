angular.module('ucsalApp')
  .controller('PerfilCtrl', function ($scope, $ionicPopup, AuthService, AlunoService) {

    $scope.aluno = angular.copy(AuthService.getAlunoLogado());

    $scope.salvar = function () {
      AlunoService.atualizar($scope.aluno);

      $ionicPopup.alert({
        title: 'Cadastro atualizado',
        template: 'Seus dados de contato e endereço foram salvos.',
        okText: 'OK',
        okType: 'botao-primario'
      });
    };
  });
