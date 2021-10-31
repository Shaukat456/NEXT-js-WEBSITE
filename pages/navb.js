import Link from 'next/link'
function navb() {
    return ( 
        <>
        <ul>
            <Link href='/' >  Home </Link>
            <Link  href='/'> About  </Link>
            <Link  href='/'>  Coctact </Link>
        </ul>
        </>
     );
}

export default navb;