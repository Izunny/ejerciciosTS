type Unshift<T extends readonly any[], U> = [U, ...T];
// el tipo Unshift toma dos parametros genericos: T y U
// T es una tupla (arreglo con longitud fija) y U es cualquier tipo
// el tipo resultante es una nueva tupla que es la concatenacion de U al inicio de T usando la sintaxis de propagacion (...)

 // el ejemplo de tu ejercicio
type Result = Unshift<[1, 2], 0>; // resulta en [0, 1, 2]

// añadiendo un string al inicio de otra tupla
type Greeting = Unshift<['world'], 'hello'>; // resulta en ['hello', 'world']