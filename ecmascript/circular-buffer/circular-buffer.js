class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.clear();
  }
  read() {
    let value = this.buffer[this.indexRead];
    if (typeof value === 'undefined') {throw bufferEmptyException();}

    delete this.buffer[this.indexRead];
    this.indexRead = this.incrementIndex(this.indexRead);
    this.fills--;
    return value;
  }
  write(n) {
    if (n === null || typeof n === 'undefined') {return;}
    if (this.fills === this.size) {throw bufferFullException();}

    this.fills++;
    this.buffer[this.indexWrite] = n;
    this.indexWrite = this.incrementIndex(this.indexWrite);
  }
  forceWrite(n) {
    if (this.fills !== this.size) {return this.write(n);}

    this.buffer[this.indexWrite] = n;
    this.indexWrite = this.incrementIndex(this.indexWrite);
    this.indexRead  = this.incrementIndex(this.indexRead);
  }
  incrementIndex(index){
    return (index + 1) % this.size;
  }
  clear(){
    this.buffer     = [];
    this.indexWrite = 0;
    this.indexRead  = 0;
    this.fills      = 0;
  }
}

export function bufferFullException() {
  return 'Buffer is Full';
}

export function bufferEmptyException() {
  return 'Buffer is Empty';
}

export default (n) => {
  return new CircularBuffer(n);
}
