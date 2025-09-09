type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
//Crea un nuevo tipo de objeto recorriendo cada propiedad del tipo T. 
// Para cada una de esas propiedades, hazla readonly y conserva su tipo original"

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// Estas lineas ahora causarán un error de TypeScript:
todo.title = "Hello"; // Error: No se puede asignar a 'title' porque es una propiedad de solo lectura.
todo.description = "barFoo"; // Error: No se puede asignar a 'description' porque es una propiedad de solo lectura.

