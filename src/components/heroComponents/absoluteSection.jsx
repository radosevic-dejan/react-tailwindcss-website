import {
  HiPaperAirplane,
  HiDatabase,
  HiCloudUpload,
  HiServer,
} from "react-icons/hi";

function AbsoluteSection() {
  return (
    <div className="absolute flex flex-col justify-self-center  md:min-w-[760px] bottom-[-5%] max-1  bg-zinc-200 boder border-slate-300 rounded-xl text-center shadow-xl">
      <p>Services</p>
      <div className="flex justify-between flex-wrap px-4">
        <p className="flex px-4 py-2 text-slate-500">
          <HiCloudUpload className="h-6 text-indigo-500" />
        </p>
        <p className="flex px-4 py-2 text-slate-500">
          <HiDatabase className="h-6 text-indigo-500" />
        </p>
        <p className="flex px-4 py-2 text-slate-500">
          <HiServer className="h-6 text-indigo-500" />
        </p>
        <p className="flex px-4 py-2 text-slate-500">
          <HiPaperAirplane className="h-6 text-indigo-500" />
        </p>
      </div>
    </div>
  );
}

export { AbsoluteSection };
