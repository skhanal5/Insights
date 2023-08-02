import {ChartBarSquareIcon, InformationCircleIcon, ClipboardDocumentListIcon, ArrowUturnLeftIcon, ChartPieIcon, QueueListIcon} from '@heroicons/react/24/outline'
import {PaperAirplaneIcon} from '@heroicons/react/24/solid'
export default function SideBar() {
    return(
        <div className="h-screen w-1/5 py-4 px-2 border border-r border-gray-300 bg-white">
            <div className="flex flex-nowrap flex-col justify-center h-full ml-8 mr-8">
                <div className="flex items-center mt-5 justify-center">
                    <div className="border border-4 rounded bg-blue-500 mr-5 p-0">
                        <PaperAirplaneIcon className="text-white h-4 w-6 inline-block"></PaperAirplaneIcon>
                    </div>
                    <h1 className="text-base font-bold">AppDash</h1>
                </div>
                <div className="border-t border-gray-300 mt-5"></div>
                <div className="flex flex-nowrap flex-grow">
                    <ul>
                        <p className="mt-20 text-xs ml-4 mb-2 text-gray-500"> Main Menu </p>
                        <li>
                            <a className="hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded active:text-bold">
                                <ChartBarSquareIcon className="h-5 w-5 inline-block mr-5"></ChartBarSquareIcon>
                                Dashboard
                            </a>
                        </li>
                        <li className="mt-5">
                            <a className="mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded">
                                <ClipboardDocumentListIcon className="h-5 w-5 inline-block mr-5"></ClipboardDocumentListIcon>
                                Tracker
                            </a>
                        </li>
                        <li className="mt-5">
                            <a className="mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded">
                                <QueueListIcon className="h-5 w-5 inline-block mr-5"></QueueListIcon>
                                Goals
                            </a>
                        </li>
                        <li className="mt-5">
                            <a className="mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded">
                                <ChartPieIcon  className="h-5 w-5 inline-block mr-5"></ChartPieIcon>
                                Metrics
                            </a>
                        </li>
                        <p className="mt-10 text-xs ml-4 mb-2 text-gray-500"> Misc. </p>
                        <li className = "mb-5">
                            <a className="hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded">
                                <InformationCircleIcon  className="h-5 w-5 inline-block mr-5"></InformationCircleIcon>
                                Need help?
                            </a>
                        </li>
                        <li className = "mb-5">
                            <a className="mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded">
                                <ArrowUturnLeftIcon  className="h-5 w-5 inline-block mr-5"></ArrowUturnLeftIcon>
                                Log out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}