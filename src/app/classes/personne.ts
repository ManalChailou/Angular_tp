export class Personne {
  constructor(private _num: number, private _nom: string = '', private _prenom: string = '') {
  }

  get num(): number {
    return this._num;
  }

  set num(value: number) {
    this._num = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }
}
