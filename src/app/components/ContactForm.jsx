'use client'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ShineBorder } from '@/components/ui/shine-border'
import emailjs from '@emailjs/browser'
import { Textarea } from '@/components/ui/textarea'

const ContactForm = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        console.log('submitted form ')
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
        <div
            className="  min-h-[90vh] flex flex-col justify-center items-center"
            id="contact"
        >
            {/* <h1 className="flex text-2xl font-bold justify-center mb-4 text-white"></h1> */}
            <div className="h-auto rounded-lg shadow-lg flex  w-full max-w-sm justify-center">
                {/* <h1 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h1>*/}
                <Card className="relative w-full max-w-[350px] overflow-hidden bg-gray-500">
                    <ShineBorder
                        shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
                    />
                    <CardHeader>
                        <CardTitle className="text-white">
                            Lets Connect
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form id="contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-white"
                                    >
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="John Smith"
                                        className="border-none bg-white focus-none"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-white"
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="johnsmith@example.com"
                                        className="border-none bg-white focus-none"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label
                                        htmlFor="message"
                                        className="text-white  "
                                    >
                                        Message
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message"
                                        className="border-none bg-white focus-none"
                                    />
                                </div>
                        <Button
                            onClick={() => console.log('clicked') }
                            type="submit"
                            id="contact-form"
                            className="w-full bg-indigo-600 pt-2"
                        >
                            Lets Build Something Together
                        </Button>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
export default ContactForm
