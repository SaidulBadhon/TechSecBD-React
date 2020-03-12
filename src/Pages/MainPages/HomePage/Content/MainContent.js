import React from 'react';
import "./Content.css"
import DemoImg from "./img/Content/Demo1.jpg"

import Typography from "@material-ui/core/Typography"

import ContentData from "./ContentData.js"
import ContentLoader from "./ContentLoader.js"

class MainContent extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: ContentData
      }
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
      this.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
              if (todo.id === id) {
                  return {
                      ...todo,
                      completed: !todo.completed
                  }
              }
              return todo
          })
          console.log(prevState.todos)
          console.log(updatedTodos)
          return {
              todos: updatedTodos
          }
      })
  }
  render(){
    const todoItems = this.state.todos.map(item => <ContentLoader key={item.id} item={item}
    handleChange={this.handleChange}/>)

    return (
      <div className="ContentPage">
          {todoItems}
          {
            // <div className="ContentImg">
            //   <img src={DemoImg}/>
            // </div>
            //
            // <div className="ContentInfo">
            //   <Typography className="Category" variant="subtitle2"  component="subtitle2">
            //     DAILY NEWS
            //   </Typography>
            //   <br></br>
            //   <Typography className="Heading" component="subtitle2">
            //     Drinking coffee gives you
            //   </Typography>
            //   <br></br>
            //
            //   <Typography className="SeeMore" component="subtitle2">
            //     Coffee is a hugely popular drink,
            //     but many people are concerned that it may cause cancer.
            //     Others sometimes claim that drinking coffee offers health benefits
            //     and may even prevent cancer. So, what does the evidence say?          Coffee is a hugely popular drink,
            //               but many people are concerned that it may cause cancer.
            //               Others sometimes claim that drinking coffee offers health benefits
            //               and may even prevent cancer. So, what does the evidence say?
            //   </Typography>
            // </div>
          }
      </div>

    )
  }
}

export default MainContent;
