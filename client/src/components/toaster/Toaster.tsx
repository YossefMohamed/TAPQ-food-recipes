import { AiOutlineClose } from "react-icons/ai";
import { BiAlarmExclamation } from "react-icons/bi";
import parse from "html-react-parser";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { deleteToaster } from "../../redux/slices/ToasterSlice";
import { useEffect, useRef } from "react";
const Toaster = ({ message }: { message: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef<any>(null);
  const deleteToasterFromRedux = () => dispatch(deleteToaster(message));

  useEffect(() => {
    const timeOut = setTimeout(() => {
      ref.current.style.display = "none";
      deleteToasterFromRedux();
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <div
      id="toast-warning"
      className="flex items-center  w-[350px] p-2 px-5 text-gray-500 bg-white rounded-lg shadow-xl border"
      role="alert"
      ref={ref}
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-light bg-red-600 rounded">
        <span>
          <BiAlarmExclamation />
        </span>
        <span className="sr-only">Warning icon</span>
      </div>
      <div className="ml-3  font-normal">{parse(message)}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg "
        data-dismiss-target="#toast-warning"
        aria-label="Close"
        onClick={deleteToasterFromRedux}
      >
        <span className="sr-only">Close</span>
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default Toaster;
