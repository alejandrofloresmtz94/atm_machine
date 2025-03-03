import ResponseStatus from "../enums/responseStatus";

interface ServiceResponse {
  status: ResponseStatus;
  data?: { [key: string]: unknown };
  errorMessage?: string;
}

export default ServiceResponse;
