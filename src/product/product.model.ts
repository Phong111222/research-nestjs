export class Product {
  constructor(
    private _id: string,
    private _title: string,
    private _description: string,
    private _price: number,
  ) {}
  public get id() {
    return this._id;
  }
  public get title() {
    return this._title;
  }
  public get description() {
    return this._description;
  }
  public get price() {
    return this._price;
  }

  public set title(title: string) {
    this._title = title;
  }
  public set description(description: string) {
    this._description = description;
  }
  public set price(price: number) {
    this._price = price;
  }
}
