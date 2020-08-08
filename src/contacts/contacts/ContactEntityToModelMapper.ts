import {ContactModel} from './contact.model';
import {Contact} from '../contact.entity';

export class ContactEntityToModelMapper{
    async mapEntityToModel(contactEntity: Contact): Promise<ContactModel> {
        const contactModel =  new ContactModel();
        contactModel.id_ = contactEntity.id;
        contactModel.n_id_ = contactEntity.n_id;
        contactModel.firstName_ = contactEntity.firstName;
        contactModel.lastName_ = contactEntity.lastName;
        contactModel.email_ = contactEntity.email;
        contactModel.contact_ = contactEntity.phone;
        contactModel.city_ = contactEntity.city;
        contactModel.country_ = contactEntity.country;

        return contactModel;
    }
}