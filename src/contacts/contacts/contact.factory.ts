import {Contact_1} from '../contact_1.entity';

export class ContactFactory {
    make: 'new Contact';
  
    public static build(opts: any = {}) {
      return new Contact_1();
    }
  
    public static buildList(length: number, opts: any = {}) {
      return Array.apply(null, { length }).map(() => this.build(opts));
    }
  
    constructor(opts: any = {}) {
      Object.assign(this, opts);
    }
  }