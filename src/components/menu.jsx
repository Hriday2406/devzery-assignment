import Icon from "@mdi/react";
import {
  mdiViewDashboardOutline,
  mdiFormatListBulleted,
  mdiBugOutline,
  mdiConnection,
  mdiCogOutline,
  mdiLogout,
} from "@mdi/js";

export default function Menu() {
  return (
    <aside className="w-[12.5%] flex flex-col justify-between">
      <div className="flex items-center gap-4  p-10">
        <img src="./devzery.png" alt="Devzery" className="h-10" />
        <h1 className="font-medium text-xl">Devzery</h1>
      </div>
      <div className="">
        <ul>
          <li className="flex gap-3 px-8 py-4 bg-altBg border-l-4 border-devzery ">
            <Icon path={mdiViewDashboardOutline} size={1} />
            <p>Test Suite</p>
          </li>
          <li className="flex gap-3 px-8 py-4">
            <Icon path={mdiFormatListBulleted} size={1} />
            <p>API Overview</p>
          </li>
          <li className="flex gap-3 px-8 py-4">
            <Icon path={mdiBugOutline} size={1} />
            <p>Bug Tracker</p>
          </li>
          <li className="flex gap-3 px-8 py-4">
            <Icon path={mdiConnection} size={1} />
            <p>Integrations</p>
          </li>
          <li className="flex gap-3 px-8 py-4">
            <Icon path={mdiCogOutline} size={1} />
            <p>Settings</p>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 p-10">
        <Icon path={mdiLogout} size={1} />
        <p>Logout</p>
      </div>
    </aside>
  );
}
