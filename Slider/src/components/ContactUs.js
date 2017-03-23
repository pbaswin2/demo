import React, { Component } from 'react'
import {Row,Col,FormControl} from 'react-bootstrap'

class ContactUs extends Component {
    render () {
        return (
            <div className="container">
						<h2 className="text-center">Contact Us</h2>
						<p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<Row>
							<Col sm={12} lg={4}>
								<FormControl  type="text" placeholder="Your Name"/>
							</Col>
							<Col sm={12} lg={4}>
							<FormControl  type="text" placeholder="Your Email"/>
							</Col>
							<Col sm={12} lg={4}>
								<FormControl type="text" placeholder="Your Phone Number"/>
							</Col>
						</Row>
						<Row>
							<Col sm={12} lg={12}>
								<FormControl componentClass="textarea" placeholder="Your Message"/>
							</Col>
						</Row>
					</div>
        )
    }
}

export default ContactUs