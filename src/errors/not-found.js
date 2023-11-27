const { StatusCodes } = require("http-status-codes");
const { MESSAGE_RESPONSES, NAME_RESPONSES } = require("../constants");
const CustomAPIError = require("./custom-api");

class NotFoundError extends CustomAPIError {
  constructor(message = MESSAGE_RESPONSES.NOT_FOUND) {
    super(message);
    this.status = StatusCodes.NOT_FOUND;
    this.name = NAME_RESPONSES.NOT_FOUND;
  }
}

module.exports = NotFoundError;
