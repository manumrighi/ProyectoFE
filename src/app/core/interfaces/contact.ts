export interface Contact {
  id: number,
  firstName: string,
  lastName: string,
  phoneNumber: number,
  email: string,
  favorite?: boolean
}

export const defaultContact:Contact = {
  'id': 0,
  'firstName': "Horacio",
  'lastName': "Larreta",
  'phoneNumber': 892347189,
  'email': "hola@gmail.com",
  'favorite': true
}

