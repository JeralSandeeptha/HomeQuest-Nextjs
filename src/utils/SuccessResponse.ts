class SuccessResponse{

    statusCode: number;
    message: string;
    data: unknown;

    constructor(statusCode: number, message: string, data: unknown) {
        this.data = data;
        this.message = message;
        this.statusCode = statusCode;
    }
}

export default SuccessResponse;