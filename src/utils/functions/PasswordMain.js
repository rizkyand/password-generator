const COMPOSER = {
    ALPHABETIC : {
        keyName : 'alphabetic',
        values : 'abcdefghijklmnopqrstuvwxyz'
    },
    ALPHABETIC_UPPER : {
        keyName : 'alphabetic-upper',
        values : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    },
    NUMERICS : {
        keyName : 'numerics',
        values : '1234567890'
    },
    SYMBOLICS : {
        keyName : 'symbolics',
        values : `!@#$%^&*()_+=|}{;:/?.>,<~`
    },
}

export const generateString = ({size = 10, uppercase = false, numeric = false, symbolic = false} = {}) => {
    //console.log('the requirement: ', size, uppercase, numeric, symbolic);
    let saltBasic = '';
    let saltUpperCase = '';
    let saltNumeric = '';
    let saltSymbolic = '';
    let generatedString='';
    for(let i=0; i<size; i++){
        const randBasic = Math.floor(Math.random() * COMPOSER.ALPHABETIC.values.length);
        const randUpper = Math.floor(Math.random() * COMPOSER.ALPHABETIC_UPPER.values.length);
        const randNumeric = Math.floor(Math.random() * COMPOSER.NUMERICS.values.length);
        const randSymbolic = Math.floor(Math.random() * COMPOSER.SYMBOLICS.values.length);
        saltBasic += COMPOSER.ALPHABETIC.values[randBasic];
        saltUpperCase += COMPOSER.ALPHABETIC_UPPER.values[randUpper];
        saltNumeric += COMPOSER.NUMERICS.values[randNumeric];
        saltSymbolic += COMPOSER.SYMBOLICS.values[randSymbolic];
    }
    generatedString += saltBasic;
    if(uppercase) generatedString+=saltUpperCase;
    if(numeric) generatedString+=saltNumeric;
    if(symbolic) generatedString+=saltSymbolic;
    return generatedString;
}

export const shufflePassword = (obj) => {
    const {size} = obj;
    const str = generateString(obj);
    let generatedPassword = '';
    for(let i = 0; i<size; i++){
        const shuffler = Math.floor(Math.random() * str.length);
        generatedPassword += str[shuffler];
    }
    return generatedPassword;
}