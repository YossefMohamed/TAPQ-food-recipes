import React, { ReactNode } from "react";

interface IProps {
  showModal: boolean;
  children: ReactNode;
  setShowModal: (value: boolean) => void;
  title: string;
  onSubmit: () => void;
}

const Modal: React.FC<IProps> = ({
  showModal,
  setShowModal,
  children,
  title,
  onSubmit,
}) => {
  console.log(showModal);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none w-[550px]">
                {/*header*/}
                <div className="flex items-start w-full justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <span
                    className=" text-black h-6 w-6 text-3xl cursor-pointer opacity-50"
                    onClick={() => setShowModal(false)}
                  >
                    ×
                  </span>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">{children}</div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="btn-primary"
                    type="button"
                    onClick={onSubmit}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
