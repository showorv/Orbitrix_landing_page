import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import React from "react"

const Publiclayout =async ({children}: {children: React.ReactNode})=> {

    return (
      <div className="min-h-screen flex flex-col">
  
  
      
     
      
      <Navbar />
      <main className="grow mx-10">
        {children}
      </main>
  
     <Footer />
     
    </div>
    )
  }
  
  export default Publiclayout