angular.module('ucsalApp')
  .service('FinanceiroService', function () {

    var mensalidadesPorSemestre = {
      '2025.2': [
        { mes: 'Agosto', vencimento: '2025-08-10', valor: 1250.00, status: 'Paga' },
        { mes: 'Setembro', vencimento: '2025-09-10', valor: 1250.00, status: 'Paga' },
        { mes: 'Outubro', vencimento: '2025-10-10', valor: 1250.00, status: 'Paga' },
        { mes: 'Novembro', vencimento: '2025-11-10', valor: 1250.00, status: 'Paga' },
        { mes: 'Dezembro', vencimento: '2025-12-10', valor: 1250.00, status: 'Paga' }
      ],
      '2026.1': [
        { mes: 'Fevereiro', vencimento: '2026-02-10', valor: 1320.00, status: 'Paga' },
        { mes: 'Março', vencimento: '2026-03-10', valor: 1320.00, status: 'Paga' },
        { mes: 'Abril', vencimento: '2026-04-10', valor: 1320.00, status: 'Paga' },
        { mes: 'Maio', vencimento: '2026-05-10', valor: 1320.00, status: 'Paga' },
        { mes: 'Junho', vencimento: '2026-06-10', valor: 1320.00, status: 'Paga' }
      ],
      '2026.2': [
        { mes: 'Agosto', vencimento: '2026-08-10', valor: 1320.00, status: 'Paga' },
        { mes: 'Setembro', vencimento: '2026-09-10', valor: 1320.00, status: 'Paga' },
        { mes: 'Outubro', vencimento: '2026-10-10', valor: 1320.00, status: 'Paga' },
        { mes: 'Novembro', vencimento: '2026-11-10', valor: 1320.00, status: 'A Pagar', codigoBarras: '23793.38128 60082.677139 51000.063304 1 14520000132000' },
        { mes: 'Dezembro', vencimento: '2026-12-10', valor: 1320.00, status: 'A Pagar', codigoBarras: '23793.38128 60082.677139 51000.063304 7 14830000132000' }
      ]
    };

    this.listarSemestres = function () {
      return Object.keys(mensalidadesPorSemestre);
    };

    this.listarPorSemestre = function (semestre) {
      return mensalidadesPorSemestre[semestre] || [];
    };
  });
