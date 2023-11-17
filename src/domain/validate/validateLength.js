import errorMessage from "../constant/error";

class validateLength{
    checkLength(lengthNumber){
        const bridgeLength = Number(lengthNumber)
        if(isNaN(bridgeLength)){
            throw new Error(errorMessage.length);
        }
        if(bridgeLength < 3){
            throw new Error(errorMessage.range);
        }
        if(bridgeLength > 20){
            throw new Error(errorMessage.range);
        }
    }
}

export default validateLength;