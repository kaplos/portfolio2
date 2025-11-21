'use client'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { ShineBorder } from '@/components/ui/shine-border'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
const ContactForm = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_brlg41u', 'template_4zrm42b', form.current, {
                publicKey: 'uIRUa3CPPqSJ7XDZB',
            })
            .then(
                () => {
                    console.log('SUCCESS!')
                    form.current.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text)
                }
            )
    }

    return (
          <div className='flex justify-center items-center p-8' id='contact'>
            <Card className="relative w-full max-w-[350px] overflow-hidden bg-gray-500 ">
                <ShineBorder borderWidth={2} shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
                <CardHeader className="text-white">Let's Connect</CardHeader>
                <CardContent>
                    <form  ref={form}
                    onSubmit={sendEmail}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="Name" className="text-white">Name</Label>
                                <Input
                                    id="Name"
                                    type="Name"
                                    placeholder="John Doe"
                                    className="bg-white"
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-white">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                  placeholder="name@example.com"
                                    className="bg-white"
                              />
                          </div>
                          <div className="grid gap-2 ">
                              <Label htmlFor="message" className="text-white">Message</Label>
                              <Textarea id="message" type="message" className="bg-white" />
                          </div>
                      </div>
                  </form>
              </CardContent>
              <CardFooter>
                  <Button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white"
                  >
                      Lets Build Something Together
                  </Button>
              </CardFooter>
                    </Card>
          </div>
    );
  
return (  
<div
  className="  min-h-[90vh] flex flex-col justify-center items-center"
  id="contact"
>
  <h1 className="flex text-2xl font-bold justify-center mb-4 text-white">
      Lets connect:
  </h1>
  <div className="h-auto rounded-lg shadow-lg flex  w-full max-w-sm justify-center">
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1>*/}
      <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-500 rounded-lg p-4"
      >
          <div className="mb-4">
              <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
              >
                  Name
              </label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="John Doe"
                  required
              />
          </div>
          <div className="mb-4">
              <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
              >
                  Email
              </label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="johndoe@example.com"
                  required
              />
          </div>
          <div className="mb-4">
              <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
              >
                  Message
              </label>
              <textarea
                  id="message"
                  name="message"
                  className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your message"
                  required
              ></textarea>
          </div>
          {/* <button type="submit" className="bg-blue-500 text-black p-2 rounded-lg font-semibold w-full hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">Lets Build Something Together</button> */}
          <button
              type="submit"
              className="bg-indigo-600 text-white p-2 rounded-lg font-semibold w-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
              Lets Build Something Together
          </button>
      </form>
  </div>
</div>

);
}
export default ContactForm
