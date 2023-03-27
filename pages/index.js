import React, { useEffect } from 'react';

function HomePage() {
	useEffect(() => {
    document.title = 'SWA Next.js';
  });
   return (
      <>
		<div>
			
		</div>
         <div style={{ fontSize: "120px", margin: "20px", textAlign: "center" }}>Welcome to Next.js!</div>
		 <div style={{ padding: "10px 20px", fontSize: "50px", margin: "5%", textAlign: "center", color: "white"}}>
			<a href="/feature/ssr">SSR Demo</a><br></br><br></br>
			<a href="/feature/isr">ISR Demo with revalidate time of 10s.</a>
		 </div>
      </>	    
   )
}

export default HomePage
