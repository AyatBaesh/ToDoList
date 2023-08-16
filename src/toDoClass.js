export class ToDoDTO{
    constructor(name, status, index){
        this.name = name;
        this.status = status;
        this.index = index;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    getStatus(){
        return this.status;
    }
    changeStatus(){
        if(this.status){
            this.status = false;
        }else{
            this.status = true;
        }
    }

}
