import styles from "../../styles/Todos.module.css"
import Link from "next/link"

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();
    console.log(data)

    return {
        props: { todos: data }
    }
}

const todos = ({ todos }) => {
    console.log(todos)
    return ( 
        <div>
            <h1>
                All Todos
            </h1>
            {
                todos.map(todo => (
                    <Link href={'/todos/'+ todo.id } key={todo.id}>
                        <a className={styles.single}>
                            <h3>{todo.name}</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    );
}
 
export default todos;