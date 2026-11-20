// RF04 - Consulta de mensalidades por semestre
angular.module('ucsalApp')
  .controller('FinanceiroCtrl', function ($scope, FinanceiroService) {

    $scope.semestres = FinanceiroService.listarSemestres();
    // Objeto para o ng-model do <select> funcionar dentro do ion-content
    $scope.filtro = { semestre: $scope.semestres[$scope.semestres.length - 1] };
    $scope.copiado = null;

    $scope.carregarMensalidades = function () {
      $scope.mensalidades = FinanceiroService.listarPorSemestre($scope.filtro.semestre);
      $scope.copiado = null;
    };

    $scope.copiarCodigo = function (mensalidade) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(mensalidade.codigoBarras);
      }
      $scope.copiado = mensalidade; // mostra a confirmação só nessa parcela
    };

    $scope.carregarMensalidades();
  });
