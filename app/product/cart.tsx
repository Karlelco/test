
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"

export default function Component() {
    return (
        <div className="relative inline-block text-left">
            <Popover>
                <PopoverTrigger asChild>
                    <Button className="w-8 h-8" size="icon" variant="ghost">
                        <ShoppingCartIcon className="h-4 w-4" />
                        <span className="sr-only">Open cart</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[350px]">
                    <div />
                    <div />
                    <div>
                        <div className="flex flex-col h-[200px] justify-between">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2">
                                    <img
                                        alt="Thumbnail"
                                        className="rounded-md aspect-square object-cover"
                                        height="64"
                                        src="/placeholder.svg"
                                        width="64"
                                    />
                                    <div className="grid text-sm leading-tight">
                                        <div>Product name</div>
                                        <div className="font-semibold">$99.00</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">x 1</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img
                                        alt="Thumbnail"
                                        className="rounded-md aspect-square object-cover"
                                        height="64"
                                        src="/placeholder.svg"
                                        width="64"
                                    />
                                    <div className="grid text-sm leading-tight">
                                        <div>Product name</div>
                                        <div className="font-semibold">$99.00</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">x 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col">
                                    <div>Subtotal</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">2 items</div>
                                </div>
                                <div className="ml-auto font-semibold">$198.00</div>
                            </div>
                            <Button className="w-full" size="sm">
                                Checkout
                            </Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

function ShoppingCartIcon(props: any) {
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
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    )
}
