import errorMessage from "../constant/error";
import updown from "../constant/updown";

class validateUpdown{
    checkUpdown(upAndDown){
        if(!updown.upAndDown.includes(upAndDown)){
            throw new Error(errorMessage.UDerror);
        }
        if(!updown.upAndDown.includes(upAndDown) && updown.smallWord.includes(upAndDown)){
            throw new Error(errorMessage.smallWord);
        }
        return upAndDown;
    }
}

export default validateUpdown;