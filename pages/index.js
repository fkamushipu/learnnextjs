import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/LoginCard';

const Home = () => {
  const loginData ={
    title:"Login",
    description:"Please enter your login details below, if you have been registered!",
    footer: "I have agreed to the Terms and conditions"
  }
  return (
    <div className="">
    <Login title= {loginData.title} description={loginData.description} terms={loginData.footer} />
   
    </div>
  )
}

export default Home
