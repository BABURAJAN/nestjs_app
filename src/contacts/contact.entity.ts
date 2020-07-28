import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contact_1')
export class Contact {
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column({name: 'n_id'})
    n_id: number;

    @Column({name: 'firstName'})
    firstName: string;

    @Column({name: 'lastName'})
    lastName: string;

    @Column({name: 'email'})
    email: string;

    @Column({name: 'phone'})
    phone: string;

    @Column({name: 'city'})
    city: string;

    @Column({name: 'country'})
    country: string;
}