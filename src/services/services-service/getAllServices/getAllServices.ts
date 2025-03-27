import AxiosClient from "@/api/client/AxiosClient";
import { baseURL } from "@/api/client/baseURL";
import { getAllServicesProps } from "@/types/functions.types";

const getAllServices = (props: getAllServicesProps) => {
    try {
        console.log(baseURL);
        AxiosClient.get(`${baseURL}/service`)
            .then((res) => {
                console.log(res.data.data);
                props.setServices(res.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    } catch (error) {
        console.log(error);
    }
}

export default getAllServices;