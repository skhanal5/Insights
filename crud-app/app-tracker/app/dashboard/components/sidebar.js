import {PaperAirplaneIcon, ChartBarSquareIcon, InformationCircleIcon, ClipboardDocumentListIcon, ArrowUturnLeftIcon, ChartPieIcon, QueueListIcon} from '@heroicons/react/24/solid'

export default function Sidebar() {
    return(
        <div className="bg-white border border-r-2 border-gray-300 h-screen w-64 fixed left-0 top-0 py-4 px-2">
            <div class="flex flex-nowrap flex-col justify-center h-full ml-8 mr-8">
                <div class="flex items-center mt-5 justify-center">
                    <div class="border border-4 rounded bg-blue-500 mr-5 p-0">
                        <PaperAirplaneIcon class="text-white h-4 w-6 inline-block"></PaperAirplaneIcon>
                    </div>
                    <h1 class="text-base font-bold">App Dash</h1>
                </div>
                <div class="border-t border-gray-300 mt-5"></div>
                <div class="flex flex-nowrap flex-grow">
                    <ul>
                        <p class="mt-20 text-xs ml-4 mb-2 text-gray-500"> Main Menu </p>
                        <li>
                            <a class="hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded active:text-bold">
                                <ChartBarSquareIcon class="h-5 w-5 inline-block mr-5"></ChartBarSquareIcon>
                                Dashboard
                            </a>
                        </li>
                        <li class="mt-5">
                            <a class="mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded">
                                <ClipboardDocumentListIcon class="h-5 w-5 inline-block mr-5"></ClipboardDocumentListIcon>
                                Tracker
                            </a>
                        </li>
                        <li class="mt-5">
                            <a class="mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded">
                                <QueueListIcon class="h-5 w-5 inline-block mr-5"></QueueListIcon>
                                Goals
                            </a>
                        </li>
                        <li class="mt-5">
                            <a class="mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded">
                                <ChartPieIcon  class="h-5 w-5 inline-block mr-5"></ChartPieIcon>
                                Metrics
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex mt-auto">
                    <ul>
                        <p class="mt-20 text-xs ml-4 mb-2 text-gray-500"> Misc. </p>
                        <li class = "mb-5">
                            <a class="hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded">
                                <InformationCircleIcon  class="h-5 w-5 inline-block mr-5"></InformationCircleIcon>
                                Need help?
                            </a>
                        </li>
                        <li class = "mb-5">
                            <a class="mt-2 hover:bg-blue-200 hover:cursor-pointer py-2 px-4 text-sm rounded">
                                <ArrowUturnLeftIcon  class="h-5 w-5 inline-block mr-5"></ArrowUturnLeftIcon>
                                Log out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}