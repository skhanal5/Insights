import MainPanel from "./components/mainpanel";
import Sidebar from "./components/sidebar";

export default function Dashboard() {
  return (
    <body>
      <main>
        <div className="flex">
             <Sidebar></Sidebar>
              <MainPanel></MainPanel>
        </div>
      </main>
    </body>
  )
}
