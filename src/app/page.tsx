import StatusLabel, {Status} from "../components/status-label";
import clsx from "clsx";

import "./globals.css";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl text-blue-600">Home page </h1>
        <StatusLabel status={Status.Activ}>Active</StatusLabel>
        <StatusLabel status={Status.NotActiv}>Not activ</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>

    </main>
  );
}
