import Console from "@woowacourse/mission-utils/src/console";
import InputView from "../../InputView";
import Random from "@woowacourse/mission-utils/src/random";
import BridgeRandomNumberGenerator from "../../BridgeRandomNumberGenerator";
import BridgeGame from "../../BridgeGame";

class controller{
#arrayBridgeSize=[]

#playerOX

#regame

#takeTry = 0;

    constructor(){
    
    }

    run(){
        
    }

    getbridge(){
        const size = InputView.readBridgeSize();
        // for(let i = 0; i< size; i++){
        //     const randomNumber = BridgeRandomNumberGenerator.generate();
        //     this.#arrayBridgeSize.push(randomNumber)
        // }
        this.#arrayBridgeSize = BridgeMaker.makeBridge(size, BridgeRandomNumberGenerator.generate());
    }
    playGame(){
        this.#takeTry++
        const newGame = new BridgeGame()
        const repeat = true;
        while(repeat === true){
            newGame.move(this.#takeTry,this.#arrayBridgeSize,repeat);
        }

        // 플레이어가 입력값 받음/ 그 입력값이 형식에 맞는지 확인하고 안 맞으면 다시 받음
        // 다리길이배열의 인덱스 값 === this.#try-1일 때 플레이어 입력값과 배열값이 같은가 확인
        // u일때 yes이면 [ o ] no이면 [ x ] 프린트 하고 결과값 저장. 프린트는 기존에 있던것에 이어서 프린트
                    //  [   ]        [   ]
        // yes일때 this.#try - 1 == 다리길이배열의 길이 이면 결과값 프린트
        // no 일때 리게임 여부 물어서 no 이면 마찬가지로 결과값 프린트. 

        // yes일때 this.#try - 1 !== 다리길이배열의 길이 이면 다시 this.playGame()
        // no 일때 리게임 여부 물어서 yes이면 기존 print = '' 한 후 다시 this.playGame()
    }

    printResult(){
        // 지금까지 한 결과값 프린트 - 최종게임 결과
        // 게임 성공여부 프린트
        // 시도 횟수 : this.#try 프린트
    }


    



}

export default controller;