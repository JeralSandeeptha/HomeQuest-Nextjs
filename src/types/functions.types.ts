import { Dispatch, SetStateAction } from "react";
import { IService, IServicePost } from "./interfaces.types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type getAllServicesProps = {
    setServices: Dispatch<SetStateAction<IService[]>>
}

export type createServicesProps = {
    service: IServicePost,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    router: AppRouterInstance
}