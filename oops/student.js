class student{

    constructor(name,course,degree){

        this.name=name
        this.course=course

        this.degree=degree
    }

    printstudent(){

        console.log(this.name,this.course,this.degree);

    }
}

var obj=new student("arsha","python","bca")


obj.printstudent()