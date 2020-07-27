import {Contact} from '../contact.entity';

export class ContactFactory {
    make: 'new Contact';
  
    public static build(opts: any = {}) {
      return new Contact();
    }
  
    public static buildList(length: number, opts: any = {}) {
      return Array.apply(null, { length }).map(() => this.build(opts));
    }
  
    constructor(opts: any = {}) {
      Object.assign(this, opts);
    }
  }