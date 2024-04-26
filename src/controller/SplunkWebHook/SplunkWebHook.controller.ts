import { Request, Response } from "express";

class SplunkWebHook {
  static getAlert(request: Request, response: Response) {
    //Cases to take into consideration
    //Unreachable endpoint 404 --measures to take restart
    //long response time --measures-- restart
    //running but not responding --measures-- kill process, release port and restart application
  }
}

export default SplunkWebHook;
