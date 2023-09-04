import { ScaleLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="top-0 left-0 z-[10] h-screen w-full mx-auto flex justify-center bg-white dark:bg-[#0f0826]  absolute items-center">
      <div className="text-center">
        <ScaleLoader
          color="#36d7b7"
          height={40}
          loading={true}
          margin={3}
          radius={3}
          width={5}
        />
      </div>
    </div>
  );
}
