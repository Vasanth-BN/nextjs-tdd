import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { StatusCodes } from "http-status-codes";
import { COMMON_TOAST } from "@/constants/toastMessages";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getErrorMessage = (error: unknown, status?: number): string => {
  let message = "";

  if (status && status === StatusCodes.INTERNAL_SERVER_ERROR) {
    message = COMMON_TOAST.FAILURE;
  } else if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    message = error.message;
  } else if (
    error &&
    typeof error === "object" &&
    "error" in error &&
    error.error &&
    typeof error.error === "object" &&
    "message" in error.error &&
    typeof error.error.message === "string"
  ) {
    message = error.error.message;
  } else if (
    error &&
    typeof error === "object" &&
    "error" in error &&
    typeof error.error === "string"
  ) {
    message = error.error;
  } else if (error && typeof error === "string") {
    message = error;
  } else {
    message = COMMON_TOAST.FAILURE;
  }

  return message;
};
