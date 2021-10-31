import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navb from '../pages/navb'

export default function Home() {
  return (
    <>
    <Navb/>


    <div className="container flex ">
      <div className="intro">
        <h1 className='text-xl text-center'> SHAUKAT SOHAIL</h1>
      </div>
    </div>
    </>
  )
}
