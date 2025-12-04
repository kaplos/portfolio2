'use client'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
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

    const sendEmail = (e) => {
        e.preventDefault()
        setIsLoading(true)

        emailjs
            .sendForm('service_brlg41u', 'template_4zrm42b', form.current, {
                publicKey: 'uIRUa3CPPqSJ7XDZB',
            })
            .then(
                () => {
                    setStatus('success')
                    form.current.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text)
                    setStatus('error')
                }
            )
            .finally(() => {
                setIsLoading(false)
                setTimeout(() => setStatus(''), 3000)
            })
    }

    return (
        <div
            className="flex items-center min-h-[90vh] w-full py-12 px-4"
            id="contact"
        >
            <div className="w-full max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="inline-block">
                        <h2 className="text-5xl md:text-6xl font-bold text-grey-100 tracking-tight">
                            Get In Touch
                        </h2>
                        <div className="h-1 w-20 bg-grey-600 rounded-full"></div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Card className="relative w-full max-w-[420px] bg-primary-900/60 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] rounded-3xl overflow-visible border border-grey-700/30">
                        <ShineBorder
                            borderWidth={2}
                            duration={20}
                            shineColor={'rgb(255, 255, 255)'}
                        />
                        <CardHeader className="relative z-10 pb-6 pt-8">
                           
                            <h2 className="text-3xl md:text-4xl font-light text-grey-100 tracking-tight leading-tight">
                                Let's create
                                <span className="block mt-1 text-grey-300 italic font-normal">
                                    something remarkable
                                </span>
                            </h2>
                        </CardHeader>
                        <CardContent className="relative z-10">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="name"
                                            className="text-grey-200 font-light text-xs tracking-[0.1em] uppercase"
                                        >
                                            Name
                                        </Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            className="bg-primary-800/30 border-grey-700/30 text-white placeholder:text-grey-500/50 focus:border-grey-500 focus:ring-grey-500/20 h-12 text-sm font-light rounded-xl transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="email"
                                            className="text-grey-200 font-light text-xs tracking-[0.1em] uppercase"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your.email@example.com"
                                            className="bg-grey-800/40 border-grey-700/40 text-white placeholder:text-grey-500/50 focus:border-grey-500 focus:ring-grey-500/20 h-12 text-sm font-light rounded-xl transition-all"
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            htmlFor="message"
                                            className="text-grey-200 font-light text-xs tracking-[0.1em] uppercase"
                                        >
                                            Message
                                        </Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Share your ideas..."
                                            className="bg-grey-800/40 border-grey-700/40 text-white placeholder:text-grey-500/50 focus:border-grey-500 focus:ring-grey-500/20 min-h-[100px] text-sm font-light rounded-xl transition-all resize-none"
                                            required
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full mt-1 bg-grey-700 hover:bg-grey-600 text-white font-light tracking-[0.05em] h-12 text-sm rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? 'Sending...' : 'Send Message'}
                                    </Button>
                                    {status === 'success' && (
                                        <p className="text-sm font-bold text-green-400 text-center animate-fade-in">
                                            ✓ Message sent successfully!
                                        </p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-sm font-bold text-primary-400 text-center animate-fade-in">
                                            ✗ Failed to send. Please try again.
                                        </p>
                                    )}
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
