const validator = {}

validator.emailIdValidator = (emailId)=>{
    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailId)){
        return true;
    }
    else return false
};
validator.firstNameValidater = (firstName)=>{
    if(firstName){
        return true;
    }
    return false
}

validator.lastNameValidater = (lastName)=>{
    if(lastName){
        return true;
    }
    return false
}

validator.messageValidater = (message)=>{
    if(message){
        return true;
    }
    return false
}

module.exports = validator