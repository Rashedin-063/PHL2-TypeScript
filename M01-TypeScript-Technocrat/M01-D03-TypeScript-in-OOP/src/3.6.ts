{
  //

  // getter & setter

class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  set deposit(amount: number) {
    this._balance = this._balance + amount
  }

  get balance () {
  return this._balance
}
}

  
  const myBankAccount = new BankAccount(111, 'Rashedin Islam', 20);

  myBankAccount.deposit = 100;

  console.log(myBankAccount.balance)
  
  /**
   * getter and setter are functions in class that can be accessable outside like a property;
   */
 


  //
}