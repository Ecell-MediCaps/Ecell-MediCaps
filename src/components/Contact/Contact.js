import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


const Result = () => {
    return (
        <p>Your message has been successfully sent</p>
    )
}

const Contact = (props) => {

    const form = useRef();

    const [result, showResult] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qiwfxnn', 'template_rzn4g5b', form.current, 'o1X2kUhAf9iqvBdHb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset();
        showResult(true);

    };

    setTimeout(() => {
        showResult(false)
    },5000);

  return (
            <form className='form' action="" ref={form} onSubmit={sendEmail}>
              <div className="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input className="input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input className="input100" type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input className="input100" type="text" name="email" required />
                <br />
              </div>
              <div className="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div className="row">
                    {result ? <Result /> : null}
                </div>
              </div>
            </form>
  )
}

export default Contact
