import { Dispatch, SetStateAction } from "react"
import { IService } from "./interfaces.types"

export type getAllServicesProps = {
    setServices: Dispatch<SetStateAction<IService[]>>
}