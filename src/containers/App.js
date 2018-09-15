import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {robots} from'../robots';
import './App.css';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots :robots,
			searchfield : ''

		}
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
		
	}

	componentDidMount(){

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=> {this.setState({robots:users})});

	}

	render() {
		const {robots, searchfield}= this.state;
		const filteredRobots = robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
			})

		return !robots.length ?
		<h1> LOADING </h1> :
		
		(
		<div className='tc'>
			<h1 className='f1 '> Robot Fellas </h1>
			<SearchBox SearchChange={this.onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobots}/>
			</Scroll>

		</div>
		);
	}
}




export default App;