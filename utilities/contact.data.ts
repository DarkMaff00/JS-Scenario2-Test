class ContactData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  title: string;
  birthdate: string;
  email: string;
  constructor(
    firstName: string,
    lastName: string,
    phoneNumber: string,
    title: string,
    birthdate: string,
    email: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.title = title;
    this.birthdate = birthdate;
    this.email = email;
  }
}

export default new ContactData(
  "Jack",
  "Oak",
  "333 222 999",
  "Director",
  "22.12.1980",
  "jack.oak@mail.com"
);
