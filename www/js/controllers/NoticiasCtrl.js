// RF02 - Mural de notícias e eventos
angular.module('ucsalApp')
  .controller('NoticiasCtrl', function ($scope, $state, NoticiasService) {

    $scope.noticias = NoticiasService.listar();
    $scope.categoria = ''; // '' = todas; usado pelo filtro "filter" no ng-repeat

    $scope.filtrar = function (categoria) {
      $scope.categoria = categoria;
    };

    // Botão "Ler mais"
    $scope.abrir = function (noticia) {
      $state.go('app.noticia-detalhe', { id: noticia.id });
    };
  })

  // Visualização completa de uma notícia
  .controller('NoticiaDetalheCtrl', function ($scope, $stateParams, NoticiasService) {
    $scope.noticia = NoticiasService.buscarPorId($stateParams.id);
  });
