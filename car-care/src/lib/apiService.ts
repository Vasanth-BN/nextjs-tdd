"use server";

import { COMMON_TOAST } from "@/constants/toastMessages";
import { StatusCodes } from "http-status-codes";
import { getErrorMessage } from "./utils";

type RequestMethods = "GET";

export const request = async (
  method: RequestMethods,
  url: string,
  body?: object | string | null,
  options?: RequestInit,
) => {
  try {
    const response = await fetch(url, {
      method,
      body: body
        ? typeof body === "object"
          ? JSON.stringify(body)
          : body
        : null,
      headers: new Headers({
        "content-type": "application/json",
      }),
      ...options,
    });

    console.log(
      `network response | method: ${method} | status: ${response.status} | url: ${response.url}`,
    );

    if (response.ok) {
      if (response.status === StatusCodes.NO_CONTENT) return "";
      return await response.json();
    }
    if (!response.ok) {
      const error = await response.json();
      console.error(error);

      return {
        error: getErrorMessage(error, response.status),
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: COMMON_TOAST.FAILURE,
    };
  }
};
