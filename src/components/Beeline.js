import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'


class Beeline extends Component {
    state = {
        tel: '',
        box: false
    }

    handleChange = event => {
        this.setState({ tel: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()

        const user = {
            tel: this.state.tel
        }
        axios.post(`https://testtest.ru/tel`, { user })
        .then(res => {
            console.log(res)
        })
    }
        render() {
            return (
                <Container style={{ width: '500px' }}>
                    { this.state.box ? <img src='https://c7.hotpng.com/preview/574/53/256/t-shirt-wall-decal-sticker-polyvinyl-chloride-loading-thumbnail.jpg'/> : <img src='https://talkdevice.ru/wp-content/uploads/2017/11/Platezh-ne-proshel-iz-za-tehnicheskoj-oshibki.jpg'/> }
                    <h1 className='text-center'>Оплата связи</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId='formBasicTel'>
                            <Form.Label>Номер телефона</Form.Label>
                            <Form.Control placeholder="8 (___) ___ __ __" type='tel' onChange={this.handleChange} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Введите сумму</Form.Label>
                            <Form.Control as='input' rows='1' type="number" placeholder='Введите сумму от 1 до 1000' min='1' max='1000' required />
                        </Form.Group>
                        <Button variant='dark' type='submit'>Оплатить</Button>
                    </Form>
                </Container>
            )
        }
    }

    export default Beeline