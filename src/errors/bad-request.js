const { StatusCodes } = require("http-status-codes");
const { MESSAGE_RESPONSES, NAME_RESPONSES } = require("../constants");
const CustomAPIError = require("./custom-api");

class BadRequestError extends CustomAPIError {
  constructor(message = MESSAGE_RESPONSES.BAD_REQUEST) {
    super(message);
    this.status = StatusCodes.BAD_REQUEST;
    this.name = NAME_RESPONSES.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
