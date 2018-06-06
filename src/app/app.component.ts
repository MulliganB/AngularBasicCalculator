import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  currentSum: string;
  number: String[] = [];
  number1: number;
  number2: number;
  answer: number;
  valueCount: boolean;
  equalsFlag: boolean;
  positivityFlag: boolean;
  numberFlag: boolean;
  divideFlag: boolean;
  multiplyFlag: boolean;
  subtractFlag: boolean;
  additionFlag: boolean;

  initialise() {
    this.currentSum = '';
    this.number = [];
    this.number1 = 0;
    this.number2 = 0;
    this.answer = 0;
    this.valueCount = true;
    this.positivityFlag = false;
    this.divideFlag = false;
    this.numberFlag = false;
    this.multiplyFlag = false;
    this.subtractFlag = false;
    this.additionFlag = false;
  }

  cancelLastInput() {
    if (this.equalsFlag) {
      this.resetDisplay();
    } else {
      const input = document.querySelector('input');
      if (this.valueCount) {
        this.number1 = 0;
        this.number = [];
        input.value = '+0';
      } else {
        this.number2 = 0;
        this.number = [];
        input.value = '+0';
      }
    }
  }

  cancelAllInputs() {
    this.resetDisplay();
    this.number1 = 0;
    this.number2 = 0;
    this.number = [];
    this.answer = 0;
    this.currentSum = '';
    this.equalsFlag = false;
    this.positivityFlag = false;
    this.valueCount = true;
    this.divideFlag = false;
    this.multiplyFlag = false;
    this.subtractFlag = false;
    this.additionFlag = false;
    const input = document.querySelector('input');
    input.value = '+0';
  }

  cancelEqual() {
    this.number1 = 0;
    this.number2 = 0;
    this.number = [];
    this.answer = 0;
    this.currentSum = '';
    this.valueCount = true;
    this.positivityFlag = false;
    this.divideFlag = false;
    this.multiplyFlag = false;
    this.subtractFlag = false;
    this.additionFlag = false;
  }

  backspace() {
    const input = document.querySelector('input');
    this.resetDisplay();
    if (input.value === '+0') {
      console.log('Not Working');
    } else {
      this.number.pop();
      input.value = input.value.substr(0, (input.value.length - 1));
      console.log('Working');
    }
  }

  divide() {
    this.createNumber();
    this.resetDisplay();
    this.divideFlag = true;
    this.numberFlag = true;
    if (this.multiplyFlag) {
      this.multiplyFlag = false;
    }
    if (this.subtractFlag) {
      this.subtractFlag = false;
    }
    if (this.additionFlag) {
      this.additionFlag = false;
    }
  }

  multiply() {
    this.createNumber();
    this.resetDisplay();
    this.multiplyFlag = true;
    this.numberFlag = true;
    if (this.divideFlag) {
      this.divideFlag = false;
    }
    if (this.subtractFlag) {
      this.subtractFlag = false;
    }
    if (this.additionFlag) {
      this.additionFlag = false;
    }
  }

  subtract() {
    this.createNumber();
    this.resetDisplay();
    this.subtractFlag = true;
    this.numberFlag = true;
    if (this.multiplyFlag) {
      this.multiplyFlag = false;
    }
    if (this.divideFlag) {
      this.divideFlag = false;
    }
    if (this.additionFlag) {
      this.additionFlag = false;
    }
  }

  addition() {
    this.createNumber();
    this.resetDisplay();
    this.additionFlag = true;
    this.numberFlag = true;
    if (this.multiplyFlag) {
      this.multiplyFlag = false;
    }
    if (this.subtractFlag) {
      this.subtractFlag = false;
    }
    if (this.divideFlag) {
      this.divideFlag = false;
    }
  }

  addDecimal() {
    this.resetDisplay();
    const input = document.querySelector('input');
    this.number.push('.');
    if (input.value === '+0') {
      input.value = '+0';
    } else {
      input.value += '.';
    }
  }

  reversePositivity() {
    this.resetDisplay();
    const input = document.querySelector('input');
    if (this.positivityFlag) {
      this.positivityFlag = false;
      input.value = '+' + input.value;
    } else {
      this.positivityFlag = true;
      input.value = '-' + input.value;
    }
  }

  resetDisplay() {
    if (this.equalsFlag) {
      const input = document.querySelector('input');
      input.value = '+0';
      this.equalsFlag = false;
    }
  }

  equals() {
    this.equalsFlag = true;
    this.createNumber();
    if (this.multiplyFlag) {
      this.answer = this.number1 * this.number2;
    } else if (this.subtractFlag) {
      this.answer = this.number1 - this.number2;
    } else if (this.divideFlag) {
      this.answer = this.number1 / this.number2;
    } else if (this.additionFlag) {
      this.answer = this.number1 + this.number2;
    }
    const input = document.querySelector('input');
    input.value = this.answer.toString();
    console.log(this.answer);
    this.cancelEqual();
  }

  addNumber(number: number) {
    this.resetDisplay();
    const input = document.querySelector('input');
    if (this.numberFlag) {
      input.value = '+0';
      this.numberFlag = false;
    }
    this.number.push(number.toString());
    if (input.value === '+0') {
      input.value = number.toString();
    } else {
      input.value += number.toString();
    }
  }

  createNumber() {
    let temp = '';
    if (this.valueCount) {
      for (let i = 0; i < this.number.length; i++) {
        temp += this.number[i];
        this.number1 = Number(temp);
      }
      if (this.positivityFlag) {
        this.number1 = this.number1 * -1;
        this.positivityFlag = false;
      }
      const input = document.querySelector('input');
      input.value = this.number1.toString();
      this.number = [];
      this.valueCount = false;
    } else {
      for (let i = 0; i < this.number.length; i++) {
        temp += this.number[i];
        this.number2 = Number(temp);
      }
      if (this.positivityFlag) {
        this.number2 = this.number2 * -1;
        this.positivityFlag = false;
      }
      const input = document.querySelector('input');
      input.value = this.number2.toString();
      this.number = [];
      this.valueCount = true;
    }
    console.log(temp);
  }

}
