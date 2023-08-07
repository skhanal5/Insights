"use client";

import {
  ChartBarSquareIcon,
  ClipboardDocumentListIcon,
  ArrowLeftOnRectangleIcon,
  ChartPieIcon,
  QueueListIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import Image from "next/image";
import FreeResources from "./FreeResources";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathName = usePathname();

  const menus = [
    {
      subtitle: "Main Menu",
      links: [
        {
          text: "Dashboard",
          href: "/dashboard",
          icon: <ChartBarSquareIcon className="h-5 w-5 inline-block mr-5" />,
        },
        {
          text: "Tracker",
          href: "/tracker",
          icon: (
            <ClipboardDocumentListIcon className="h-5 w-5 inline-block mr-5" />
          ),
        },
        {
          text: "Goals",
          href: "/goals",
          icon: <QueueListIcon className="h-5 w-5 inline-block mr-5" />,
        },
        {
          text: "Metrics",
          href: "/metrics",
          icon: <ChartPieIcon className="h-5 w-5 inline-block mr-5" />,
        },
      ],
    },
    {
      subtitle: "Misc.",
      links: [
        {
          text: "Request",
          href: "/request",
          icon: <PencilSquareIcon className="h-5 w-5 inline-block mr-5" />,
        },
        {
          text: "Logout",
          href: "/logout",
          icon: (
            <ArrowLeftOnRectangleIcon className="h-5 w-5 inline-block mr-5" />
          ),
        },
      ],
    },
  ];

  return (
    <div className="h-screen w-1/6 py-4 px-2 border border-r border-gray-300 bg-white">
      <div className="flex flex-nowrap flex-col h-full gap-5 justify-center items-center">
        <div className="flex flex-row mt-5 justify-center items-center gap-1">
          <Image src="/insights.svg" height={40} width={40} alt="eye"></Image>
          <h1 className="text-base font-semibold">Insights</h1>
        </div>
        <div className="border-t border-gray-200 border-1 w-full"></div>
        <div className="flex flex-col gap-5 flex-nowrap flex-grow justify-center items-center">
          {menus.map((menu, menuIndex) => (
            <div key={menuIndex}>
              <p className="mt-5 text-xs mb-2 text-gray-500 text-left">
                {menu.subtitle}
              </p>
              <ul>
                {menu.links.map((link, linkIndex) => {
                  const isActive = pathName == link.href;
                  return (
                    <li className="mt-2" key={linkIndex}>
                      <Link
                        href={link.href}
                        className={`flex items-center py-2 px-4 text-xs rounded ${
                          isActive ? "font-semibold" : ""
                        } hover:bg-blue-200 hover:cursor-pointer`}
                      >
                        {link.icon}
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <FreeResources></FreeResources>
      </div>
    </div>
  );
}
