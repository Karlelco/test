import React from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]


const Component =() => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex items-center h-14 gap-4 border-b lg:h-[60px] bg-gray-100/40 px-6 dark:bg-gray-800/40">
                <Link className="lg:hidden" href="#">
                    <Package2Icon className="h-6 w-6" />
                    <span className="sr-only">Home</span>
                </Link>
                <nav className="hidden gap-4 lg:flex flex-1 text-sm font-medium">
                    <Link className="text-gray-900  dark:text-gray-50" href="#">
                        Home
                    </Link>
                    <Link className="text-gray-500  dark:text-gray-400" href="#">
                        Shop
                    </Link>
                    <Link className="text-gray-500  dark:text-gray-400" href="#">
                        Vendors
                    </Link>
                    <Link className="text-gray-500  dark:text-gray-400" href="#">
                        Contact
                    </Link>
                </nav>
                <form className="hidden gap-2 md:flex md:items-center md:gap-4 md:ml-auto">
                    <div className="relative">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input className="pl-8 md:w-[200px] md:rounded-full md:shadow" placeholder="Search" type="search" />
                    </div>
                </form>
                <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
                    <ShoppingBagIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle cart</span>
                </Button>
            </header>
            <div className="flex-1 flex min-h-0">
                <div className="hidden border-r px-4 py-6 md:block w-[250px]">
                    <div className="grid gap-4">
                        <Link
                            className="flex items-center gap-3 text-base font-medium rounded-lg px-3 py-2 text-gray-500 transition-all dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            All
                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">42</Badge>
                        </Link>
                        <Link
                            className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            Electronics
                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500">
                                5
                            </Badge>
                        </Link>
                        <Link
                            className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            Clothing
                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500">
                                12
                            </Badge>
                        </Link>
                        <Link
                            className="flex items-center gap-3 text-base rounded-lg px-3 py-2 text-gray-500 transition-all dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            Books
                            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500">
                                25
                            </Badge>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 min-h-0">
         
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                { products.map((product) => (
                                    <div key={ product.id } className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={ product.imageSrc }
                                                alt={ product.imageAlt }
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href={ product.href }>
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        { product.name }
                                                    </a>
                                                </h3>
                                                <p className="mt-1 text-sm text-gray-500">{ product.color }</p>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{ product.price }</p>
                                        </div>
                                    </div>
                                )) }
                            </div>
                        </div>
                    </div>
                    


                </div>
                
            </div>
        </div>
    )
}

export default Component

function Package2Icon(props: any) {
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
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    )
}


function SearchIcon(props: any) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}


function ShoppingBagIcon(props: any) {
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
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    )
}
