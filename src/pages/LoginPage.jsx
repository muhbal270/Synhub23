import logo from "../assets/logo.png"

import { Container, Row, Col, Form} from "react-bootstrap"
import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <>
            <div id="login">
                <Container className="d-flex justify-content-center">
                    <Row>
                        <Col>
                            <div className="wrapper">
                                <div className="top text-center">
                                    <img src={logo} alt="" className="mt-5 mb-5" />
                                    <h1>Login</h1>
                                    <p>Masuk untuk mulai reservasi ruangan.</p>
                                </div>

                                <form action="/home">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Masukkan Email" required/>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Masukkan Password" required/>
                                    <Link className="d-flex justify-content-end mt-2">Lupa Password?</Link>

                                    <button className="btn btn-teal w-100 mt-5" type="submit">Masuk</button>
                                </form>

                                <p className="mt-5 text-center">Belum punya akun? <Link to="/register">Daftar</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default LoginPage