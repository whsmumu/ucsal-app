// RF03 - Atualização cadastral
angular.module('ucsalApp')
  .controller('PerfilCtrl', function ($scope, $ionicPopup, AuthService, AlunoService) {

    // Cópia para editar sem alterar o mock antes de clicar em "Salvar"
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
