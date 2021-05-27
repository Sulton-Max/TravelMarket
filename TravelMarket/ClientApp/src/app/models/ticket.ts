export class Ticket {

  constructor(public name: string,
    public description: string,
    public url: string) { }

  GetUrl(): string {
    console.log(`url('${this.url}')`);  
    return `url('${this.url}')`;
  }

  toBeTruthy(): boolean {
    return true;
  }
}
