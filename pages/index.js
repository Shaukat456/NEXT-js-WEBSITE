import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    {/* <h1>hello world</h1> */}
    <h1> <Link href='/'>  Home  </Link> </h1>
    <h1> <Link href='/blog/blog1'>  blog 1</Link> </h1>
                   <h1> <Link href='/blog/blog2'> blog 2 </Link></h1>
    </>
  )
}
