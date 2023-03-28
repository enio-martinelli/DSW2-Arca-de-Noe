import { getPool } from './database.js';
import { CustomError, CustomErrorType } from '../utils/utils.js';
import { v4 as uuidv4 } from 'uuid';

const INSERT_DOG =
    `INSERT INTO dog(id,dog_name,breed,description,url_image,phone)
                 VALUES (UUID_TO_BIN(?),?,?,?,?,?)`;

const UPDATE_DOG =
    `UPDATE dog set dog_name=?, breed=?, description=?, url_image=?, phone=?
            WHERE BIN_TO_UUID(id)=?`;

const SELECT_DOG_BY_ID =
    `SELECT BIN_TO_UUID(id) as id,dog_name,breed,description,url_image,phone
            FROM dog
            WHERE id=UUID_TO_BIN(?)`;

const SELECT_DOG_BY_BREED =
    `SELECT BIN_TO_UUID(id) as id,dog_name,breed,description,url_image,phone
            FROM dog
            WHERE breed=?`;

export async function createDog(dog) {
    try {
        await getPool().execute(INSERT_DOG,
            [
                uuidv4(),
                dog.dog_name,
                dog.breed,
                dog.description,
                dog.url_image,
                dog.phone
            ]);
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error creating dog: ' + dog.dog_name,
            err);
    }
}

export async function updateDog(dog) {
    try {
        await getPool().execute(UPDATE_DOG,
            [
                dog.dog_name,
                dog.breed,
                dog.description,
                dog.url_image,
                dog.phone,
                dog.id
            ]);
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error updating dog: ' + dog.id,
            err);
    }
}

export async function retrieveDogById(id) {
    try {
        const [rows] = await getPool().execute(SELECT_DOG_BY_ID, [id]);
        return rows;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving dog : ' + id,
            err);
    }
}

export async function retrieveDogByBreed(breed) {
    try {
        const [rows] = await getPool().execute(SELECT_DOG_BY_BREED);
        return rows;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving dogs: ' + breed,
            err);
    }
}