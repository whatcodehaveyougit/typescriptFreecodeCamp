console.log('ehlo wolrd')

class User {

  email: string
  name: string
  private readonly city: string = 'Jaipur' // Can only access it from within the class

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name
  }
}

const test = new User('test@tst.com', "yo")
// test.city = 'Aberdeen' Cannot as it is readonly