import React, { Component } from 'react'
import {Row,Col} from "react-bootstrap"

class Gallery extends Component {
    render () {
        return (
            <div>
						<h2 className="text-center">Our Gallery</h2>
						<p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
						<Row>
						
								<Col sm={12} lg={3}><img className="thumbnail" src="images/gallery-img1.jpg"/></Col>
								<Col sm={12} lg={3}><img className="thumbnail" src="images/gallery-img2.jpg"/></Col>
								<Col sm={12} lg={3}><img className="thumbnail" src="images/gallery-img3.jpg"/></Col>
								<Col sm={12} lg={3}><img className="thumbnail" src="images/gallery-img4.jpg"/></Col>
								<Col sm={12} lg={3}><img className="thumbnail" src="images/gallery-img5.jpg"/></Col>
								<Col sm={12} lg={3}><img className="thumbnail" src="images/gallery-img6.jpg"/></Col>
								<Col sm={12} lg={3}><img className="thumbnail" src="images/gallery-img7.jpg"/></Col>
								<Col sm={12} lg={3}><img className="thumbnail" src="images/gallery-img8.jpg"/></Col>
							
						</Row>
					</div>
        )
    }
}

export default Gallery