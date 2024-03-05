'use client'
import React from "react"
import { CardContent, Card } from "@/components/ui/card"
import Products from "@/app/product/products"
import { CheckIcon } from '@heroicons/react/20/solid'
import View from "@/app/product/fake"

const includedFeatures = [
    'Private forum access',
    'Member resources',
    'Entry to annual conference',
    'Official member t-shirt',
]



const Component = () => {
 
    return (
        
        <main className="flex-1 bg-foreground dark:bg-background">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-2 text-center">
                            <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">  Venity Mall <br /> The Future Marketplace</h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Discover unique products from independent sellers around the world.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto max-w-5xl grid gap-4 items-start min-[400px]:grid-cols-2 sm:gap-6 lg:gap-12">
                       
                    </div>
                    <Products/>
              <View/>
                    
                    <div className="bg-white py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl sm:text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
                                    in. Explicabo id ut laborum.
                                </p>
                            </div>
                            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                                <div className="p-8 sm:p-10 lg:flex-auto">
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                                    <p className="mt-6 text-base leading-7 text-gray-600">
                                        Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                                        repellendus etur quidem assumenda.
                                    </p>
                                    <div className="mt-10 flex items-center gap-x-4">
                                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                                        <div className="h-px flex-auto bg-gray-100" />
                                    </div>
                                    <ul
                                        role="list"
                                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                                    >
                                        { includedFeatures.map((feature) => (
                                            <li key={ feature } className="flex gap-x-3">
                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                                { feature }
                                            </li>
                                        )) }
                                    </ul>
                                </div>
                                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                        <div className="mx-auto max-w-xs px-8">
                                            <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                                <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                            </p>
                                            <a
                                                href="#"
                                                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Get access
                                            </a>
                                            <p className="mt-6 text-xs leading-5 text-gray-600">
                                                Invoices and receipts available for easy company reimbursement
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                        <div className="mx-auto max-w-2xl lg:max-w-4xl">
                            <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                            <figure className="mt-10">
                                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                                    <p>
                                        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                                        molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                                    </p>
                                </blockquote>
                                <figcaption className="mt-10">
                                    <img
                                        className="mx-auto h-10 w-10 rounded-full"
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                        <div className="font-semibold text-gray-900">Julius .M</div>
                                        <svg viewBox="0 0 2 2" width={ 3 } height={ 3 } aria-hidden="true" className="fill-gray-900">
                                            <circle cx={ 1 } cy={ 1 } r={ 1 } />
                                        </svg>
                                        <div className="text-gray-600">CEO of Venity Group</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>

                    
                    </div>
                </section>
            </main>
            
    )
}

export default Component

function HomeIcon(props: any) {
    return (
        <svg
            { ...props }
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function LogOutIcon(props: any) {
    return (
        <svg
            { ...props }
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" x2="9" y1="12" y2="12" />
        </svg>
    )
}


function MountainIcon(props: any) {
    return (
        <svg
            { ...props }
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function SettingsIcon(props: any) {
    return (
        <svg
            { ...props }
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function UserIcon(props: any) {
    return (
        <svg
            { ...props }
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
