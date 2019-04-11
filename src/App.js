import React from "react"

import Header from "./component/Header"
import MyApp from "./component/Inputs"
import Footer from "./component/Footer"
import todosData from "./component/todoData"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
        todos: todosData
    }
  }

  render() {

    const todoItems = this.state.todos.map(item => <MyApp key={item.id} item={item} />)
  
    return(
      <div>
        <Header />
  
        <div className="todo-list">
          {todoItems}
        </div> 
        
        <Footer />
      </div>
    )
  }
}
export default App