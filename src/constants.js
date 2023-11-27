const MESSAGE_RESPONSES = {
  BAD_REQUEST: "Ensure all required fields are present and have valid values.",
  NOT_FOUND: "No resourse found",
  UNAUTHENTICATED: "You are not authorizated. login o register.",
  INTERNAL_SERVER_ERROR: "Something went wrong try again later"
  
};

const NAME_RESPONSES = {
    BAD_REQUEST: "BadRequestError",
    NOT_FOUND: "NotFoundError",
    UNAUTHENTICATED: "UnauthorizatedError",
    INTERNAL_SERVER_ERROR: "InternalServerError"
};

module.exports = {
  MESSAGE_RESPONSES,
  NAME_RESPONSES,
};
