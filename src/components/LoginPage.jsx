import React, { useState,useEffect } from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        if (storedEmail) {
            setEmail(storedEmail);
        }
        if (storedPassword) {
            setPassword(storedPassword);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        setEmail("")
        setPassword("")
        console.log('Passed');
    };


    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Row>
                <Col md={12}>
                    <div className="login-card" style={{ maxWidth: '500px', width: '100vw', padding: '40px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '15px', backgroundColor: '#fff' }}>
                        <h3 style={{ textAlign: 'center', marginBottom: '30px' }}>Login to your account</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail" style={{ marginBottom: '20px' }}>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Email" 
                                    style={{ borderRadius: '50px', padding: '15px' }} 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" style={{ position: 'relative', marginBottom: '30px' }}>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Enter your password" 
                                    style={{ borderRadius: '50px', padding: '15px' }} 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="danger" type="submit" style={{ width: '100%', borderRadius: '50px', padding: '15px', backgroundColor: '#ff416c', border: 'none' }}>
                                Continue
                            </Button>
                        </Form>
                        <div style={{ textAlign: 'center', margin: '30px 0', fontWeight: 'bold', color: '#888' }}>OR</div>
                        <Button variant="outline-primary" style={{ width: '100%', marginBottom: '10px', borderRadius: '50px', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaGoogle style={{ marginRight: '10px' }} /> Continue with Google
                        </Button>
                        <Button variant="outline-primary" style={{ width: '100%', borderRadius: '50px', padding: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FaFacebook style={{ marginRight: '10px' }} /> Continue with Facebook
                        </Button>
                        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#888' }}>
                            <Link to="/signup"  style={{ color: '#ff416c' }}>Can't login?</Link> · <Link to="/signupnew" style={{ color: '#ff416c' }}>Sign up for new user?</Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
