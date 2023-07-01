import { v4 as uuidv4 } from "uuid";

export class Recados {
  private _id: string;
  constructor(public _descricao: string, public _detalhes: string) {
    this._id = uuidv4();
  }

  public get id() {
    return this._id;
  }

  public get descricao() {
    return this._descricao;
  }

  public set setDescricao(newDescricao: string) {
    this._descricao = newDescricao;
  }

  public get detalhes() {
    return this._detalhes;
  }

  public set setDetalhes(newDetalhes: string) {
    this._detalhes = newDetalhes;
  }

  public toJson() {
    return {
      id: this._id,
      descricao: this._descricao,
      detalhes: this._detalhes,
    };
  }
}
