// Dados cadastrais mockados dos alunos e métodos de busca/edição
angular.module('ucsalApp')
  .service('AlunoService', function () {

    var alunos = [
      {
        matricula: '20261001',
        nome: 'Maria Clara Santos',
        curso: 'Engenharia de Software',
        email: 'maria.clara@email.com',
        telefone: '(71) 99999-1001',
        endereco: { cep: '41740-090', rua: 'Av. Prof. Pinto de Aguiar, 2589', bairro: 'Pituaçu', cidade: 'Salvador' }
      },
      {
        matricula: '20261002',
        nome: 'João Pedro Almeida',
        curso: 'Engenharia de Software',
        email: 'joao.pedro@email.com',
        telefone: '(71) 98888-1002',
        endereco: { cep: '40210-020', rua: 'Rua Barão de Jeremoabo, 100', bairro: 'Federação', cidade: 'Salvador' }
      }
    ];

    this.buscarPorMatricula = function (matricula) {
      return alunos.find(function (aluno) {
        return aluno.matricula === matricula;
      });
    };

    // Atualiza somente os campos editáveis (contato e endereço)
    this.atualizar = function (dados) {
      var aluno = this.buscarPorMatricula(dados.matricula);
      aluno.email = dados.email;
      aluno.telefone = dados.telefone;
      aluno.endereco = angular.copy(dados.endereco);
      return aluno;
    };
  });
