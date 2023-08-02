import MainPanel from "./components/mainpanel.js";
import SideBar from "./components/sidebar.js";

export default function Dashboard() {
  return (
    <body>
      <main>
        <div className="flex">
          <SideBar></SideBar>
          <MainPanel></MainPanel>
        </div>
      </main>
    </body>
  );
}
