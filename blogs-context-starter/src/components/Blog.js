import React, { useContext } from "react"
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
export default function Blog()
{
   const{post,loading}=useContext(AppContext);
 return (
 <div className="w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[70px] mb-[70px]">
   {
      loading?(<Spinner/>):
      (
         post.length===0?
         (
            <div>
               <p>No post avaiable</p>
               </div>
         ):
         (post.map((p)=>
         (
            <div key={p.id}>
               <p className="font-bold text-lg">{p.title}</p>
               <p className="text-sm mt-[4px]">
                  By <span className="italic">{p.author} </span>on <span className="underline font-bold">{p.category}</span>
               </p>
               <p className="text-sm mt-[4px]">Posted on {p.date}</p>
               <p className="text-md mt-[14px]">{p.content}</p>
               <div className="flex gap-x-3">
                  {p.tags.map((tag,index)=>
                  {
                     return <span key={index} className="text-blue-500 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
                  })}
                  </div>
               </div>
         )))
      )
   }
 </div>
 );
}