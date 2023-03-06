import { Movie } from "@/model/movie";
import { LoginU } from "@/model/user";
import { request } from "http";
import React, { useState } from "react";

export interface Results {
  results: Movie[];
}

interface ResponseBase {
  isLoading: boolean;
  code: string;
  isError: boolean;
  data: Movie[] | LoginU | string | {results: Movie[]};
}

const useRequest = (): [ResponseBase, (url: string, method: string, data: any) => Promise<ResponseBase | undefined>] => {
  const [state, fetchedState] = useState<ResponseBase>({
    isLoading: false,
    code: "",
    isError: false,
    data: "",
  });

  const headers = {
    "Content-Type": "application/json",
  };
  const fetchRequest = async (
    url: string,
    method: string,
    data: any
  ): Promise<ResponseBase | undefined> => {
    try {
      fetchedState({ ...state, isLoading: true });
      let firstInfo;
      if (method === "GET") {
        firstInfo = await fetch(url);
      } else {
        firstInfo = await fetch(url, {
          method,
          body: JSON.stringify(data),
          headers,
        });
      }
      const extractedData = await firstInfo.json();

      state.isLoading = false;
      state.isError = !firstInfo.ok;
      (state.code = `${firstInfo.status}`), (state.data = extractedData);
      fetchedState(state);
      return state;
    } catch (e) {
      state.isLoading = false;
      state.isError = true;
      state.data = e as string;
    }
  };
  return [state, fetchRequest ];
};

export default useRequest;
