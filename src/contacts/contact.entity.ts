import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

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