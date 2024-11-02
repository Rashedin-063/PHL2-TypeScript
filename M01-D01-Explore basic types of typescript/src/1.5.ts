// reference type --> Object

const user: {
  // readonly company: string;  // type --> literal type
  company: string;  // type --> literal type
  firstName: string;
  middleName?: string | undefined; // optional type
  lastName: string;
  isMarried: boolean
} = {
  company: 'Programming Hero',
  firstName: 'Rashedin',
  lastName: 'Islam',
  isMarried: true
};


user.company = 'PH'