import {ContactModel} from './contact.model';
import {Contact_1} from '../contact_1.entity';

export class ContactModelToEntityMapper{
   async  mapModelToEntity(contactModel: ContactModel): Promise<Contact_1> {

        const contactEntity =  new Contact_1();
        contactEntity.n_id = contactModel.n_id_;
        contactEntity.firstName= contactModel.firstName_;
        contactEntity.lastName = contactModel.lastName_;
        contactEntity.email = contactModel.email_;
        contactEntity.phone = contactModel.contact_;
        contactEntity.city = contactModel.city_;
        contactEntity.country = contactModel.country_;
        return contactEntity;

    }
}