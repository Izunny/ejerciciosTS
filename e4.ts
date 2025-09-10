type MyExclude<T, U> = T extends U ? never : T;
// El tipo MyExclude toma dos parametros genericos T y U

// ejemplo de uso
type A = 'a' | 'b' | 'c';
type B = 'a' | 'b';
type C = MyExclude<A, B>;  // esto resulta en el tipo c

// ejemplo del ejercicio
type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // resulta en el tipo: 'b' | 'c'

// otro ejemplo: excluyendo más de un tipo
type Shapes = 'circulo' | 'cuadrado' | 'triangulo';
type RoundShapes = MyExclude<Shapes, 'cuadrado' | 'triangulo'>; // resulta en 'circulo'

// ejemplo con tipos más complejos
type T0 = MyExclude<string | number | (() => void), Function>; // resulta en string | number