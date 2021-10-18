import { useRouter } from 'next/router'

function DynamicRoutes() {
    const router=useRouter();
    
    
    const pageNumber=router.query.pageNo
    
    return (  
        <>
       <h1>     
           {/* blog no { pageNumber} content */}
           </h1> 
       
        </>
    );

}

export default DynamicRoutes;