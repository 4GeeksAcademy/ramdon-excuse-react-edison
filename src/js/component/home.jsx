import React from "react";
import RamdonExcuse from "./ramdonExcuse.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

	return (
		<div class="d-flex align-items-center justify-content-center vh-100">
			<RamdonExcuse who={who} action={action} what={what} when={when}/>
		</div>
	)
};

export default Home;
