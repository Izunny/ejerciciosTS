type Push<T extends readonly any[], U> = [...T, U];
// el tipo Push toma dos parametros genericos: T y U
// T es una tupla (arreglo con longitud fija) y U es cualquier tipo
// el tipo resultante es una nueva tupla que es la concatenacion de T con U al final usando la sintaxis de propagacion (...)

// el ejemplo de tu ejercicio
type Result = Push<[1, 2], '3'>; // resulta en [1, 2, '3']

// añadiendo un booleano a una tupla de strings
type Result2 = Push<['a', 'b'], true>; // resulta en ['a', 'b', true]
