import { ModeToggle } from "./mode-toggle";

export default function NavBar() {
  return (
    <>
      <div className="flex justify-between align-middle w-[90%] mx-auto p-4">
        <h1 className="font-bold text-xl">
          Task_ <span className="text-orange-400 ">Manager</span>
        </h1>
        <div className="flex gap-2 align-middle">
          <ModeToggle />
          <w3m-button />
        </div>
      </div>
      <div className="border "></div>
    </>
  );
}
