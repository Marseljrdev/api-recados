import { v4 as uuidv4 } from "uuid";
import { Recados } from "./recados.models";

export class User {
  private _id: string;
  constructor(
    private _name: string,
    private _cpf: string,
    private _email: string,
    private _password: string,
    private _recados?: Recados[]
  ) {
    this._id = uuidv4();
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get cpf() {
    return this._cpf;
  }

  public get email() {
    return this._email;
  }

  public get password() {
    return this._password;
  }

  public get recados() {
    return this._recados;
  }

  public toJson() {
    return {
      id: this._id,
      name: this._name,
      cpf: this._cpf,
      email: this._email,
      password: this._password,
      recados: this._recados,
    };
  }
}
