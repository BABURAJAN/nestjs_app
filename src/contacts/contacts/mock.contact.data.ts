import {Contact_1} from '../contact_1.entity';
import { ContactModel } from './contact.model';

export const findAllContact_Mock_data: Contact_1[] = [{
    "id":0,
    "n_id":1,
    "firstName":"babu",
    "lastName":"singh",
    "email":"babusingh@gmail.com",
    "phone":"09909090909",
    "city":"motihari",
    "country":"india"
}]

export const createContact_Mock_data: Contact_1 = {
    "id":0,
    "n_id":1,
    "firstName":"babu",
    "lastName":"singh",
    "email":"babusingh@gmail.com",
    "phone":"09909090909",
    "city":"motihari",
    "country":"india"
}

export const createContact_Mock_model_data: ContactModel = {
    "id_":0,
    "n_id_":1,
    "firstName_":"babu",
    "lastName_":"singh",
    "email_":"babusingh@gmail.com",
    "contact_":"09909090909",
    "city_":"motihari",
    "country_":"india"
}


export const updatedContact_Mock_data: Contact_1 = {
    "id":0,
    "n_id":1,
    "firstName":"babu",
    "lastName":"singh",
    "email":"babusingh@gmail.com",
    "phone":"09909090909",
    "city":"motihari",
    "country":"india"
}



export const mapModelToEntity: Contact_1 =  {
    "id":0,
    "n_id": 1,
    "firstName": "babu",
    "lastName": "singh",
    "email": "babusingh@gmail.com",
    "phone": "09909090909",
    "city": "motihari",
    "country": "india" 
}

export const mapEntityToModel: ContactModel =  {
    "id_": 0,
    "n_id_": 1,
    "firstName_": "babu",
    "lastName_": "singh",
    "email_": "babusingh@gmail.com",
    "contact_": "09909090909",
    "city_": "motihari",
    "country_": "india" 
}