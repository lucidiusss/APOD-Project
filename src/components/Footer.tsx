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
    <div className="w-screen h-32  fixed bottom-0 left-0">
      <div className="w-full z-0 h-full bg-gradient-to-t from-black to-transparent" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-40 absolute w-full flex flex-row bottom-0 left-0 p-4 shadow-md"
      >
        <div className="flex flex-col">
          <h1 className="uppercase text-[0.8rem] sm:text-[1.5rem] md:text-[2rem]  text-[#bdbdbd] select-none font-extralight w-fit">
            astronomy picture of the day
          </h1>
          <p className="uppercase text-[1.3rem]  sm:text-[3rem] md:text-[2rem]  text-white select-none w-fit font-bold">
            {data?.title}
          </p>
        </div>
        <div className="md:ml-auto absolute bottom-0 right-0 md:static md:mr-16 flex items-end">
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
