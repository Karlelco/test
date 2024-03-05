import React from "react"
import Link from "next/link"
import {Input} from "@/components/ui/input"

export default function Component() {
    return (
        <footer className="w-full text-white p-8 lg:px-24   bg-gray-950 py-6 md:py-12">
            <div className="flex flex-row  md:flex-col  pb-10 justify-between">
                <div>
                    <p>
                        VENITY MALL
                    </p>
                    <p>
                        venitymall.org
                    </p>
                </div>
                <form action="">
                    <p className="font-mono">
                        Know us more know
                    </p>
                    <label htmlFor="message">
                        <Input className="w-1/2" type="email" name="" id="" />
                    </label>
                    
                </form>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
               
                <div>
                    
                    <h2 className="font-bold text-xl">
                        About us
                    </h2>
                    <p>
                        Venity Mall is a digital mall that connects buyers and sellers in a single platform.
                    </p>

                </div>
                <div>
                    
                    <h2 className="font-bold text-xl">
                        Contact us
                    </h2>
                    <p>
                        <ContactIcon className="w-6 h-6 mr-2 inline" />
                        0800 000 000
                    </p>
                    <p>
                        <MailIcon className="w-6 h-6 
                        mr-2 inline" />
                    </p>
                    <p>
                        <PhoneIcon className="w-6 h-6 mr-2 inline" />
                        0800 000 000
                    </p>


                </div>
                <div>
                   
                    <h2 className="font-bold text-xl">
                        Follow us
                    </h2>
                    <div className="flex space-x-4">
                        <FacebookIcon className="w-6 h-6" />
                        <InstagramIcon className="w-6 h-6" />
                        <TwitterIcon className="w-6 h-6" />
                        <LinkedinIcon className="w-6 h-6" />
                    </div>
                </div>
            </div>

        </footer>
    )
}

function ContactIcon(props: any) {
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
            <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <circle cx="12" cy="10" r="2" />
            <line x1="8" x2="8" y1="2" y2="4" />
            <line x1="16" x2="16" y1="2" y2="4" />
        </svg>
    )
}


function FacebookIcon(props: any) {
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
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


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


function InfoIcon(props: any) {
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
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
        </svg>
    )
}


function InstagramIcon(props: any) {
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
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function LinkedinIcon(props: any) {
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function MailIcon(props: any) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}


function PhoneIcon(props: any) {
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}


function ServerIcon(props: any) {
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
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
    )
}


function TwitterIcon(props: any) {
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
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}
