
'use client'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

export default  function Menu() {
  
    const getUser = useQuery(api.myFunctions.getUsers, { sessionId: null });
        const user = getUser?.users[0];
    

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    <Button variant="ghost"  className="p-0 rounded-full" >
                        <Avatar>
                            { user ?  (
                            <AvatarImage src='' alt="@shadcn" />
                           
                            ) : (
                                    <AvatarFallback>
                                        <div className="avatar font-bold ">
                                      cn
                                    </div>
                                    </AvatarFallback>
                            ) }
                        </Avatar>
                </Button>
       </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <div>
                            {
                                user ? (
                                    <div>
                                        <div className="font-bold">{user}</div>
                                        <div className="text-gray-500 text-sm">@shadcn</div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="font-bold">shadcn</div>
                                        <div className="text-gray-500 text-sm">
                                            @shadcn
                                            </div>
                                        </div>
                                )
                           }
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Keyboard shortcuts
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>Invite Friends</DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>Email</DropdownMenuItem>
                                <DropdownMenuItem>Message</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>More...</DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        New Team
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>GitHub</DropdownMenuItem>
                <DropdownMenuItem disabled>Support</DropdownMenuItem>
                
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                 
                        <Button className="w-full" >
                            Logout
                        </Button>
                    
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
