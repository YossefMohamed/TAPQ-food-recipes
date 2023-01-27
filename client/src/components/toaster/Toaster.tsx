import { AiOutlineClose } from "react-icons/ai";
import { BiAlarmExclamation } from "react-icons/bi";
import parse from "html-react-parser";
const Toaster = ({ message }: { message: string }) => {
  return (
    <div
      id="toast-warning"
      className="flex items-center w-full  p-4 px-5 text-gray-500 bg-white rounded-lg shadow "
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-light bg-red-600 rounded">
        <span>
          <BiAlarmExclamation />
        </span>
        <span className="sr-only">Warning icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">{parse(message)}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg "
        data-dismiss-target="#toast-warning"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default Toaster;
