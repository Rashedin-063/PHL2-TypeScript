{
  //

  // generic interface

  interface Developer<T, X> {
    name: string;
    computer: {
      brand: string;
      model: string;
      price: number;
    },
    smartWatch: T;
    bike?: X
  }

  interface DevWatch {

    brand: string;
    model: string;
    display: string;
    trackHeartBeat?: boolean;
    sleepTrack?: boolean;
  
  }


  const newDeveloper: Developer<DevWatch, null> = {
    name: 'Rashedin',
    computer: {
      brand: 'hp',
      model: '15sdd',
      price: 84000
    },
    smartWatch: {
      brand: 'Emilab',
      model: 'k277',
      display: 'AMOLED'
    },
  }

  interface Bike {
    brand: string;
    price: number;
    isPremium: boolean;
  }
  

  const nextDeveloper: Developer<DevWatch, Bike> = {
    name: 'Rashedin',
    computer: {
      brand: 'Apple',
      model: '15sdd',
      price: 184000,
    },
    smartWatch: {
      brand: 'Apple',
      model: 'k277',
      display: 'AMOLED',
      trackHeartBeat: true,
      sleepTrack: true,
    },
    bike: {
      brand: 'Yamaha',
      price: 232232,
      isPremium: true
    }
  };




  //
}