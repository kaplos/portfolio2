export default function AboutMe() {
    return (
        <section
            className="min-h-screen flex items-center px-6 py-10"
            id="about"
        >
            <div className="max-w-4xl">
                <div className="mb-12">
                    <div className="inline-block">
                        <h2 className="text-5xl md:text-6xl font-bold text-grey-100 tracking-tight">
                            About
                        </h2>
                        <div className="h-1 w-20 bg-grey-600 rounded-full"></div>
                    </div>
                </div>

                <div className="">
                    <div className="relative   border-grey-700">
                        <p className="text-grey-400 text-lg md:text-xl leading-relaxed">
                            Candm builds modern digital products that help
                            businesses operate smarter and scale faster. Our
                            solutions include web applications, mobile
                            platforms, CRMs, business dashboards, e-commerce
                            systems, and real-time operational tools. Using
                            technologies like React, Node.js, and modern API
                            architectures, we focus on delivering scalable,
                            intuitive, and performance-driven software tailored
                            to each client’s needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
