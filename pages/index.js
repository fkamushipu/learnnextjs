import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/LoginCard';
import Register from '../components/RegisterCard';
import image1 from "../public/images/backgroundImage.jpg";
import AnotherLogin from '../components/Anotherlogin';
import Heading1 from "../components/Heading"



const Home = () => {
  const loginData ={
    title:"Login",
    description:"Please enter your login details below, if you have been registered!",
    footer: "I have agreed to the Terms and conditions"
  }
  const RegisterData ={
    title:"Register",
    description:"Please enter your information in the form below below, to registered!",
    footer: "I have agreed to the Terms and conditions"
  }
  return (
    <div className="p-4">

      {/* Login Card Starts here */}
      <div className='w-full shadow-xl'>
        <Heading1 heading1={"This is the first login sample"}></Heading1>
      </div>
      
      <div className='flex justify-center  w-full no-repeat p-8 '>
        <div className="w-full z-0 ">
          <Image src={image1} className="w-full shadow-xl rounded-xl"/>
        </div>
        <div className='absolute'>
        <Login title= {loginData.title} description={loginData.description} terms={loginData.footer} />
        </div>
      </div>

      <br></br>

      {/* Another Login card design */}
      <div className='w-full shadow-xl'>
        <Heading1 heading1={"This is the second login sample"}></Heading1>
      </div>
      <div className='m-6'>
        <AnotherLogin title= {loginData.title} description={loginData.description} terms={loginData.footer}></AnotherLogin>
      </div>

      {/* Register card design */}
      <div className='w-full shadow-xl'>
        <Heading1 heading1={"This is the registration card"}></Heading1>
      </div>
      <div className='m-6'>
        <Register title= {RegisterData.title} description={RegisterData.description} terms={RegisterData.footer}></Register>
      </div>
    </div>
  )
}

export default Home
