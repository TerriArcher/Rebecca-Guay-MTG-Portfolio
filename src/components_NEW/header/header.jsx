import React from "react";
import { useNavigate } from "react-router-dom"
import "./header.css"
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
    const navigate = useNavigate();
    function newWindow() {
        window.open('http://www.rebeccaguay.com/', '_blank', 'noreferrer')
    }
    return (
        <div className="header-wrapper">
            <header>
                <h1>This is<br></br>Rebecca Guay</h1>
            </header>
            <nav>
                    <ButtonGroup className="mt-5">
                        <Button variant="secondary" onClick={() => navigate('/')}>Home</Button>
                        <Button variant="secondary" onClick={() => navigate('/cards')}>Cards</Button>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={"bottom"}
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    This will open a new tab!
                                </Tooltip>
                            }
                        ><Button variant="secondary" onClick={() => newWindow()}>Rebecca Social</Button>
                        </OverlayTrigger>
                    </ButtonGroup>
                </nav>
        </div>
    )
}