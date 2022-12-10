import React from 'react';
import { deskTop, mobile, databiz, audiophile, meet ,cliectMaker } from "../assets/images";
const Header = () => {
  return (
    <section className="md:flex flex-row justify-between">
      <div className=" flex justify-end h-[100%] w-[680px]">
          <img src={deskTop} alt=""/>
        </div>
          <div className="pt-[10rem] ">
              <h1 className="text-4xl font-bold text-center">Make Remote Work</h1>
              <p className="text-[16px] text-gray-500 pt-6 p-[50px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti ipsam nisi tempora commodi earum. Quos id ipsa fuga alias.</p>
          
              <div className="flex justify-center ">
              <a href="" className="my-10 text-[20px] text-center border border-black hover:  border border-white
              bg-black hover:bg-white  text-white hover:text-black  h-[40px] w-[160px] rounded-xl" >Learn more</a>
              </div>
                <div className="flex justify-center mt-[8rem]">
                <img src={databiz} alt="" className="pl-10" />
                <img src={audiophile} alt="" className="pl-10" />
                <img src={meet} alt="" className="pl-10" />
                <img src={cliectMaker} alt="" className="pl-10"  />
                </div>

              <div>
            </div>
          </div>
          
    </section>
  )
}

export default Header