# dummyDataTodoList

reset board from Tic Tac Toe:
const resetBoard = () => {

  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
  // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp  

  // @TODO-3.5: MIX & MATCH, You will need the following pieces of code to build that line:
  // squares
  // .getElementsByTagName("TD")
  // =
  // document
  // const
  const squares = document.getElementsByTagName("TD");

  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i = 0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }
}
