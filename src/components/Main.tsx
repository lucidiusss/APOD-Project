import { DataProps } from "../types/data";

export default function Main(data: DataProps | undefined) {
  return (
    <div className="w-screen h-screen">
      <img
        unselectable="on"
        className="w-full h-full object-cover select-none pointer-events-none"
        src={data?.hdurl}
        alt=""
      />
    </div>
  );
}
