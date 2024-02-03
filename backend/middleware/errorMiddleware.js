const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
}
const errorJandler = (err,req,res,next) =>{
    let statusCode = res.statusCode === 200 ? 5-- : res.statusCode;
    let message = err.message;
    // check for mongoose bbad object

    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        
    }
}