
export default function TabCell({tabName, active, onClick}) {
    return (
        <div className={`p-2 text-sm hover:cursor-pointer rounded-lg ${active ? "bg-gray-100" : "bg-white"} ${active ? "text-black" : "text-gray-500"}`}  onClick={onClick}>
            {tabName}
        </div>
    )
}