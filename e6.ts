type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];
// el tipo Concat toma dos parametros genericos T y U, ambos son tuplas (arreglos con longitud fija)
// el tipo resultante es una nueva tupla que es la concatenacion de T y U usando la sintaxis de propagacion (...)

// el ejemplo de tu ejercicio
type Result = Concat<[1], [2]>; // resulta en [1, 2]

// un ejemplo con más elementos y tipos mixtos
type Salad = Concat<['🍅', '🥬'], ['🥑', '🧅']>; // resulta en ['🍅', '🥬', '🥑', '🧅']

// concatenando con una tupla vacia
type StillOne = Concat<[1], []>; // resulta en [1]