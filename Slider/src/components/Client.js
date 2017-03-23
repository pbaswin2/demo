import React, { Component } from 'react'
import {Row,Col,Grid} from 'react-bootstrap'

class Client extends Component {
    render () {
        return (
            <Grid>
            <div className="client">
						<h2 className="text-center">What client says</h2>
						<p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<Row>
							<Col  sm={12} lg={4} className="text-center">
								<img src="images/test-img1.png"/>
								<h4>Lorem Ipsum</h4>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</Col>
							<Col sm={12} lg={4} className="text-center">
								<img src="images/test-img2.png"/>
								<h4>Lorem Ipsum</h4>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</Col>
							<Col sm={12} lg={4} className="text-center">
								<img src="images/test-img3.png"/>
								<h4>Lorem Ipsum</h4>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
							</Col>
						</Row>
					</div>
                    </Grid>
        )
    }
}

export default Client