//assignment 11 

let names : string[] = ['lubna' , 'fatima' , 'manahil' , 'ali' ,'hadi']
 //loop method
 for(let i = 0; i < names.length; i++){

    console.log(names[i])
 }


 //for each method
names.forEach(friends => {
    console.log(friends)
});

//assignment 12 writing personalize message to each from the list of names variable
//loop method

for(let i = 0; i < names.length; i++){

    console.log(`hi,${names[i]} how are you today?`)
 }

 //foreach method
 names.forEach(friends => {
    console.log(`hi,${friends} how are you today`)
});
