
let count = 0;
const loggers = (req,res, next) => {
    
    console.log(`Request from ${req.method}`)
    count+=1;
    console.log(`Reques Number: ${count}`)
    next();
}

module.exports = loggers;