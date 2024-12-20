import {useRef} from 'react'
import emailjs from '@emailjs/browser';

const ContactForm = ()=>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_brlg41u', 'template_4zrm42b', form.current, {
            publicKey: 'uIRUa3CPPqSJ7XDZB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

    return (
            <div className="  h-32  items-center  justify-center">
                <h6 className='flex'> Lets Connect: </h6>
                <div className="h-auto rounded-lg shadow-lg flex  w-full max-w-sm justify-center">
                    {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1> */}
                    <form ref={form} onSubmit={sendEmail} className='bg-gray-500 rounded-lg p-4'>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="John Doe" required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="johndoe@example.com" required/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit" className="bg-indigo-500 text-white p-2 rounded-lg font-semibold w-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">Lets Build Something Together</button>
                    </form>
                </div>
            </div>
    );

}
export default ContactForm;