type LengthOfString<S extends string, T extends unknown[] = []> = 
  S extends `${infer First}${infer Rest}`
    ? LengthOfString<Rest, [...T, unknown]>
    : T['length'];

// el tipo LengthOfString toma un parametro generico S que es una cadena de texto
// usa la inferencia de tipos para dividir la cadena S en su primer caracter (First) y el resto de la cadena (Rest)
// el segundo parametro generico T es una tupla que se usa para contar la longitud de la cadena
// si S no es una cadena vacia, el tipo resultante es la longitud de Rest mas 1 (por First)
// si S es una cadena vacia, el tipo resultante es la longitud de T

type len1 = LengthOfString<'hola'>; // resulta en 4

type len2 = LengthOfString<''>;       // resulta en 0

type len3 = LengthOfString<'🚀'>;    // resulta en 1