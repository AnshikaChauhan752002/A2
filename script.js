//Question 1

function findGrades(){
    let M=30
    ;
    switch(true){
        case(41<=M && M<=50):
            console.log("A");
            break;
        case(31<=M && M<=40):
            console.log("B");
            break;
        case(21<=M && M<=30):
            console.log("C");
            break;
        case(11<=M && M<=20):
            console.log("D");
            break;
        case(M<=10):  
            console.log("E");
            break;    
        default:
            console.log("Invalid Marks");
            console.log("Enter your marks from 0 to 50");
            break;
    }
}
 
findGrades();

//Question 2

function getValue(){
    let A = "P";
if(A === "P" || A === "p"){
    console.log("PreBytes");
}
else if(A === "Z" || A === "z"){
    console.log("Zenith");
}
else if(A === "E" || A === "e"){
    console.log()
}
else if(A === "D" || A === "d"){
    console.log("Data Structure");
}
else{
    console.log("invalid");
}
}  

getValue();

//Question 3

function findMax(){
    let a = 5;
    let b = 15;
    let c = 8;
if(a > b){
     if(a > b){
        console.log(a);
     }else{
        console.log(c);
     }
} else{
    if(b > c){
        console.log(b);
    }else{
        console.log(c);
    }
}
if(a == b && b == c){
    console.log("-1");
}else{
    console.log("unequal");
}
}

findMax();

//Question 4

function findSecondSmallest(){
    let x = 3;
    let y = 5;
    let z = 9;

    if(x > y){
        if(x < z){
            console.log(z);
        }else{
            console.log(x);
        }
    }else{
        if(y > z){
            console.log(z)
        }else{
            console.log(y)
        }
    }
}

findSecondSmallest();

//Question 5

function triangleCheak(){
    let A = 40;
    let B = 75;
    let C = 65;

    let Sum = (A + B + C);
    if (Sum > 90){
        console.log("Acute Triangle");
    }else if (Sum = 90){
        console.log("Obtuse Triangle");
    }
}

triangleCheak();