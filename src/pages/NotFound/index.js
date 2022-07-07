import {React, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function NotFound() {
	useEffect(()=>{
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		  });

		document.title="SMARTTEN Software - Software Development Company";
      	document.description="SMARTTEN Software";
	},[])
  return (
        <div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - The Page can't be found</h2>
			</div>
			<Link to="/">Go TO Homepage</Link> 
		</div>
	</div>
  )
}

export default NotFound