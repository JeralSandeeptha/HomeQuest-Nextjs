import { Bell } from "lucide-react";
import './AlertMessage.scss';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AlertMessageProps } from "@/types/component.types"

export function AlertMessage(props: AlertMessageProps) {
  return (
    <Alert className="alert-message">
      <Bell className="h-4 w-4" />
      <AlertTitle>{props.text}</AlertTitle>
      <AlertDescription>
        {props.message}
      </AlertDescription>
    </Alert>
  )
}
