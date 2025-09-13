import type { ReactElement } from "react";

export function SidebarItem({text, icon} : { text: string, icon: ReactElement}) {
    return (
        <div className="flex justify-start items-center text-gray-800 py-2 cursor-pointer hover:bg-blue-100/50 rounded-l-lg pl-4 transition-all duration-100 hover:border-r-4 hover:border-blue-600 ">
            <div className="pr-2">
            {icon}
            </div>
            <div>
            {text}
            </div>
        </div>
    )
}