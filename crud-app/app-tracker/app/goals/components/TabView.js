'use client'

import TabCell from "./TabCell"

import { useState } from "react"

export default function TabView() {

    const tabs = [
        { id: 1, title: 'All Tasks', content: 'This is the content of tab 1.' },
        { id: 2, title: 'To-do', content: 'This is the content of tab 2.' },
        { id: 3, title: 'In Progress', content: 'This is the content of tab 2.' },
        { id: 4, title: 'Completed', content: 'This is the content of tab 3.' },
        { id: 5, title: 'Overdue', content: 'This is the content of tab 3.' },
    ]

    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="flex gap-5 p-1 bg-white shadow-lg rounded-lg">
          {tabs.map((tab) => (
            <TabCell key={tab.id} active={activeTab.id == tab.id} tabName={tab.title} onClick={() => setActiveTab(tab)}></TabCell>
          ))}
        </div>
    )
}