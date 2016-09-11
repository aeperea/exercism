export default class PhoneNumber {
  constructor(num) {
    num = String(num);
    this.phoneNumber = this.parseNumber(num);
  }
  toString() {
    return `(${this.areaCode()}) ${this.phoneNumber.substr(3,3)}-${this.phoneNumber.substr(6,4)}`;
  }
  number() {
    return this.phoneNumber;
  }
  areaCode(){
    return this.phoneNumber.substr(0,3);
  }
  parseNumber(num){
    let badNum   = "0000000000";
    let phoneNum = num.replace(/[\(\) -\.]/g,'')
    let size     = phoneNum.length;

    if(!this.hasOnlyNumbers(phoneNum))     {return badNum;}
    if(size === 11 && phoneNum[0] === "1") {return phoneNum.substr(1,10);}
    if(size === 10)                        {return phoneNum;}
    return badNum;
  }
  hasOnlyNumbers(num){
    let re = /^[0-9]+$/;
    return re.test(num);
  }
}
