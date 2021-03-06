exports.apiResponse = function(req, res, statusCode, message, result){
  if(statusCode!=200){
    //log the error
    exports.log("Error message sent: " + message, req.user, req);
  }
  res.send({
    status: statusCode, //http status code
    statusMessage:message,
    result: result
  });
}

exports.isNullOrUndefined = function(val){
  return val == null || typeof val === 'undefined';
}

/**
 * Logs the message including date
 */
exports.log = function(message,user,req){
  var finalMessage = new Date().toString()+" - ";

  if(!exports.isNullOrUndefined(user) && !exports.isNullOrUndefined(user.givenName) && !exports.isNullOrUndefined(user.familyName)){
    finalMessage+=user.givenName+" "+user.familyName+" - ";
  }
  
  finalMessage += message;

  if(!exports.isNullOrUndefined(req) && !exports.isNullOrUndefined(req.originalUrl)){
    finalMessage+=" - " + req.originalUrl;
  }

  console.log(finalMessage);
}