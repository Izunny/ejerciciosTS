type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// el tipo MyOmit toma dos parametros genericos: T y K
// T es un objeto y K es un conjunto de claves (keys) que pueden ser de cualquier tipo
// el tipo resultante es un nuevo objeto que contiene todas las propiedades de T excepto las que estan en K
// usa los tipos utilitarios Pick y Exclude para lograr esto

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// omitimos 'description' y 'title' de la interfaz Todo
type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

// el tipo de 'todo' es ahora { completed: boolean }
const todo: TodoPreview = {
  completed: false,
};