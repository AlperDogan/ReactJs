export interface IUser {
    name: string,
    surname: string,
    age: number,
    status: boolean,
    email?: string,
    adress?: IAddress
}


export interface IAddress {
    title: string,
    no: string,
    code: number,
}

export interface IAction {
    id:0,
    funcCall:Function 
    } 





