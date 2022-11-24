export interface Contact {
  id: number,
  name: string,
  number: number,
  email: string,
  favorite?: boolean
}

export const defaultContact:Contact = {
  'id': 0,
  'name': "Santiago Darder ",
  'number': 892347189,
  'email': "hola@gmail.com",
  'favorite': true
}

export interface ContactJsonPlaceholder {
  id?: number,
  name?: string,
  number?: number,
  email?: string,
  favorite?: boolean
}

