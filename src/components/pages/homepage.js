import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const styling={
    updates:{
        marginTop:'20px'
        
    },
    header:{
        borderTopLeftRadius: '25%',
        borderTopRightRadius: '25%',
        backgroundColor: '#D8BFD8'
    }
}

function displayHomePage (){
    return(
        <Container>
        <Row>
            <Col med='12' lg='6' style={styling.updates}>
                <CardHeader className='text-center' style={styling.header}><h1>Our updates</h1></CardHeader>
                <Card>
                    <CardTitle className='text-center'>17-23 February 2020</CardTitle>
                    <CardBody>Last week was a wonderful week for BCSF...with several of our dishes flying out of the window and selling out.  With everyone celebrating Valentine’s Day, love was definitely in the air.  We even had a member of our staff get engaged!!!  Big Congrats Luke and Tyanna!!!
                    Speaking of love, we continue to be extremely grateful to all of you for all of your love and support.  Always know that BCSF loves you back.
                    The "Purple Bull" has been longing for some beautiful warm weather and cook outs.  So, he came up with a awesome idea.  He's going to treat us to a menu this week that's going to have a whole mess of burgers on it...and when we say burgers, we do mean burgers of all kinds.  This week we're all being treated to our very 3rd annual "Burger Week" themed menu. Enjoy.
                    </CardBody>
                </Card>
            </Col> 
        </Row>
        </Container>
    )
}

export default displayHomePage