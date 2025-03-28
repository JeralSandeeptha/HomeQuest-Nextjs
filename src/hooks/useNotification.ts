import NotificationContext from "@/context/context/NotificationProvider";
import { useContext } from "react";

const useNotification = () => {

    const context = useContext(NotificationContext);

    if(!context) {
        throw new Error('Notification context should be inside of Notification Provider');
    }

    // const { isError, setIsError, setIsSuccess, isSuccess } = context; 
  
    // return [
    //     isError,
    //     isSuccess,
    //     setIsError,
    //     setIsSuccess
    // ];

    return context;
}

export default useNotification;