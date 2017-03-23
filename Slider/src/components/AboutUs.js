import React, { Component } from 'react'
import {Row,Grid,Col} from "react-bootstrap"

class AboutUs extends Component {
    render () {
        return (
          
              <div>
						<h2 className="text-center">About us</h2>
						<p className="text-center">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						</p>
						<Row>
							<Col sm={12} lg={6}>
                            <img src="images/about-img.jpg"/>
                            </Col>
							<Col sm={12} lg={6} className="text-center">
								<h3>We're The Best</h3>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                      when an unknown printer took a galley of type and scrambled it to make a
                                       type specimen book. It has survived not only five centuries, but also the
                                        leap into electronic typesetting, remaining essentially unchanged.
								</p>
								<p>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
								</p>
							</Col>
						</Row>
					</div>
           
        )
    }
}

export default AboutUs