import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'


function NoMatch(){
    return(
        <Container>
            <Card>
                <CardHeader><strong>404</strong></CardHeader>
                <CardBody>Oops.... We couldn't find this page. Check the URL to make sure it is correct. If it is, contact Bull City Street Foods, so they can work on a fix.</CardBody>
            </Card>
        </Container>
    )
}

export default NoMatch