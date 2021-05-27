export class Ticket {

  constructor(public name: string,
    public description: string,
    public url: string) { }

  GetUrl(): string {
    return `url('${this.url}')`;
  }

  toBeTruthy(): boolean {
    return true;
  }
}
