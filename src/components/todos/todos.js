import { useEffect, useState } from "react";
import Header from "../header/header";

function ToDos() {
    const [element, setElement] = useState([]);

    useEffect(() => {
        const fetchdata = 'https://dummyjson.com/todos';
        const fetchData = async () => {
            const fetch1 = await fetch(fetchdata);
            const fetch2 = await fetch1.json()
            const fetch3 = await fetch2.todos;

            console.log('dime', fetch2);
            setElement(fetch3);
        }
        fetchData();
    }, []);
    return (
        <div className="display-output">
            <Header />
            <h1>ToDos</h1>
            <div className="wrapeer">
                {element.map((todo) => (
                    <div className="todo" key={todo.id}>
                        <p><b>Task No:{todo.id}</b> {todo.todo}.</p>
                    </div>))}
            </div>
        </div>
    )
}

export default ToDos;