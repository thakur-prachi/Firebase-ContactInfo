import { createPortal } from "react-dom";
import { IoCloseCircleSharp } from "react-icons/io5";

const Model = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="grid backdrop-blur  h-screen absolute top-0 w-screen z-60  place-items-center">
          <div className="m-auto p-4 min-h-[200px] rounded-lg mim-w-[80%] bg-white relative z-50">
            <div className="flex justify-end">
              <IoCloseCircleSharp
                onClick={onClose}
                className="text-2xl self-end"
              />
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("model-root")
  );
};

export default Model;
