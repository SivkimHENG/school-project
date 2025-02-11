import { useRef, useState,createContext } from "react";


const ModalContext = createContext();
export default function Modal({isOpen,onClose,children}){


    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const handleEscape = (event) => {
            if(event.key === "Escape") {
                handleClose();
            }

        }

        if(isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "visable";
        }


    },[isOpen]);


    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        },300)

    }

    if(!isOpen && !isClosing) return null;




    return(
            <div
            className={`fixed inset-0 z-50 flex items-center`}
        >

            </div>


)


}
