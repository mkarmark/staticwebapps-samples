export default function SSRDemo(props) {
	return (
	   <>
	   <div>
			
		</div>
		  <main>
			<h1 style={{ fontSize: "60px", margin: "20px", textAlign: "center" }}>Server Side Rendering</h1>
			<h2 style={{ fontSize: "70px", margin: "5%", textAlign: "center" }}>
			  <div>{props.thought}</div>
			</h2>
			<h2 style={{ fontSize: "40px", margin: "10%", textAlign: "center" }}>
				<a href="/">
					Home
				</a>
			</h2>
		  </main>
	   </>
	);
}

export async function getServerSideProps() {
	const ThoughtList = ['"You have to dream before your dreams can come true." – A.P.J Abdul Kalam', 
						'"Life should be great rather than long." – B.R. Ambedkar',
						'“Education is the most powerful weapon which you can use to change the world.” - Nelson Mandela',
						'“Every champion was once a contender that didn’t give up.” ― Gabby Douglas',
			     			'“A little progress each day adds up to big results.” – Satya Nani',
			     			'“Every accomplishment starts with the decision to try.” – Gail Devers',
			     			'“If you can dream it, you can do it.” - Walt Disney',
			     			'“All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.” ― A.P.J. Abdul Kalam',
			     			'“A person who never made a mistake never tried anything new.” — Albert Einstein',
						'“Nothing will work unless you do.” ― Maya Angelou'];
	let index = Math.ceil(Math.random() * 10) % 10;
    return {   
		props: {
			  thought: ThoughtList[index],
			},
    }
}
