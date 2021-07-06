export const getStaticPaths = async () => {
    // console.log('start')
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();

    const paths = data.map(todo => {
        // console.log('here')
        return {
            params: { id: todo.id.toString() },
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    // console.log(context)
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
    console.log(data)

    return {
        props: { todo: data }
    }
}

const DetailsPage = ({ todo }) => {
    return (
        <div>
            <h1>{todo.name}</h1>
            <p>{todo.email}</p>
            <p>{todo.address.city}</p>
            <p>{todo.website}</p>
        </div>
    );
}
 
export default DetailsPage;