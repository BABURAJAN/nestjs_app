import {ContactModel} from './contact.model';
import {Contact} from '../contact.entity';

export class ContactModelToEntityMapper{
   async  mapModelToEntity(contactModel: ContactModel): Promise<Contact> {

        const contactEntity =  new Contact();
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