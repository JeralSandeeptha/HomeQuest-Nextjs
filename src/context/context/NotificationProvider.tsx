'use client';
import { NotificationContextType } from "@/types/component.types";
import { createContext } from "react";

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export default NotificationContext;