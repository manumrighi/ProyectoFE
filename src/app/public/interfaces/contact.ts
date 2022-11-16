export interface Contact {
  id: number,
  name: string,
  lastName: string,
  number: number,
  email: string,
  favorite?: boolean,
}

export const defaultContact:Contact = {
  'id': 0,
  'name': "Horacio",
  'lastName': "Larreta",
  'number': 892347189,
  'email': "hola@gmail.com",
  'favorite': true,
}

