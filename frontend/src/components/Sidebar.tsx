import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return (
        <div className="h-screen bg-white border-r border-gray-200 w-72 fixed left-0 top-0 pl-6">
            <div className="flex justify-start align-center pt-4 gap-2 pb-4">
            <img src="/brain-logo.svg" alt="logo" width={30} />
            <h1 className="text-2xl font-semibold">Brain2x</h1>
            </div>
            <div className="pt-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon/>} />
                <SidebarItem text="Youtube" icon={<YoutubeIcon/>} />
            </div>
        </div>
    )
}