import React from 'react';
import { Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';

const dummySentences = ['Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'Donec hendrerit tempor tellus.', 'Donec pretium posuere tellus.', 'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'Nulla posuere.', 'Donec vitae dolor.', 'Nullam tristique diam non turpis.', 'Cras placerat accumsan nulla.', 'Nullam rutrum.', 'Nam vestibulum accumsan nisl.'];

class Content extends React.Component {
    render () {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p><Button bsStyle="primary">Learn more</Button></p>
                </Jumbotron>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
                        <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 4).join(' ')}</Col>
                        <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 6).join(' ')}</Col>
                        <Col sm={6} md={3}><code>&lt;{'Col sm={6} md={3}'} /&gt;</code><br/>{dummySentences.slice(0, 2).join(' ')}</Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Content;
