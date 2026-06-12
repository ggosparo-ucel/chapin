/**
 * ChapinFlow - Plantillas Académicas Predefinidas
 * Este archivo contiene los ejemplos que se muestran en el panel lateral izquierdo.
 */
const templates = {
    sumaN: {
        title: 'Sumatoria de N números',
        data: {
            'main': {
                id: 'main',
                name: 'main()',
                type: 'main',
                structures: [
                    { id: 't1_1', type: 'action', code: 'Suma = 0' },
                    { id: 't1_2', type: 'action_output', code: 'OUTPUT "Ingrese cantidad de números a sumar (N):"' },
                    { id: 't1_3', type: 'action_input', code: 'INPUT N' },
                    { id: 't1_4', type: 'action', code: 'i = 1' },
                    {
                        id: 't1_5',
                        type: 'WHILE',
                        condition: 'WHILE i <= N',
                        body: [
                            { id: 't1_6', type: 'action_output', code: 'OUTPUT "Ingrese número:"' },
                            { id: 't1_7', type: 'action_input', code: 'INPUT Num' },
                            { id: 't1_8', type: 'action', code: 'Suma = Suma + Num' },
                            { id: 't1_9', type: 'action', code: 'i = i + 1' }
                        ]
                    },
                    { id: 't1_10', type: 'action_output', code: 'OUTPUT "La suma total es: ", Suma' }
                ]
            }
        }
    },
    mayorTres: {
        title: 'Mayor de Tres Números',
        data: {
            'main': {
                id: 'main',
                name: 'main()',
                type: 'main',
                structures: [
                    { id: 't2_1', type: 'action_output', code: 'OUTPUT "Ingrese A, B y C:"' },
                    { id: 't2_2', type: 'action_input', code: 'INPUT A, B, C' },
                    {
                        id: 't2_3',
                        type: 'if',
                        condition: '¿A > B?',
                        trueBranch: [
                            {
                                id: 't2_4',
                                type: 'if',
                                condition: '¿A > C?',
                                trueBranch: [{ id: 't2_5', type: 'action', code: 'Mayor = A' }],
                                falseBranch: [{ id: 't2_6', type: 'action', code: 'Mayor = C' }]
                            }
                        ],
                        falseBranch: [
                            {
                                id: 't2_7',
                                type: 'if',
                                condition: '¿B > C?',
                                trueBranch: [{ id: 't2_8', type: 'action', code: 'Mayor = B' }],
                                falseBranch: [{ id: 't2_9', type: 'action', code: 'Mayor = C' }]
                            }
                        ]
                    },
                    { id: 't2_10', type: 'action_output', code: 'OUTPUT "El número mayor es: ", Mayor' }
                ]
            }
        }
    },
    fibonacci: {
        title: 'Fibonacci Recursivo',
        data: {
            'main': {
                id: 'main',
                name: 'main()',
                type: 'main',
                structures: [
                    { id: 't3_1', type: 'action_output', code: 'OUTPUT "Ingrese número de términos:"' },
                    { id: 't3_2', type: 'action_input', code: 'INPUT Limite' },
                    { id: 't3_3', type: 'action', code: 'i = 0' },
                    {
                        id: 't3_4',
                        type: 'WHILE',
                        condition: 'WHILE i < Limite',
                        body: [
                            { id: 't3_5', type: 'action_output', code: 'OUTPUT fibonacci(i)' },
                            { id: 't3_6', type: 'action', code: 'i = i + 1' }
                        ]
                    }
                ]
            },
            'func_fibo': {
                id: 'func_fibo',
                name: 'fibonacci(n)',
                type: 'auxiliar',
                structures: [
                    {
                        id: 't3_7',
                        type: 'if',
                        condition: '¿n <= 1?',
                        trueBranch: [
                            { id: 't3_8', type: 'action_return', code: 'Retornar n' }
                        ],
                        falseBranch: [
                            { id: 't3_9', type: 'action_return', code: 'Retornar fibonacci(n - 1) + fibonacci(n - 2)' }
                        ]
                    }
                ]
            }
        }
    }
};
