export default interface Client {
  _id: string;
  name: string;
  surname: string;
  phone: string;
  age?: number | null;
}
