import StatusLabel, {Status} from "../components/status-label";
// import clsx from "clsx";

import "./globals.css";
import AddCompanyButton from "@/components/add-company-button";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl ">Home page </h1>
       <AddCompanyButton/>
        {/*<StatusLabel status={Status.Active}>Active</StatusLabel>*/}
        {/*<StatusLabel status={Status.NotActive}>Not activ</StatusLabel>*/}
        {/*<StatusLabel status={Status.Pending}>Pending</StatusLabel>*/}
        {/*<StatusLabel status={Status.Suspended}>Suspended</StatusLabel>*/}

    </main>
  );
}
