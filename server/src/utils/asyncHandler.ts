const asyncHandler = (requestHandler: any) => {
  return (req: Request, res: Response, next: Function) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
