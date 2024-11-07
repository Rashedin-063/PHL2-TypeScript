/**
 * Task 3: Object Types, Type Alias, & Literal Types
Objective: Define a structured Person object using Type Aliases.

Instructions:

Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.
 */

type MaritalStatus = 'single' | 'married' | 'divorced' | 'widowed';
type EyeColor = 'brown' | 'blue' | 'green' | 'hazel' | 'gray' | 'other';
type HairColor = 'black' | 'brown' | 'blonde' | 'red' | 'gray' | 'other';

type Person = {
  name: string;
  address: string;
  hair: HairColor;
  eye: EyeColor;
  color: string; // if 'color' is skin tone or preferred color, clarify in naming
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: Array<{ name: string; relation: string }>;
  job?: string; // optional if they may be unemployed
  skills: string[];
  maritalStatus: MaritalStatus;
  friends: string[];
};
