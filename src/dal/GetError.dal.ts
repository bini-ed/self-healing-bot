export type WebHookRequestType = {
  statusCode: string;
  responseTime: string;
  port: string;
  timestamp:string  
};


class GetErrorDAL {
  /**
   * Create  GetError
   *
   * @param {GetError}  get_error
   * @param {Transaction} transaction
   */
  static getError(error: any): Promise<any> {
    return new Promise((resolve, reject) => {

    });
  }
}

export default GetErrorDAL;
