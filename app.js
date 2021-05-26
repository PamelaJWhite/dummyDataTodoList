//top section is redo after class
let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]
// console.log(arrayOfTodos[0].title)
// console.log(arrayOfTodos[1].id)

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
        console.log("get element by id:" + listItem)
        const createdLI = document.createElement("LI")
        listItem.appendChild(createdLI)
        console.log("create element:" + createdLI)
        const text = document.createTextNode(toDoList.title)
        createdLI.appendChild(text)
        console.log(text)
    }
}

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
    
// }
// }