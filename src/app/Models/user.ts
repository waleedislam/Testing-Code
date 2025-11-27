export class User{

    constructor(name:string , gender:string , subType:string , status:string){
        this.name=name;
        this.gender=gender;
        this.status=status;
        this.subType=subType;
    }

    name!:string;
    gender!:string;
    subType!:string;
    status!:string;
}