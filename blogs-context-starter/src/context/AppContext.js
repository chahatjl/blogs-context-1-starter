import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext=createContext();


export default function AppcontextProvider({children})
{

    const[loading,setLoading]=useState(false);
    const[post,setPost]=useState([]);
    const[page,setPageCount]=useState(1);
    const[totalPages,setTotalPages]=useState(null);

    async function fetchBlogPost(page=1)
    {
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;
        try
        {
           const result=await fetch(url);
           const data=await result.json();
           console.log(data);

           setPageCount(data.page);
           setTotalPages(data.totalPages);
           setPost(data.posts);
        }

        catch(erorr)
        {
             console.log("error in fecthing data");
             setPageCount(1);
             setPost([]);
             setTotalPages(null);
        }

        setLoading(false);
    }

    function handlePageChange(page)
    {
        setPageCount(page);
        fetchBlogPost(page);
    }
    const value=
    {
        post,
        setPost,
        loading,
        setLoading,
        page,
        setPageCount,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}