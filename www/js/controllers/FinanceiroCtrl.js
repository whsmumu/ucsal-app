angular.module('ucsalApp')
  .controller('FinanceiroCtrl', function ($scope, FinanceiroService) {

    $scope.semestres = FinanceiroService.listarSemestres();
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
      $scope.copiado = mensalidade;
    };

    $scope.carregarMensalidades();
  });
