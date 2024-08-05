import React from 'react'
import { Link } from 'react-router-dom'
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout'
import { AiOutlineHome } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { BiBookContent } from "react-icons/bi";
import { CiServer } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";


function index() {
  return (
     <div class="bg-slate-200 mt-24 p-4 min-h-screen fixed">
  <ul class="flex flex-col  space-y-6 mt-14 ml-7 text-3xl text-black ">

  <Link to=''>
  <li class="bg-white flex items-center group w-16 h-16 rounded-full active:bg-blue-600 hover:bg-blue-600 hover:text-white hover:rounded-sm-full hover:w-[8.5rem] hover:w-auto transition-all duration-300 overflow-hidden">
  <AiOutlineHome class="w-16 h-16 p-4" />
  <span class="text-2xl -ml-3 hidden group-hover:inline-block whitespace-nowrap">Home</span>
</li></Link>

  <Link to=''>
<li class="bg-white flex items-center group w-16 h-16 rounded-full active:bg-blue-600 hover:bg-blue-600 hover:text-white hover:rounded-sm-full hover:w-[8.5rem] hover:w-auto transition-all duration-300 overflow-hidden">
      <LuUser class="w-16 h-16 p-4" />
     <span class="text-2xl -ml-3 hidden group-hover:inline-block whitespace-nowrap">About</span>
    </li></Link>

    <Link to=''>
    <li class="bg-white flex items-center group w-16 h-16 rounded-full active:bg-blue-600 hover:bg-blue-600 hover:text-white hover:rounded-sm-full hover:w-[8.5rem] hover:w-auto transition-all duration-300 overflow-hidden">
      <BiBookContent class="w-16 h-16 p-4" />
      <span class="text-2xl -ml-3 hidden group-hover:inline-block whitespace-nowrap">Facts</span>
    </li></Link>

    <Link to=''>
    <li class="bg-white flex items-center group w-16 h-16 rounded-full active:bg-blue-600 hover:bg-blue-600 hover:text-white hover:rounded-sm-full hover:w-[9.5rem] hover:w-auto transition-all duration-300 overflow-hidden">
      <CiServer class="w-16 h-16 p-4"/>
      <span class="text-2xl -ml-3 hidden group-hover:inline-block whitespace-nowrap">Services</span>
    </li></Link>

    <Link to=''>
    <li class="bg-white flex items-center group w-16 h-16 rounded-full active:bg-blue-600 hover:bg-blue-600 hover:text-white hover:rounded-sm-full hover:w-[9.5rem] hover:w-auto transition-all duration-300 overflow-hidden">
      <MdOutlineEmail class="w-16 h-16 p-4"/>
      <span class="text-2xl -ml-3 hidden group-hover:inline-block whitespace-nowrap">Contact</span>
    </li></Link>

  </ul>
</div>

  )
}

export default index
