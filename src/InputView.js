import { Console } from "@woowacourse/mission-utils/src/console";
import informMessage from "./domain/constant/message";
import validateLength from "./domain/validate/validateLength";

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    const sizeNumber = await Console.readLine(informMessage.bridgeLength,(lengthNumber)=>{
      try {
        const temporaryLength = new validateLength()
        temporaryLength.checkLength(lengthNumber);
      } catch(err) {
        Console.print(err);
        return this.readBridgeSize();
      }

    })
    return sizeNumber;
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {},

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
