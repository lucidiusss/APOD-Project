import { Dispatch, SetStateAction, useRef } from "react";
import { DataProps } from "../types/data";
import { motion } from "motion/react";
import { MdClose } from "react-icons/md";
import { useOnClickOutside } from "usehooks-ts";

type ModalProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  data: DataProps | undefined;
};

export default function Modal({ setShowModal, data }: ModalProps) {
  const ref = useRef(null);

  useOnClickOutside(ref, () => setShowModal(false));

  return (
    <motion.div
      ref={ref}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.25 }}
      className="absolute top-0 right-0 h-screen px-4 pt-4 pb-8 sm:w-full md:w-[500px] bg-black/50 backdrop-blur-md z-50"
    >
      <button
        className="absolute top-4 right-4 p-1 rounded-full transition active:bg-black/50 hover:bg-black/30"
        onClick={() => setShowModal(false)}
      >
        <MdClose size={25} className="text-white" />
      </button>
      <div className="flex flex-col h-full">
        <h1 className="text-white sm:text-[25px] md:text-3xl mb-5 font-bold uppercase">
          {data?.title}
        </h1>
        <span className="text-[#e6e6e6] mb-12">{data?.date}</span>
        <div className="h-full overflow-y-scroll lg:overflow-y-hidden">
          <p className="text-[#cecece] h-full text-sm md:text-lg first-letter:uppercase">
            {data?.explanation}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
