import { useState } from 'react'
import { logo, menu, menuclose, arrowUp, arrowDown, todo, calender, reminders, planning } from "../assets/images";
import { Features, Company } from "../constants";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [compo, setCompo] = useState(false);

  return (
    <nav className="w-screen h-[80px]"> 
      <div className="px-[2rem] lg:px-[5rem] flex justify-between items-center w-full h-full">
        <div className="flex items-center">
            <img src={logo} alt="img_logo" className="h-full p-6" />

            <ul className="hidden sm:flex">
                <ul className="flex">
                  <li className="flex pl-6"> 
                    <a href="">Features </a>
                
          <img
          src={arrow ? arrowUp : arrowDown}
          alt="menu"
          className=" h-[8px] px-2 mt-2.5 object-contain"
          onClick={() => setArrow(!arrow)}
        />
        <div
          className={`${
            !arrow ? "hidden" : "flex"
          } p-4 bg-white text-black items-center 
          absolute left-[100px] 
          top-1 pr-[7rem] mt-14 w-[80px] rounded-md`}   
        >
       <ul className="sm:items-center">
          {Features.map((list, index) => 
              <li 
                key={list.id}
                className={`flex text-[16px] items-center 
                ${index === Features.length -1 ? 'mr-0' : 'mr-10'}
                `}
              >
                <img src={list.icon} alt="" 
            className="h-[14px] w-[10px]"
                />
                
                <a href={`#${list.id}`}
                className="pt-1 px-2"
                >{list.title}</a>
              </li>   
          )}
       </ul>
        </div>  
        
                  </li>
                  <li className="flex pl-6">
                    <a href="">Company</a>
                    <img
          src={compo ? arrowUp : arrowDown}
          alt="menu"
          className="h-[8px] px-2 mt-2.5 object-contain"
          onClick={() => setCompo(!compo)}
        />
        <div
          className={`${
            !compo ? "hidden" : "flex"
          } p-4 bg-white text-black items-center 
          absolute left-[290px] 
          top-1 mt-14 rounded-md`}   
        >
             <ul className="sm:items-center">
          {Company.map((com, index) => 
              <li 
                key={com.id}
                className={`flex text-[16px] items-center 
                ${index === Company.length -1 ? 'mr-0' : 'mr-0'}
                `}
              >
                <a href={`#${com.id}`}
                className="pt-1 pr-1"
                >{com.title}</a>
              </li>   
          )}
       </ul>
        </div> 
                  </li>
                  
                  <li className="pl-8">
                    <a href="">Careers</a>
                  </li>
                  <li className="pl-8">
                    <a href="">About</a>
                  </li>
                </ul>
            </ul>
        </div>
        <ul className="hidden items-center sm:flex pr-4">
                <li className="mr-4">
                  <a href="">Login</a>
                </li>
                <li className="mr-4 pt-1 text-center border-solid border-2 border-black h-[2.5rem] w-[6rem] rounded-full">
                  <a href="">Register</a>
                </li>
            </ul> 

        <div className="mr-10 sm:hidden flex justify-end items-center">
        <img
          src={toggle ? menuclose : menu}
          alt="menu"
          className="mr-2 w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } pl-2 bg-white items-center absolute top-1 right-0 mr-8 mt-14 my-2 min-w-[200px]`}
            
        >
          <ul className="f-full">
                  <li className="flex pt-4">
                    <a href="">Features</a>
                      <img src={arrowDown} alt="icon" className="h-[8px] px-2 mt-2.5"/>        
                    </li>
                    <li className="flex pt-4">
                      <a href="">Company</a>
                        <img src={arrowDown} alt="icon" className="h-[8px] px-2 mt-2.5"/>   
                   </li>
                   <li className="pt-4">
                      <a href="">Careers</a>
                   </li>
                   <li className="pt-4">
                        <a href="">About</a>
                    </li>
                    <li className="text-center mt-10">
                        <a href="">Login</a>
                    </li>
                    <li className="mt-4 text-center border-solid border-2 border-black h-full w-[10rem] rounded-full">
                        <a href="">Register</a>
                </li>
            </ul>
            </div>
         </div>
        </div>
    </nav>
  );
};

export default Navbar