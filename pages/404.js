import Link from "next/Link";
import  {useRouter} from 'next/router'
function ErrorPage() {
    const router=useRouter();
    
    return ( 
        <>
    <h3>ERROR PAGE</h3>
    
    <a onClick={()=>router.push('/')}>

    <button > BACK TO HOME</button>
    </a>
     
        </>
     );
}

export default ErrorPage;