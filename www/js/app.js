// Módulo principal da aplicação
angular.module('ucsalApp', ['ionic'])

  // Rotas da SPA com ui-router: cada template ligado ao seu controller
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })

      // Estado "pai" com o menu lateral; as telas internas abrem dentro dele
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })
      .state('app.noticias', {
        url: '/noticias',
        views: {
          menuContent: { templateUrl: 'templates/noticias.html', controller: 'NoticiasCtrl' }
        }
      })
      .state('app.noticia-detalhe', {
        url: '/noticias/:id',
        views: {
          menuContent: { templateUrl: 'templates/noticia-detalhe.html', controller: 'NoticiaDetalheCtrl' }
        }
      })
      .state('app.perfil', {
        url: '/perfil',
        views: {
          menuContent: { templateUrl: 'templates/perfil.html', controller: 'PerfilCtrl' }
        }
      })
      .state('app.financeiro', {
        url: '/financeiro',
        views: {
          menuContent: { templateUrl: 'templates/financeiro.html', controller: 'FinanceiroCtrl' }
        }
      });

    $urlRouterProvider.otherwise('/login');
  })

  .run(function ($rootScope, $state, $ionicHistory, AuthService) {
    // Sem aluno logado, qualquer tela volta para o login
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      if (toState.name !== 'login' && !AuthService.getAlunoLogado()) {
        event.preventDefault();
        $state.go('login');
      }
    });

    // Botão "Sair" do menu lateral
    $rootScope.sair = function () {
      AuthService.logout();
      $state.go('login').then(function () {
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
      });
    };
  });
