class ApiError extends Error {
  data: any;
  success: boolean;

  constructor(
    public statusCode: number,
    public message: string = "Something went wrong",
    public errors: any[] = [],
    stack: string = ""
  ) {
    super(message);

    this.data = null;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
