export const validateEmail = (emailAddress) => {
    //console.log(emailAddress);

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(emailAddress)
}