import React from 'react'
import './Footer.scss'
import { Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <footer className='footer'>
                <Container>
                    <Row>
                        &copy; Copyright 2023 StarWars
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer
