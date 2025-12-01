'use client'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { ShineBorder } from '@/components/ui/shine-border'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { BorderBeam } from '@/components/ui/border-beam'

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
        <div className='flex justify-center items-center min-h-[90vh] py-12' id='contact'>
            <Card className="relative w-full max-w-[350px] overflow-hidden border-none bg-neutral-950/80 shadow-lg">
                <ShineBorder borderWidth={2} shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
                <CardHeader className="text-neutral-300">Let's Connect</CardHeader>
                <CardContent>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="Name" className="text-neutral-300">Name</Label>
                                <Input
                                    id="Name"
                                    name="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="bg-white"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="text-neutral-300">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="bg-white"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message" className="text-neutral-300">Message</Label>
                                <Textarea 
                                    id="message" 
                                    name="message" 
                                    className="bg-white"
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-neutral-300"
                            >
                                Lets Build Something Together
                            </Button>
                        </div>
                    </form>
                </CardContent>

            </Card>
        </div>
    )
}

export default ContactForm
