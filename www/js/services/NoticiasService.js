angular.module('ucsalApp')
  .service('NoticiasService', function () {

    var noticias = [
      {
        id: 1,
        titulo: 'Rematrícula 2027.1 aberta',
        data: '2026-11-18',
        categoria: 'Notícia',
        imagem: 'img/rematricula.svg',
        resumo: 'O prazo de rematrícula online vai até 15 de dezembro.',
        conteudo: 'A rematrícula para o semestre 2027.1 já está disponível no Portal do Aluno. O prazo vai até 15 de dezembro. Alunos com pendências financeiras devem regularizar a situação antes de confirmar as disciplinas.'
      },
      {
        id: 2,
        titulo: 'Edital de Iniciação Científica',
        data: '2026-11-10',
        categoria: 'Notícia',
        imagem: 'img/edital.svg',
        resumo: 'Inscrições abertas para bolsas de pesquisa PIBIC 2027.',
        conteudo: 'A Pró-Reitoria de Pesquisa publicou o edital do programa de Iniciação Científica 2027. São 40 bolsas para todos os cursos. Os projetos devem ser enviados com a carta de aceite do orientador até 30 de novembro.'
      },
      {
        id: 3,
        titulo: 'SEMOC 2026',
        data: '2026-10-21',
        categoria: 'Evento',
        imagem: 'img/semoc.svg',
        resumo: 'Semana de Mobilização Científica no campus Pituaçu.',
        conteudo: 'A Semana de Mobilização Científica (SEMOC) reúne palestras, minicursos e apresentação de trabalhos de todos os cursos da UCSal. As atividades acontecem no campus Pituaçu e contam como horas complementares.'
      },
      {
        id: 4,
        titulo: 'Maratona de Programação',
        data: '2026-11-29',
        categoria: 'Evento',
        imagem: 'img/maratona.svg',
        resumo: 'Monte seu time de 3 pessoas e represente a UCSal.',
        conteudo: 'A Escola de Tecnologias vai selecionar times para a Maratona de Programação. Cada time tem 3 alunos e um coach. Os treinos acontecem às sextas no laboratório do campus Federação.'
      },
      {
        id: 5,
        titulo: 'Projeto de Extensão: Código na Escola',
        data: '2026-12-05',
        categoria: 'Evento',
        imagem: 'img/extensao.svg',
        resumo: 'Alunos ensinam lógica de programação em escolas públicas.',
        conteudo: 'O projeto de extensão Código na Escola leva alunos de Engenharia de Software para ensinar lógica de programação em escolas públicas de Salvador. As inscrições para voluntários estão abertas na coordenação.'
      }
    ];

    this.listar = function () {
      return noticias;
    };

    this.buscarPorId = function (id) {
      return noticias.find(function (noticia) {
        return noticia.id === Number(id);
      });
    };
  });
