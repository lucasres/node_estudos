var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y),
}

function solveRect(l,b) {
    if (l <= 0 || b <= 0) {
        console.log(`L or B must be great of 0`);
    } else {
        let a = rect.area(l,b);
        let p = rect.perimeter(l,b);
        console.log(`Area:${a} | perimeter:${p}`);
    }
}

//call function
solveRect(10,2);
solveRect(0,2);