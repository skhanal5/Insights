import {
  ArrowTrendingDownIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
  ClipboardDocumentCheckIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/outline";

import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

export default function Insights() {
  const metricArrow = [
    <ChevronDoubleDownIcon className="w-3 h-3 font-bold text-red-600 mr-1"></ChevronDoubleDownIcon>,
    <ChevronDoubleUpIcon className="w-3 h-3 font-bold text-green-600 mr-1"></ChevronDoubleUpIcon>
  ]

  const metrics = [
    {
      name: "Applications",
      icon: (
        <ClipboardDocumentCheckIcon className="text-blue-700 h-3/5 w-3/5 inline-block"></ClipboardDocumentCheckIcon>
      ),
      metric: 50,
      stat: 4,
    },
    {
      name: "Interviews",
      icon: (
        <EnvelopeOpenIcon className="text-blue-700 h-3/5 w-3/5 inline-block"></EnvelopeOpenIcon>
      ),
      metric: 3,
      stat: -10,
    },
    {
      name: "Callback Rate",
      icon: (
        <ArrowTrendingUpIcon className="text-blue-700 h-3/5 w-3/5 inline-block"></ArrowTrendingUpIcon>
      ),
      metric: 50,
      stat: -18,
    },
    {
      name: "Failure Rate",
      icon: (
        <ArrowTrendingDownIcon className="text-blue-700 h-3/5 w-3/5 w-inline-block"></ArrowTrendingDownIcon>
      ),
      metric: 70,
      stat: 30,
    },
    {
      name: "Total Offers",
      icon: (
        <ChatBubbleLeftEllipsisIcon className="text-blue-700 h-3/5 w-3/5 inline-block"></ChatBubbleLeftEllipsisIcon>
      ),
      metric: 10,
      stat: 8.5,
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center gap-10 mt-5">
      {metrics.map((metric, metricIndex) => (
        <div
          className="bg-white shadow-lg rounded-lg p-5 w-1/5"
          key={metricIndex}
        >
          <div className="flex flex-row gap-5 justify-center items-center">
            <div className="bg-blue-100 rounded-full h-8 w-8 flex justify-center items-center">
              {metric.icon}
            </div>
            <div>
              <p className="text-xs"> {metric.name} </p>
              <div className="flex flex-row w-full gap-5 justify-content items-center">
                <div className="font-bold text-lg"> {metric.metric} </div>
                <div className="flex justify-content items-center">
                  {
                    metric.stat > 0 ? metricArrow[1] : metricArrow[0]
                  }
                  <div
                    className={`text-xs font-semibold ${
                      metric.stat > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {metric.stat + "%"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
