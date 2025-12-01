'use client'
import { useRef, useState } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { ShineBorder } from '@/components/ui/shine-border'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const ContactForm = () => {
    const form = useRef()
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState('')

    const sendEmail = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus('')

        const formData = new FormData(form.current)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        }

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setStatus('Message sent successfully!')
                form.current.reset()
            } else {
                setStatus('Failed to send message. Please try again.')
            }
        } catch (error) {
            console.error('Error:', error)
            setStatus('An error occurred. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[90vh] py-12' id='contact'>
            <Card className="relative w-full max-w-[350px] bg-neutral-950/80 shadow-lg rounded-lg overflow-visible">
                <ShineBorder 
                    borderWidth={2} 
                    duration={14}
                    shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} 
                />
                <CardHeader className="text-neutral-300 relative z-10">
                    <h2 className="text-2xl font-bold">Let's Connect</h2>
                </CardHeader>
                <CardContent className="relative z-10">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name" className="text-neutral-300">Name</Label>
                                <Input
                                    id="name"
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
                                disabled={isLoading}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                            >
                                {isLoading ? 'Sending...' : "Let's Build Something Together"}
                            </Button>
                            {status && (
                                <p className={`text-sm ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                                    {status}
                                </p>
                            )}
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default ContactForm
