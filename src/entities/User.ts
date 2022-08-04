import { Entity,BaseEntity, Column, PrimaryColumn, CreateDateColumn } from "typeorm";

@Entity('user')
export class User extends BaseEntity{

    @PrimaryColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;
    
    @Column({
        type:"numeric"
    })
    trophies: number;

    @CreateDateColumn()
    last_sign_in: Date;

    @CreateDateColumn()
    first_sign_in: Date;


    
}