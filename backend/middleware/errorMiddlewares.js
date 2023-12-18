const notFound = (req, res, next) => {
  const error = new Error(`Not found :${req.originalURL}`);
  res.status(404);
  next(error);
};

const errorHandler = async (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = res.message;

  if (err.name === "CastError" && err.kind == "ObjectId") {
    message = "Not found";
    statusCode = 404;
  }
  res.status(statusCode).json({
    message,
    stack:
      process.env.NODE_ENV === "production" ? "production mode" : err.stack,
  });
};
export {notFound,errorHandler}
