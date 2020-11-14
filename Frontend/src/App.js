import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import English from './Screens/English/English';
import Join from './Components/ChatApp/Join/Join'
import Chat from './Components/ChatApp/Chat/chat'


function App() {
	return (
		
		<Router>
			<Route path="/" exact component={English}></Route>
			<Route path="/joinChat" exact component={Join}></Route>
			<Route path="/chat" component={Chat}></Route>
		</Router>


	);
}

export default App;
