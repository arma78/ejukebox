export class ContactMe{
  $key: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  createdOn: string = new Date().toISOString().split('T')[0];
  comments: string;
}
