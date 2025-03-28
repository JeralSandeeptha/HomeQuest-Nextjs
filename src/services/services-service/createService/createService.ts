import AxiosClient from "@/api/client/AxiosClient";
import { baseURL } from "@/api/client/baseURL";
import { createServicesProps } from "@/types/functions.types";

const createService = (props: createServicesProps) => {
    try {
        AxiosClient.post(`${baseURL}/service`, props.service)
            .then((res) => {
                console.log(res.data.data);
                props.setIsSuccess(true);
                props.router.push('/dashboard/services');
                setTimeout(() => {
                    props.setIsSuccess(false);
                }, 4000);
            })
            .catch((error) => {
                console.error(error);
                props.setIsError(true);
                setTimeout(() => {
                    props.setIsError(false);
                }, 4000);
            });
    } catch (error) {
        console.log(error);
        props.setIsError(true);
        setTimeout(() => {
            props.setIsError(false);
        }, 4000);
    }
}

export default createService;