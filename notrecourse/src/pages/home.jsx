
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "../style/Home.scss";

export function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="hero-section text-center text-light d-flex align-items-center position-relative" style={
                {
                    height: "100vh",
                }
            }
            >
                <div
                    className="home-image position-absolute w-100 h-100"
                    style={
                        {
                            backgroundImage: 'url("https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100vh",
                        }
                    }
                ></div>
                <Container className="position-relative z-index-1">
                    <h1 className="display-4 fw-bold">Track Your Training, the Old-Fashioned Way</h1>
                    <p className="lead">
                        NotreCourse brings the convenience of a modern workout app to the charm of paper running logs. No infinite scroll, no algorithm, just running. Be unashamedly yourself, running for you, not to impress your followers. Coming Spring 2025.
                    </p>
                    <Button variant="primary" size="lg" className="mt-3">
                        Join us!
                    </Button>
                </Container>
            </div >

            {/* Features Section */}
            < Container className="py-5" >
                <h2 className="text-center mb-5">Why Choose NotreCourse?</h2>
                <Row className="g-4">
                    <Col md={4}>
                        <Card className="h-100 text-center">
                            <Card.Body>
                                <Card.Title>Track Your Progress</Card.Title>
                                <Card.Text>
                                    Log your workouts in a digital logbook.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 text-center">
                            <Card.Body>
                                <Card.Title>Share with Friends</Card.Title>
                                <Card.Text>
                                    Share your logbooks when you want, where you want. Or don't.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 text-center">
                            <Card.Body>
                                <Card.Title>Set Goals</Card.Title>
                                <Card.Text>
                                    Plan your upcoming workouts and races right in the app.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >

            {/* Testimonials Section */}
            <div className="container my-5 py-5 bg-light">
                <h2 className="mb-4">Why We Created This App</h2>
                <div className="row align-items-center">
                    {/* Left Column: Image */}
                    <div className="col-md-5 text-center">
                        <img
                            src="https://1drv.ms/i/s!AnIk1jLA4bu3hfonzzi5kM1FA_w3yQ?embed=1&width=1150&height=1150"
                            alt="Why we created this app"
                            className="img-fluid rounded"
                        />
                    </div>

                    {/* Right Column: Text */}
                    <div className="col-md-7 text-center">
                        <p className="lead">
                            As an avid D3 runner at a college no one's ever heard of, I developed an unhealthy relationship with running as a result of online running platforms.
                        </p>
                        <p>
                            The best decision I ever made was to stop using them and start using paper logs.
                        </p>
                        <p>
                            After I quit, the thing I missed the most was the simplicity of uploading my runs whenever or wherever I was. So, I started NotreCourse, an platform with the convenience of online running apps, the simplicity of paper logs and none of the unhealthy feedback loops.
                        </p>
                        <p className="text-center fw-light">
                            - Cooper Parlee, Founder of NotreCourse
                        </p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-primary text-light text-center py-5" >
                <Container>
                    <h2 className="mb-4">Ready to Get Started?</h2>
                    <p className="fw-light fs-5">When NotreCourse launches in the spring of 2025, we'll need dedicated runners to help test our platform. Interested? Sign up below.</p>
                    <Button variant="light" size="lg">
                        Sign Up
                    </Button>
                </Container>
            </div >
        </>
    );
}