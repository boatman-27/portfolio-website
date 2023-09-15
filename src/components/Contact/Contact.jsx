import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
    from_company: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message || !formData.from_company) {
      setNotDone(true);
    } else {
      emailjs
        .sendForm(
          'service_rzdsv4m',
          'template_jzyiade',
          form.current,
          '6IdN8Z5hbWq1-5j6-'
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            setFormData({
              from_name: '',
              from_email: '',
              message: '',
              from_company: '',
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
              value={formData.from_name}
            />
            <input
              type="email"
              name="from_email"
              className="user"
              placeholder="Your Email"
              onChange={handleChange}
              value={formData.from_email}
            />
            <input
              type="company"
              name="from_company"
              className="user"
              placeholder="Organization Name"
              onChange={handleChange}
              value={formData.from_company}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
              value={formData.message}
            />
            <span className="not-done">
              {notDone && 'Please, fill all the input field'}
            </span>
            <Button type="submit" className="button" disabled={done}>
              Send
            </Button>
            <span className="done">
              {done &&
                "Thanks for contacting me and be sure I have received your mail. If you are testing this functionality then I am confirming this thing working perfectly fine. If you have any serious query then I will reply. Also, if you need me, you can contact me on Linkedin."}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
