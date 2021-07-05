import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router"

const NotFound = () => {

    const route = useRouter();

    useEffect(() => {
        setTimeout(() => {
            route.push('/')
        }, 3000)
    }, [])

    return (
        <div className="not__found">
            <h1>Ooops...</h1>
            <h2>This page cannot be found</h2>
            <p>Go back to <Link href='/'><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default NotFound;