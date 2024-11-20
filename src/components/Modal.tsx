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

  console.log(ref);

  useOnClickOutside(ref, () => setShowModal(false));

  return (
    <motion.div
      ref={ref}
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.25 }}
      className="absolute top-0 right-0 h-full px-4 pt-4 pb-16 w-[500px] bg-black/50 backdrop-blur-md"
    >
      <button
        className="absolute top-4 right-4 p-1 rounded-full transition active:bg-black/50 hover:bg-black/30"
        onClick={() => setShowModal(false)}
      >
        <MdClose size={25} className="text-white" />
      </button>
      <div className="flex flex-col h-full">
        <h1 className="text-white text-3xl mb-5">{data?.title}</h1>
        <span className="text-[#e6e6e6] mb-24">{data?.date}</span>
        <p className="text-[#cecece] text-lg first-letter:uppercase">
          {data?.explanation}
        </p>
      </div>
    </motion.div>
  );
}
