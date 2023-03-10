import React from "react";
import { useNavigate,} from "react-router-dom";
import '../App.css'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


const Header = () => {
    const navigate = useNavigate();
    function newWindow() {
        window.open('http://www.rebeccaguay.com/', '_blank', 'noreferrer')
    }

    return (
        <div className="header-wrapper">
            <header>
                <h1>This is <br></br>Rebecca Guay</h1>
                <nav>
                    <ButtonGroup className="mt-4">
                        <Button variant="primary" onClick={() => navigate('/')}>Home</Button>
                        <Button variant="primary" onClick={() => navigate('/cards')}>Cards</Button>
                        <OverlayTrigger
                            key={"bottom"}
                            placement={"bottom"}
                            overlay={
                                <Tooltip id={`tooltip-bottom`}>
                                    This will open a new tab!
                                </Tooltip>
                            }
                        ><Button variant="primary" onClick={() => newWindow()}>Rebecca Social</Button>
                        </OverlayTrigger>
                    </ButtonGroup>

                </nav>
            </header>
        </div>

    )
}


export default Header;