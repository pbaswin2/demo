import React, { Component } from 'react'
import {Row,Col} from "react-bootstrap"

class Events extends Component {
    render () {
        return (
           <div className="event">
						<h2 className="text-center">Our Events</h2>
						<p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<Row>
							<Col sm={12} lg={4} className="text-center">
								<h4>March 24th</h4>
								<p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</Col>
							<Col sm={12} lg={4} className="text-center">
								<h4>March 24th</h4>
								<p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</Col>
							<Col sm={12} lg={4} className="text-center">
								<h4>March 24th</h4>
								<p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</Col>
						</Row>
					</div>
        )
    }
}

export default Events