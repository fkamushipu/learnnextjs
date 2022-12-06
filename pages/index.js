import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/LoginCard';
import image1 from "../public/images/backgroundImage.jpg";
import AnotherLogin from '../components/Anotherlogin';


const Home = () => {
  const loginData ={
    title:"Login",
    description:"Please enter your login details below, if you have been registered!",
    footer: "I have agreed to the Terms and conditions"
  }
  return (
    <div className="">

    {/* Login Card Starts here */}
      <div className='flex justify-center relative w-full no-repeat'>
        <div className="w-full z-0 ">
                <Image src={image1} className="w-full"/>
        </div>
        <Login title= {loginData.title} description={loginData.description} terms={loginData.footer} />
      </div>
      <br></br>
      {/* Another Login card design */}

      <div className='m-6'>
        <AnotherLogin title= {loginData.title} description={loginData.description} terms={loginData.footer}></AnotherLogin>
      </div>
    </div>
  )
}

export default Home
