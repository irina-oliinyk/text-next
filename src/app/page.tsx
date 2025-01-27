import ActiveLabel from "../components/Active-label/active-label";
import NotActiveLabel from "../components/Not-active-label/not-active-label";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl text-blue-600">Home page </h1>
      <ActiveLabel>Active</ActiveLabel>
      <NotActiveLabel>Not Active</NotActiveLabel>
    </main>
  );
}
