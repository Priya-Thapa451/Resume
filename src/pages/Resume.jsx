import { CardWithLinkedIn } from "./LinkedIn";
import { CardWithPdf } from "./PDF";
import { Separator } from "@/components/ui/separator";

export function Resume() {
  return (
    <div
      className="h-screen p-5 bg-gray-100 
    "
    >
      <h1 className="text-3xl text-center font-extrabold mt-5 ">
        Create Resume
      </h1>
      <div className=" mt-5 flex justify-center items-center p-6 ">
        <div className=" text-center shadow-lg">
          <CardWithPdf />
        </div>

        <Separator
          orientation="vertical"
          className="bg-gray-800 h-52 w-[2px] mx-6 "
        />

        <div className=" text-center shadow-lg">
          <CardWithLinkedIn />
        </div>
      </div>
    </div>
  );
}
