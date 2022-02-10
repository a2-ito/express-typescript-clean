class User {
  private _id: number;
  private _name: string;

  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get id() {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public constructor(
    id: number,
    name: string
  ) {
    this._id = id;
    this._name = name;
  }
}

export { User };
