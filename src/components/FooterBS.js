import React from "react";
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { ModalFooter } from "react-bootstrap";


const Footer = () => {
    return( 
        <ModalFooter className='border-top border-2 border-dark text-center text-white'>
            <Container fluid>
                    <a floating className="m-1" href="https://github.com/TerriArcher/TerriArcher"><img
                            style={{ height: "36px", width: "36px"}}
                            src="/icons/github.png"
                            alt="Github Link"/></a>
                    <a floating className="m-1" href="https://www.linkedin.com/in/terriarcher/"><img
                            style={{ height: "36px", width: "36px"}}
                            src="/icons/linkedIn.png"
                            alt="LinkedIn Link"/></a>
                    <a floating className="m-1" href="https://twitter.com/TerriTangela"><img 
                            style={{ height: "36px", width: "36px"}}
                            src="/icons/twitter.png"
                            alt="Twitter Link"/></a>
                </Container>
        </ModalFooter>
    )
}

export default Footer;