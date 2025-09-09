// La definición de tu tipo generico
type First<T extends any[]> = T extends [infer Head, ...any[]] ? Head : never;
//si un array tiene al menos un elemento; si la respuesta es "sí", te da el tipo del primer elemento, si es "no" (el array está vacío)

//Pruebas

// Tuplas (arrays con tipos y longitud fijos)
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

// Aplicando el tipo generico
type head1 = First<arr1>; // 'a'
type head2 = First<arr2>; //  3

// Array vacio
type arr3 = [];
type head3 = First<arr3>; // never

// Array regular
type arr4 = string[];
type head4 = First<arr4>; // string | undefined