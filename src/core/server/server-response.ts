interface ServerResponseParameters {
  statusCode: number;
  message: string;
  data?: any;
}

export default class ServerResponse {
  statusCode: number;
  message: string;
  data?: any;

  constructor({ statusCode, message, data }: ServerResponseParameters) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
