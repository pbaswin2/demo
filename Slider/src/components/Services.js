import React, { Component } from 'react'
import {Row,Col} from "react-bootstrap"



class Services extends Component {
    render () {
        return (
           
                    <div className="services">
						<h2 className="text-center">Our Services</h2>
						<p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<Row>
							<Col sm={12} lg={6} className="text-center">
								<h3>First Class Design</h3>
								<p className="text-center">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
								<ul className="no-bullet">
									<li><a href="javascript:void(0)">Retina Ready Theme</a></li>
									<li><a href="javascript:void(0)">Retina Ready Theme</a></li>
									<li><a href="javascript:void(0)">Retina Ready Theme</a></li>
								</ul>
							</Col>
                            <Col sm={12} lg={6}>
							<img  src="images/service-img.jpg"/>
                            </Col>
						</Row>
                        </div>
			
        )
    }
}

export default Services