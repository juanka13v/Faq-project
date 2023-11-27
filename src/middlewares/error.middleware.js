const { StatusCodes } = require("http-status-codes");
const {BadRequestError, NotFoundError, UnauthorizedError} = require ("../errors")
const { NAME_RESPONSES, MESSAGE_RESPONSES } = require("../constants");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (
    err instanceof BadRequestError ||
    err instanceof NotFoundError ||
    err instanceof UnauthorizedError
  ) {
    res.status(err.status).render("pages/error-page", { error: err });
    return;
  }

  let customError = {
    name: NAME_RESPONSES.INTERNAL_SERVER_ERROR,
    message: MESSAGE_RESPONSES.INTERNAL_SERVER_ERROR,
    status: StatusCodes.INTERNAL_SERVER_ERROR,
  };

  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .render("pages/error-page", { error: customError });
};

module.exports = errorHandlerMiddleware;
