// WIP TO GET BETTER ERROR HANDLING FOR MORE INFO

function errorHandler(int) {
    // Array for error messages
    const errorMessages = {
        400: 'Bad Request (Report this to the developer)',
        403: 'Forbidden (Did you forget the token or inputted it incorrectly?)',
        404: 'Not Found (Report this to the developer)',
        422: 'Unprocessable Entity (No users in server)',
        429: 'Too Many Requests (You are being ratelimited **MESURING RATELIMITS TO PREVENT THIS IS PLANNED**)',
        500: 'Internal Server Error (Is roblox down?)'
    };

    // Return the error message based on the status code given
    return errorMessages[int];
}

module.exports = errorHandler;