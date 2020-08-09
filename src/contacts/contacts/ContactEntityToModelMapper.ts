import {ContactModel} from './contact.model';
import {Contact_1} from '../contact_1.entity';

export class ContactEntityToModelMapper{
    async mapEntityToModel(contactEntity: Contact_1): Promise<ContactModel> {
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