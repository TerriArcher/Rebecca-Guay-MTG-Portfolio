import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterBS from "./FooterBS";

const HomeBS = () => {
    return (
        <>
            <Container fluid className="my-5">
                <h2 className="home-header">The Rebecca Guay MTG Collection</h2>
                <Image
                    src='/RebeccaBanner.png'
                    className="rounded-pill border border-dark border-1 shadow-lg "
                    style={{
                        width: "75vw",
                        height: "8rem",
                        objectFit: 'cover',
                        objectPosition: "50% 30%",
                        opacity: '0.8'
                    }} />
            </Container>
            <Container fluid='md'>
                <Row>
                    <Col sm={6} md={6}>
                        <Card className="bg-dark text-white home-header my-5 ">
                            <Card.Img src="/piper.jpg" alt="Elvish Piper Image"
                                style={{
                                    opacity: '0.5',
                                    objectFit: "cover",
                                    height: "25vw",
                                    width: "100%"
                                }} />
                            <Card.Text>
                                {"Experience the artwork"}
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col sm={6} md={6}>
                        <Card className="bg-dark text-white home-header my-5 ">
                            <Card.Img src="/enchantress.jpg" alt="Elvish Enchantress Image"
                                style={{
                                    opacity: '0.5',
                                    objectFit: 'cover',
                                    height: "25vw",
                                    width: "100%"
                                }} />
                            <Card.Text>
                                {"of Magic's most iconic"}
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <FooterBS />
        </>
    );
}

export default HomeBS