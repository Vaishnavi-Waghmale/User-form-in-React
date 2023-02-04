import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const UserForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_icn10tc', 'template_udbggzg', form.current, 'uBA5pCV-Pys0gtZxj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <section>
            <div className='container'>
                <h2 className='--text-center' name='subject'>User Form</h2>
                <form ref={form} onSubmit={sendEmail} className='--form-control --card --flex-center --dir-column'>
                    <input type="text" placeholder="Full Name" name="user_name" required />
                    <label for="user_dob">Date of birth:</label>
                    <input type="date" id='user_dob' name="user_dob" required />
                    <input type="text" placeholder="Email" name="user_email" required />
                    <input type="text" placeholder="Phone Number" name="user_phone_no" required />
                    <button type="submit" className='--btn --btn-primary'>Send Message</button>
                </form>
            </div>
        </section>

    )
}

export default UserForm