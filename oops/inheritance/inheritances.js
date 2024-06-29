class parent{
    m1(){
        console.log("inside paranet m1 method");
    }

}
class child extends parent{
    m2(){
        console.log("inside child m2 method");
    }
}

var ch=new child()

ch.m2()

ch.m1()


//multiple inheritance is not posssible


// eg:
class grandparent{
    m1(){
        console.log("inside paranet m1 method");
    }

}


class parent{
    m1(){
        console.log("inside paranet m1 method");
    }

}
class child extends parent{
    m2(){
        console.log("inside child m2 method");
    }
}

var ch=new child()

ch.m2()

ch.m1()