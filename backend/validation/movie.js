const joi = require('joi');

// Define the schema
const schema = joi.object({
    title: joi.string().min(2).max(20).required(),
    year: joi.number().integer().min(1990).max(2024).required() 
});

// Validation middleware
const validateMovie = (req, res, next) => {
    // Validate req.body against the schema
    const { error } = schema.validate(req.formData);
    
    // If there's a validation error
    if (error) {
        return res.status(400).json({
            status: false,
            message: 'Validation Error',
            details: error.details // Send detailed validation error
        });
    }

    // If no error, proceed to the next middleware or route handler
    next();
};

module.exports = validateMovie;
