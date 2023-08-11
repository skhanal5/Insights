export default function TaskCell({description, status}) {
    return (
        <div className="flex flex-col p-5 bg-white rounded-lg shadow-lg">
            <div>
                {description}
            </div>
            <div>
                {status}
            </div>
        </div>
    )
}