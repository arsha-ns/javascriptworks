var students={
    name:"arsha",
    course:"python",
    place:"calicut",
    total:300,

    points:10
}

console.log(students.name)

students.degree="bca"

console.log(students);

console.log(students.degree);


if ("degree" in students){

    console.log("present");
}
else{
    console.log("not present");
}


if("points" in students){

    //update

    students.points+=10
}

else{
    students.points=10
}

console.log(students.points);