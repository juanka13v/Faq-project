const { StatusCodes } = require("http-status-codes");
const { MESSAGE_RESPONSES, NAME_RESPONSES } = require("../constants");
const CustomAPIError = require("./custom-api");

class UnauthorizedError extends CustomAPIError {
  constructor(message = MESSAGE_RESPONSES.UNAUTHENTICATED) {
    super(message);
    this.status = StatusCodes.UNAUTHORIZED;
    this.name = NAME_RESPONSES.UNAUTHENTICATED;
  }
}

module.exports = UnauthorizedError;
