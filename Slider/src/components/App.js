import React, { Component } from 'react'
import Slider from "./Slider"
import AboutUS from "./AboutUs"
import Services from "./Services"
import Events from "./Events"
import Gallery from "./Gallery"
import Client from "./Client"
import ContactUs from "./ContactUs"
import {Grid} from "react-bootstrap"
class App extends Component {
    render () {
        return (
            <div>
                <Slider/>
                <Grid>
                <AboutUS/>
                <Services/>
                <Events/>
                <Gallery/>
                <Client/>
                <ContactUs/>
                </Grid>
            </div>
        )
    }
}

export default App



