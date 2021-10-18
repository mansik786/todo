
let begin = prompt("what would you like to start with?"); //reassigning input using LET
//storing to do list in array 
//ADDING in NOTES preliminary 
const notes =['First Note to Edit from US','Can have another as well for Today'];//adding something in empty array
while(begin !== 'quit' && begin !== 'q'){ // or will disrupt > thus && > for any of them
//checking for list > if there input = list 
    if(begin === "list"){
        console.log("----------");
        //printing each thing from notes'array with index >using FOR LOOP
        for(let i =0 ; i < notes.length; i++){ // incrementing till highest in ARRAY
                console.log(`${i}: ${notes[i]}`);   //print string> actual notes  or use For each  
        }
        console.log("----------");
    }
//adding another feature> to add new notes by USER 
        else if(begin ==='new'){
            const byyou = prompt("YOU ARE READY TO USE ,ADD ACCORDING TO YOU");
            //take result from here and add to our above array mentioned by us or add in given array
            //thus, using push 
            notes.push(byyou);
            //feedback
            // & LIST FEATURE IN APP
//we need index also > to use delete  feature 
            console.log(`${byyou} added to notes`);
            //FUNCTIONING IN BROWSER > INPUT>
            //NEW 
            //will ask  >"YOU ARE READY TO USE ,ADD ACCORDING TO YOU"
            //input list will display all added

        }
//DELETE FUNCTIONING HERE
        else if(begin=== "delete"){
            //need to ask what is to Delete?// entering using prompt
            const index = parseInt(prompt("ENTER INDEX NUMBER TO DELETE:"))
            //another problem is : conversion of index > that converts to string 
        //if string is input to delete ,
        // by default that will delete whatever element is at index 0
        //solution for that is convert it into PARSE INT
//prompt("ENTER INDEX NUMBER TO DELETE:") intO parseint > gives/returns number instead of string
//or NaN> CONTAIN VALID INT using Number.NaN() >t/f 
//accepted is Number.NaN(NaN)> true/Number.NaN(15651)> FALSE
           //now to check NaN while storing in const
if(!Number.isNaN(index)){
        //2nd case
            //browser days:ENTER INDEX NUMBER TO DELETE:
            //after inputting 2 > console says delete
            //REAL WORK
            //now take INDEX  and remove element at index given 
            //USING SPLICE> as mentioning start index element of NOTES and how many to delete particular
            // example > i want to delete 3 item> that is added new one in browser 

            //.splice[3][1] >   3 means at index of three , 1 is how many items after i want to delete
            //if 2> [3][2] take this / for 3 > [3][3]
            const store = notes.splice(index, 1)//give result as array and store it in variable
            // taking index from const index > ("ENTER INDEX NUMBER TO DELETE:")
            //(index, 1) , 1 > means only one element
            console.log(`Deleted  ${store[0]}`);// using const store above here
}
else {
    console.log('unknown INDEX')
}

            //OUTPUT
            // hi i wana delete this added to notes
            // todo.js:9 ----------
            // todo.js:12 0: First Note to Edit from US
            // todo.js:12 1: Can have another as well for Today
            // todo.js:12 2: hi i wana delete this
            // todo.js:14 ----------
            // todo.js:34 delete
            // todo.js:47 Deleted  hi i wana delete this
            // todo.js:9 ----------
            // todo.js:12 0: First Note to Edit from US
            // todo.js:12 1: Can have another as well for Today
            // todo.js:14 ----------
        

        }

    begin = prompt("what would you like to start with?")//let 
}
console.log("quiting app right now")

//TO DO APP > GENERATE NEW/ LISTING ALL WITH PUSH / DELETE USING INDEX AND SPLICE ..checking inputs and all of basic and advance stuff is covered HERE
// BE CONNECTED TO SEE MORE

