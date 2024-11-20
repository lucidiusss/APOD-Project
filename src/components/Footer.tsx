import { DataProps } from "../types/data";
import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";
import { IoIosInformationCircle } from "react-icons/io";

type ModalProps = {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  data: DataProps | undefined;
  showModal: boolean;
};

export default function Footer({ setShowModal, showModal, data }: ModalProps) {
  return (
    <div className="w-screen h-32  absolute bottom-0 left-0">
      <div className="w-full z-0 h-full bg-gradient-to-t from-black to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-50 absolute flex flex-row top-0 left-0 w-full h-full p-4 shadow-md"
      >
        <div className="flex flex-col">
          <h1 className="uppercase text-[1.5rem] text-[#bdbdbd] select-none font-extralight w-fit">
            apod project
          </h1>
          <p className="uppercase text-[3rem] text-white select-none w-fit">
            {data?.title}
          </p>
        </div>
        <div className="ml-auto mr-16 flex items-end">
          {!showModal && (
            <button
              className="rounded-full transition"
              onClick={() => setShowModal(true)}
            >
              <IoIosInformationCircle
                size={50}
                className="text-white hover:text-[#bdbdbd] transition"
              />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
