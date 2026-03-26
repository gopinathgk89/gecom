import React from 'react';
import { Carousel, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import testman1 from "./testman1.jpg";
import testman2 from "./testman2.jpg";
import testman3 from "./testman3.jpg";


  

function Rewiews() {
	return(               

         <div style={{width:"100%",height:"310px",background:"white"}}>
		<Container className="my-5">
      <h3 className="text-center " style={{marginTop:"30px",color:"black"}}>What Our Customer Say</h3>

      <Carousel interval={3000} controls={false} indicators={false} pause={false}>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '400px' }} className="shadow border-0">
              <Card.Body className="text-center">
                <img
                  src={testman1}
                  alt="Client 1"
                  className="rounded-circle mb-3"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <Card.Title>John Doe</Card.Title>
                <Card.Text>"Excellent service and support. Highly recommended!"</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '400px' }} className="shadow border-0">
              <Card.Body className="text-center">
                <img
                  src={testman3}
                  alt="Client 2"
                  className="rounded-circle mb-3"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <Card.Title>Priya Sharma</Card.Title>
                <Card.Text>"Great experience working with the team. Very professional."</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '400px' }} className="shadow border-0">
              <Card.Body className="text-center">
                <img
                  src={testman2}
                  alt="Client 3"
                  className="rounded-circle mb-3"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
                <Card.Title>Kumar R.</Card.Title>
                <Card.Text>"Delivered on time and exceeded our expectations!"</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>


</div>





		);
}

export default Rewiews;

