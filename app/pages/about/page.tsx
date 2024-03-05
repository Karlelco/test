
import Link from "next/link"


function  Component () {
    return (
        <main>
            <section className="w-full py-6 md:py-12 lg:py-16">
                <div className="container grid gap-6 px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Acme Corporation</h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                We're on a mission to redefine the future of transportation with sustainable and innovative solutions that
                                put people and the planet first.
                            </p>
                        </div>
                        <Link
                            className="inline-flex h-10 items-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-950 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            href="#"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
            <section className="w-full py-6 md:py-12">
                <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:flex-row md:space-y-0 md:gap-6 md:px-6">
                    <div className="grid gap-4 text-center md:mr-4 md:text-left md:order-last">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">About Us</div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Modernizing the Web</h2>
                        <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            We believe in the power of the web to connect people and provide rich, immersive experiences. Our platform
                            empowers developers to build the next generation of web applications with speed, scale, and security.
                        </p>
                    </div>
                    <img
                        alt="Photo"
                        className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                        height="281"
                        src="/placeholder.svg"
                        width="500"
                    />
                </div>
            </section>
            <section className="w-full py-6 md:py-12">
                <div className="container flex flex-col items-center gap-4 px-4 md:px-6 xl:gap-10 xl:flex-row">
                    <img
                        alt="Image"
                        className="rounded-full"
                        height="150"
                        src="/placeholder.svg"
                        style={ {
                            aspectRatio: "150/150",
                            objectFit: "cover",
                        } }
                        width="150"
                    />
                    <div className="grid max-w-3xl gap-4 text-center md:text-left">
                        <p className="text-sm font-medium tracking-wide uppercase text-gray-500 dark:text-gray-400">About Us</p>
                        <div className="prose lg:prose-lg xl:prose-xl">
                            <p>
                                Founded in 2015, our mission is to provide access to the world's information in one click. We believe in
                                the power of simplicity and the importance of enabling connection. Our team is dedicated to creating tools
                                that inspire and support the global community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
       </main>
    )
}

export default Component

