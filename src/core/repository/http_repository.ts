import { Result } from "../helper/result";

export class HttpRepository {
  serverAddress = "http://localhost:8080";
  jsonRequest = async <T>(
    url: string,
    method: string = "GET",
    requestBody?: any
  ): Promise<Result<void, T>> => {
    try {
      const reqInit = {
        body: JSON.stringify(requestBody),
        method: method,
        headers: { "Content-Type": "application/json" },
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
