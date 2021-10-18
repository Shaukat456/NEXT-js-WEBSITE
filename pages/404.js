import Link from "next/Link";

function ErrorPage() {
    return ( 
        <>
    <h3>ERROR PAGE</h3>
    <Link href='/blog'> 
    <button> BACK TO HOME</button>
     </Link>
        </>
     );
}

export default ErrorPage;