// import React from 'react'

// const Launch = ({handleHome}) => {
//   return (
//     <div>
//       <button onClick={handleHome}>Website</button>
//     </div>
//   )
// }

// export default Launch

import React from 'react'

const Launch = ({ handleHome }) => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden font-sans">
      
      {/* Background Radial Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header */}
      <header className="flex justify-between items-center max-w-7xl mx-auto w-full z-10">
        <div className="flex items-center gap-2">
          
        </div>
        
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto text-center z-10 my-auto py-12 px-4">
        {/* Top Badge */}
        

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif leading-tight tracking-wide mb-6">
          Our official website <br className="hidden sm:block" />
          will be <span className="italic text-[#C5A059] font-serif">launching soon.</span>
        </h1>

        {/* Divider Line */}
        <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto my-8" />

        {/* Sub-text */}
        <p className="text-sm sm:text-base text-gray-300 font-light tracking-[0.25em] uppercase mb-10">
          Stay tuned!
        </p>

        {/* Website Action Button using handleHome */}
        {/* <button 
          onClick={handleHome}
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-[#C5A059]/50 bg-[#161616]/80 text-[#C5A059] text-xs font-medium uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-black transition-all duration-300 shadow-lg shadow-[#C5A059]/10 hover:shadow-[#C5A059]/25 cursor-pointer"
        >
           <span>→</span>
        </button> */}
      </main>

      
   
    </div>
  )
}

export default Launch
