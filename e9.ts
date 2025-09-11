type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;
// el tipo MyParameters toma un parametro generico T que es una funcion
// usa la inferencia de tipos para extraer los tipos de los parametros de la funcion T
// si T es una funcion, el tipo resultante es una tupla que contiene los tipos de los parametros de T
// si T no es una funcion, el tipo resultante es never

const foo = (arg1: string, arg2: number): void => {};

const bar = (arg1: boolean, arg2: { name: string }): void => {};

// usamos 'typeof foo' para obtener el tipo de la funcion
type FunctionParamsType = MyParameters<typeof foo>; // resulta en [string, number]

type FunctionParamsType2 = MyParameters<typeof bar>; // resulta en [boolean, { name: string }]