type Last<T extends any[]> = T extends [...any[], infer Tail] ? Tail : never;
// el tipo Last toma un parametro generico T que es una tupla (arreglo con longitud fija)
// usa la inferencia de tipos para extraer el ultimo elemento de la tupla T
// si T es una tupla no vacia, el tipo resultante es el tipo del ultimo elemento de T
// si T es una tupla vacia, el tipo resultante es never

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

// aplicando el tipo generico
type tail1 = Last<arr1>; // resulta en  'c'
type tail2 = Last<arr2>; // resulta en  1