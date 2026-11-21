angular.module('ucsalApp')
  .controller('NoticiasCtrl', function ($scope, $state, NoticiasService) {

    $scope.noticias = NoticiasService.listar();
    $scope.categoria = '';

    $scope.filtrar = function (categoria) {
      $scope.categoria = categoria;
    };

    $scope.abrir = function (noticia) {
      $state.go('app.noticia-detalhe', { id: noticia.id });
    };
  })

  .controller('NoticiaDetalheCtrl', function ($scope, $stateParams, NoticiasService) {
    $scope.noticia = NoticiasService.buscarPorId($stateParams.id);
  });
