import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return (
        <div className="h-screen bg-white border-r border-gray-200 w-72 fixed left-0 top-0">
            <div className="pt-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon/>} />
                <SidebarItem text="Youtube" icon={<YoutubeIcon/>} />
            </div>
        </div>
    )
}