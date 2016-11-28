module.exports = async(ctx, next) => {
    try {
        await next();
    } catch (error) {
        ctx.status = 500;
        ctx.contentType = 'application/json';
        ctx.body = JSON.stringify({
            success: false,
            message: error.stack
        });

        // since we handled this manually we'll
        // want to delegate to the regular app
        // level error handling as well so that
        // centralized still functions correctly.
        ctx.app.emit('error', error, this);
    }
};