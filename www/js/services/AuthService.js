// Mock de credenciais e sessão do aluno logado (em memória)
angular.module('ucsalApp')
  .service('AuthService', function ($rootScope, AlunoService) {

    var credenciais = [
      { matricula: '20261001', senha: '123456' },
      { matricula: '20261002', senha: '654321' }
    ];

    var alunoLogado = null;

    // Retorna o aluno se matrícula e senha conferem, senão null
    this.login = function (matricula, senha) {
      var valida = credenciais.some(function (c) {
        return c.matricula === matricula && c.senha === senha;
      });
      if (!valida) {
        return null;
      }
      alunoLogado = AlunoService.buscarPorMatricula(matricula);
      $rootScope.aluno = alunoLogado;
      return alunoLogado;
    };

    this.logout = function () {
      alunoLogado = null;
      $rootScope.aluno = null;
    };

    this.getAlunoLogado = function () {
      return alunoLogado;
    };
  });
