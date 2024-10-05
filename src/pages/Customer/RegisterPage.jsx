import logo from "../../assets/logo.png"

import { Container, Row, Col, Form} from "react-bootstrap"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    return (
        <>
            <div id="register">
                <Container className="d-flex justify-content-center">
                    <Row>
                        <Col>
                            <div className="wrapper">
                                <div className="top text-center">
                                    <img src={logo} alt="" className="mt-5 mb-5" />
                                    <h1>Daftar Akun</h1>
                                    <p>Buat akun untuk eksplorasi ruangan.</p>
                                </div>

                                <form action="/login">
                                    <Form.Label>Nama Lengkap</Form.Label>
                                    <Form.Control type="text" name="nama-lengkap" placeholder="Masukkan Nama Lengkap" required/>
                                    <Form.Label>Nomor Telepon</Form.Label>
                                    <Form.Control type="text" name="telepon" placeholder="Masukkan Email" required/>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Masukkan Email" required/>
                                    <Form.Label>Buat Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Masukkan Password" required/>

                                    <button className="btn btn-teal w-100 mt-5" type="submit">Buat Akun</button>
                                </form>

                                <p className="mt-5 text-center">Sudah punya akun? <Link to="/login">Masuk</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default RegisterPage