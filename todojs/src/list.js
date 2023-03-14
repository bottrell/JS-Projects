export const List = (name) => {
    this.todos = [];
    this.name = name;

    // todo will be an object
    const addTodo = (todo) => {
        // Will maybe need to do some validation on this data once we get it.
        todos.append(todo);
    }

    return { name, addTodo };
}