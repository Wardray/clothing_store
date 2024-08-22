import { Result } from "../helper/result";

export class HttpRepository {
  serverAddress = "http://localhost:8081";
  authJsonRequest = async <T>(
    url: string,
    method: string = "GET",
    requestBody?: any
  ): Promise<Result<void, T>> =>
    this.jsonRequest(url, method, requestBody, {
      auth: localStorage.getItem("auth"),
    });

  jsonRequest = async <T>(
    url: string,
    method: string = "GET",
    requestBody?: any,
    requestHeaders?: any
  ): Promise<Result<void, T>> => {
    try {
      const reqInit = {
        body: JSON.stringify(requestBody),
        method: method,
        headers: Object.assign(
          { "Content-Type": "application/json" },
          requestHeaders
        ),
      };

      const response = await fetch(this.serverAddress + url, reqInit);
      console.log(response);
      return Result.ok(await response.json());
    } catch (e) {
      console.log(2001);
      return Result.error(undefined);
    }
  };
}
