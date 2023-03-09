export {historyItems};

class historyItem {
    time;
    txType;
    address;
    blockNumber;
    value;
    constructor(time, txType, address, blockNumber, value) {
      this.time = time;
      this.txType = txType;
      this.address = address;
      this.blockNumber = blockNumber;
      this.value = value;
    }
  
    myprint() {
      console.log(this.time, "ererere")
    }
  }
  
  class historyItems {
    constructor(){
      this.items = [];
    }
  
    newItem(time, txType, address, blockNumber, value){
      let item = new historyItem(time, txType, address, blockNumber, value);
      this.items.push(item);
      return item
    }
  
    get allItems(){
      return this.items;
    }
  
    get numberOfItems(){
      return this.items.length
    }
  }