import MainPanel from "./components/MainPanel";
import SideBar from "./components/SideBar";

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
