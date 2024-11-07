{
  //

  // access modifiers

  class BankAccount {
   public readonly id: number;
   public name: string;
   protected _balance: number;


    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    makeDeposit(amount: number) {
      this._balance = this._balance + amount
    }
    getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {
      this._balance = this._balance + 500;
    }
  }

  const myBankAccount = new BankAccount(111, 'Rashedin Islam', 20)

  // myBankAccount.id = 121;
  // myBankAccount._balance = 
  myBankAccount.makeDeposit(10)
console.log(myBankAccount.getBalance());


  //
}