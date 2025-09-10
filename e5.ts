type If<C extends boolean, T, F> = C extends true ? T : F;
// el tipo If toma tres parametros genericos: C, T y F
// C es un tipo booleano que determina si se selecciona T o F
// si C es verdadero, el tipo resultante es T, si C es falso, el tipo resultante es F

// si C es verdadero, el tipo resultante es el segundo argumento ('a')
type A = If<true, 'a', 'b'>;  // resulta en el tipo 'a'

// si C es falso, el tipo resultante es el tercer argumento ('b')
type B = If<false, 'a', 'b'>; // resulta en el tipo 'b'

// también funciona con tipos más complejos
type Case1 = If<true, { name: string }, number[]>; // resulta en { name: string }

