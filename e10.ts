type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;
// el tipo MyReturnType toma un parametro generico T que es una funcion
// usa la inferencia de tipos para extraer el tipo de retorno de la funcion T
// si T es una funcion, el tipo resultante es el tipo de retorno de T
// si T no es una funcion, el tipo resultante es never

const fn = (v: boolean) => {
  if (v)
    return 1;
  else
    return 2;
};

const fn2 = () => ({ a: 1, b: 'hello' });

// usamos 'typeof fn' para obtener el tipo de la funcion
type a = MyReturnType<typeof fn>; // resulta en 1 | 2

type b = MyReturnType<typeof fn2>; // resulta en { a: number, b: string }