import { getPool } from './database.js';
import { CustomError, CustomErrorType } from '../utils/utils.js';
import { v4 as uuidv4 } from 'uuid';

const INSERT_USER =
    `INSERT INTO user(id,name,email,username,adress,password)
                 VALUES (UUID_TO_BIN(?),?,?,?,?,?)`;

const UPDATE_USER =
    `UPDATE user set name=?,username=?,adress=?,password=?
            WHERE BIN_TO_UUID(id)=?`;

const SELECT_USER_BY_ID =
    `SELECT BIN_TO_UUID(id) as id,name,email,username,adress
            FROM user
            WHERE id=UUID_TO_BIN(?)`;

const SELECT_USER_BY_USERNAME =
    `SELECT BIN_TO_UUID(id) as id,name,email,username,adress
            FROM user
            WHERE username=?`;

const SELECT_USER_BY_USERNAME_AND_PASSWORD =
    `SELECT BIN_TO_UUID(id) as id,name,email,username,adress
            FROM user
            WHERE username=? AND password=?`;

export async function retrieveUserById(id) {
    try {
        const [rows] = await getPool().execute(SELECT_USER_BY_ID, [id]);
        return rows[0];
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving user by id: ' + id,
            err);
    }
}


export async function retrieveUserByUsernameAndPassword(username,password) {
    try {
        const [rows] = await getPool().execute(SELECT_USER_BY_USERNAME_AND_PASSWORD, [username,password]);
        return rows[0];
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving user by username: ' + username + 'password:'  + password,
            err);
    }
}


export async function createUser(user) {
    if (await retrieveUserByUsernameAndPassword(user.username,user.password)) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'User already exists: ' + user.username,
            null);
    }
    try {
        user.id = uuidv4();
        await getPool().execute(INSERT_USER,
            [
                user.id,
                user.name,
                user.email,
                user.username,
                user.adress,
                user.password
            ]);
        return user;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error creating user: ' + user.email,
            err);
    }
}

export async function updateUser(user) {
    try {
        await getPool().execute(UPDATE_USER,
            [
                user.name,
                user.username,
                user.adress,
                user.password,
                user.id
            ]);
        return user;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error updating user: ' + user.id,
            err);
    }
}