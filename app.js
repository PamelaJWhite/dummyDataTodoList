//top section is redo after class
let arrayOfTodos = [
    {
    "userId": 10,
    "id": 1,
    "title": "delectus aut",
    "completed": false
},
{
    "userId": 7,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 8,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 7,
    "id": 3,
    "title": "delectus aut autem",
    "completed": true
}
]

// const listByUserID = arrayOfTodos.filter((arrayOfTodos) => arrayOfTodos.userId === 7) 
//     console.log(listByUserID)

//    let filteredTodos = listByUserID

//     const listByCompleted = filteredTodos.filter((filteredTodos) => filteredTodos.completed === true ) 
//     console.log(listByCompleted)

// // console.log(arrayOfTodos[0].title)
// // console.log(arrayOfTodos[1].id)
// //let usersID = '' I don't know what this does or doesn't do

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    for (let index = 0; index < arrayOfTodos.length; index++) {
        const toDoList = arrayOfTodos[index];
        const listItem = document.getElementById("todo-list")
        // console.log("get element by id:" + listItem)
        const createdLI = document.createElement("LI")
        listItem.appendChild(createdLI)
        // console.log("create element:" + createdLI)
        const text = document.createTextNode(toDoList.title)
        createdLI.appendChild(text)
    //    console.log(text)
       //console.log(populateTodos)
// //         // --------------------------------- after thu

    }
}

let filterTodos = () => {
    
    const clear = document.getElementById("todo-list").innerHTML = ""
    console.log("cleared")
    let input = document.getElementById("usersID")
    console.log("input html:" + input)
    console.log ("value of input:" + input.value)

    const filteredByUserID = arrayOfTodos.filter((arrayOfTodos) => arrayOfTodos.userId == input.value)
   
    const secondArray = filteredByUserID
    console.log("this should be the 2nd array of todos:" + filteredByUserID)
    for (let index = 0; index < filteredByUserID.length; index++) {
        const toDoList = filteredByUserID[index];
        const listItem = document.getElementById("todo-list")
        // console.log("get element by id:" + listItem)
        const createdLI = document.createElement("LI") 
        listItem.appendChild(createdLI)
        // console.log("create element:" + createdLI)
        const text = document.createTextNode(toDoList.title)
        createdLI.appendChild(text)
    //    console.log(text)
    }
    
}

let sortTodos = () => {
    const clear = document.getElementById("todo-list").innerHTML = ""
    console.log("cleared")
    let input = document.getElementById("usersID")
    console.log("input html:" + input)
    console.log ("value of input:" + input.value)
    const filteredByUserID = arrayOfTodos.filter((arrayOfTodos) => arrayOfTodos.userId == input.value)

    const listByCompleted = filteredByUserID.filter((filteredByUserID) => filteredByUserID.completed === true ) 
        console.log("list by completed:" + listByCompleted)
        for (let index = 0; index < listByCompleted.length; index++) {
            const toDoList = listByCompleted[index];
            const listItem = document.getElementById("todo-list")
            // console.log("get element by id:" + listItem)
            const createdLI = document.createElement("LI") 
            listItem.appendChild(createdLI)
            // console.log("create element:" + createdLI)
            const text = document.createTextNode(toDoList.title)
            createdLI.appendChild(text)
        }
    }


//-------------------------------------------
//store the data in a variable:
// 
//const filterTodos = () => {
//     console.log("filterTodos")

// Or...Is this as simple as?:
//let originalListData = populateTodos()

//console.log(arrayOfTodos)

//------------------------------------------
// Clear the previous todos from the view
//     ????.innerHTML = null
// 
//---------------------------------------------
// Populate it with only todos with the userID that matches the number inputted

   // let listByUserID = arrayOfTodos.filter((arrayOfTodos) => arrayOfTodos.title === "delectus aut autem") //it works until the last part. NO, it's only going through the original listofArrays

//------------------------------
//Stores the currently filtered to dos in a variable

//let filteredTodos = listByUserID ?????
//---------------------------------------------------
//need to populate the list with the filtered todos
//??????????create text node? append child?

//-----------------------------------------------------
//sort todos button
///removes todos from view

//????.innerhtml = null

//-------------------------------------------------------
//shows only todoes that are either completed or not completed
//filter by completed

//----------------
//show those completed


  



    










// //Below is work from class:
// // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
// console.log("working")

// let arrayOfTodos = [
//     {
//     "userId": 14,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false,
//     "superHeroName": "Wonder Woman"
// },
// {
//     "userId": 20,
//     "id": 2,
//     "title": "delectus aut autem",
//     "completed": false,
//     "superHeroName": "BatMan"
// }]

// console.log(arrayOfTodos[0].title) 

//     let OL = document.getElementById("todo-list")
//    console.log(OL)
  

 

//   function createLi(data) {
//       const listItem = document.createElement("LI")
//       console.log(listItem)
//       const text = document.createTextNode(data)
//       listItem.appendChild(text)
//       console.log(listItem)
//       OL.appendChild(listItem)
//   }


// //   console.log(createLi())


// const fetchTodos = () => {
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then( (response) => response.json())
//     .then( (json) => arrayOfTodos = json)
// }

// const logTodos = () => {
//     console.log(arrayOfTodos)
// }

// const populateTodos = () => {
// for (let index = 0; index < arrayOfTodos.length; index++) {
//     const toDo = arrayOfTodos[index];
//     console.log(toDo)
//     // 
    
//     let listName = `${toDo.superHeroName} ${toDo.id}`

//     createLi(listName)
    
// 