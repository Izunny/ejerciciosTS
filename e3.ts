type Length<T extends readonly any[]> = T['length'];
//estamos creando un tipo genérico que simplemente devuelve el valor de la propiedad length del tipo de tupla que le pasemos
// ejemplo
type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

//  tipo generico
type teslaLength = Length<tesla>;   //  resulta en  4
type spaceXLength = Length<spaceX>; //  resulta en  5