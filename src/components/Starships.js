import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

function Starships() {
    const [data, setData] = useState([]);
    const [maxFilms, setMaxFilms] = useState(0)
    useEffect(() => {

        const getStarShipData = async () => {
            try {
                const response = await fetch("https://swapi.dev/api/starships");
                const json = await response.json();
                let maxNum = 0;
                let newStarShipData = [];
                json.results.map((item) => {
                    if (item.crew <= 10) {
                        newStarShipData.push(item);
                    }

                    if (maxNum < item.films.length) {
                        maxNum = item.films.length
                    };
                })
                newStarShipData.sort((a, b) => a.crew - b.crew);
                setData(newStarShipData);
                setMaxFilms(maxNum)
            } catch (error) {
                console.log("error", error);
            }
        }
        getStarShipData();
    }, []);

    return (
        <div className='star-ships-content mt-4'>
            <Container>
                <Row>
                    {data.map((item) =>
                        <Col sm="12" md="6" lg="4" xl="4" xxl="4" className='ship-item mb-4'>
                            <Card>
                                <Card.Img variant="top" src="./Cruise-ships-1.png" />
                                <Card.Body>
                                    <Card.Title><h5>{item.name}</h5></Card.Title>
                                    <Card.Text><b>Model:</b> {item.model}</Card.Text>
                                    <Card.Text><b>Manufacturer:</b> {item.manufacturer}</Card.Text>
                                    <Card.Text><b>Number of films:</b> {maxFilms <= item.films.length ? <span className='film-icon'><img src="./film-icon.png" /></span> : ""}  {item.films.length}</Card.Text>
                                    <Card.Text><b>Crew:</b>{item.crew}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default Starships
