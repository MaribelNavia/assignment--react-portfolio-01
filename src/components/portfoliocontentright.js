import React, {Component} from 'react';
import ContactInfo from './contactinfo'
import Summary from './summary'
import Header from './header'

 class PortfolioContent extends Component {
 	render(){
 		return(<div className="portfolio-content">
 				<Header />
 				<Summary /> 
 				<ContactInfo />
 			   </div>
 			)
 	}
 }


export default PortfolioContent