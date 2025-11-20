import HttpError from "../helpers/HttpError.js";

const validateBody = (schema) => (req, res, next) => {
  const { error: validationError } = schema.validate(req.body, {
    abortEarly: false,
  });

  if (validationError) {
    const errorMessage = validationError.details
      .map((detail) => detail.message)
      .join(", ");

    return next(HttpError(400, errorMessage));
  }

  next();
};

export default validateBody;