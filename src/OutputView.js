import Console from "@woowacourse/mission-utils/src/console";

/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(taketry, upAndDown) {
    if(taketry === 1 && upAndDown ==='U'){
      Console.print('[ o ]');
      Console.print('[   ]');
    }


    if(upAndDown === 'U' && win === true){
      // 기존에 있던 것(저장되어 있어야 함)에서 텍스트를 배열로 만든후 뒤에 하나를 자르고 '|', 'o ]' push 하여 저장하고 출력함
      Console.print('윗라인')
      // 기존에 있던 것(저장되어 있어야 함)에서 텍스트를 배열로 만든후 뒤에 하나를 자르고 '|', '  ]' push 하여 저장하고 출력함
      Console.print('아랫라인')
    }
    if(upAndDown === 'U' && win === false){
      // 기존에 있던 것(저장되어 있어야 함)에서 텍스트를 배열로 만든후 뒤에 하나를 자르고 '|', '  ]' push 하여 저장하고 출력함
      Console.print('윗라인')
      // 기존에 있던 것(저장되어 있어야 함)에서 텍스트를 배열로 만든후 뒤에 하나를 자르고 '|', 'o ]' push 하여 저장하고 출력함
      Console.print('아랫라인')
    }
    if(upAndDown === 'D' && win === true){
      // 기존에 있던 것(저장되어 있어야 함)에서 텍스트를 배열로 만든후 뒤에 하나를 자르고 '|', 'x ]' push 하여 저장하고 출력함
      Console.print('윗라인')
      // 기존에 있던 것(저장되어 있어야 함)에서 텍스트를 배열로 만든후 뒤에 하나를 자르고 '|', '  ]' push 하여 저장하고 출력함
      Console.print('아랫라인')
    }
    if(upAndDown === 'D' && win === false){
      // 기존에 있던 것(저장되어 있어야 함)에서 텍스트를 배열로 만든후 뒤에 하나를 자르고 '|', '  ]' push 하여 저장하고 출력함
      Console.print('윗라인')
      // 기존에 있던 것(저장되어 있어야 함)에서 텍스트를 배열로 만든후 뒤에 하나를 자르고 '|', 'x ] push 하여 저장하고 출력함
      Console.print('아랫라인')
    }

  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
