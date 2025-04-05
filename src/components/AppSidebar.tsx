"use client"
import AddFile from "./AddFile"
import AddFolder from "./AddFolder"
import BackButton from "./BackButton"
import DisplayFolders from "./DisplayFolders"
import MemoryLimit from "./MemoryLimit"
import SignOutButton from "./SignOutButton"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"

const items = [
    {
        title: "Home",
        url: "#",
    },
    {
        title: "Inbox",
        url: "#",
    },
    {
        title: "Calendar",
        url: "#",
    },
    {
        title: "Search",
        url: "#",
    },
    {
        title: "Settings",
        url: "#",
    },
]

const AppSidebar = () => {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent className=" space-y-5 bg-black">
                <SidebarGroup>
                    <SidebarGroupLabel>ACTIONS</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <AddFolder />
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <AddFile />
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <MemoryLimit />
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup className="h-[55%]">
                    <SidebarGroupLabel className=" pb-3">
                        FOLDERS / SUBFOLDERS <br />(click on any folder to view sub folders)
                    </SidebarGroupLabel>
                    <SidebarContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <BackButton />
                            </SidebarMenuItem>
                            <SidebarMenuItem className="h-full overflow-y-auto">
                                <DisplayFolders />
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>
                        USER
                    </SidebarGroupLabel>
                    <SidebarContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SignOutButton />
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar