import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
const title = 'STart';


class App extends React.Component {

  constructor(){
    super();
    this.state={
      works:[]
    };
  }

  

handleSubmit(event) {
  event.preventDefault(); 

  // Find the text field via the React ref
  const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 if(text == ''){
  alert('Заполните поле с задачей!');
} else{
 if(localStorage.getItem('works') == null){
   var works = [];
   works.push(text);
   localStorage.setItem('works', JSON.stringify(works));
 } else {
   var works = JSON.parse(localStorage.getItem('works'));
   works.push(text);
   localStorage.setItem('works', JSON.stringify(works));
 }
}

this.setState({
 works:JSON.parse(localStorage.getItem('works'))
})

  // Clear form
  ReactDOM.findDOMNode(this.refs.textInput).value = '';
}

toggleChecked() {
    // Set the checked property to the opposite of its current value
    works.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    });
  }

delete(e) {
  var index = e.target.getAttribute('data-key');
  var list = JSON.parse(localStorage.getItem('works'));
  list.splice(index, 1);
  this.setState({
    works:list
   });
   localStorage.setItem('works', JSON.stringify(list));

}
handleClick(e){
  var index = e.target.getAttribute('data-key');
  console.log(this.refs)
}
  
//  renderTasks() {
//    return this.props.tasks.map((task) => (
//      <Task key={task._id} task={task} />
//    ));
//  }

 render() {
   
   return (<div>
     <div className="list__header">
  <h1>Список дел</h1>
</div>
<div className="list__add">

<form className="new-task"  onSubmit={this.handleSubmit.bind(this)}>
           <input
             type="text"
             ref="textInput"
             placeholder="Задача ..."
           />
     <input
     type="submit"
     ref="textSubmit"
     value="Добавить"
     
       />
         </form>
</div>
<div className="list__show">
 <h2>Добавленные задачи</h2>
 <ul>
    {this.state.works.map(function(work, index){
      return(
      
<li key={index} >
        <button className="delete" data-key={index} onClick={this.delete.bind(this)}>
          &times;
        </button>
 
        <input
        id={['element',index].join('')}
          data-key={index}
          type="checkbox"
          readOnly
          onClick={this.handleClick.bind(this)}
        />
        <label htmlFor={['element',index].join('')}></label>
 
        <span className="text">{work}</span>
      </li>
      )
    }, this)}
</ul>
</div>


<div className="alert alert-secondary" role="alert">
  This is a secondary alert—check it out!
</div>


</div>
   );
 }
}

ReactDOM.render(
  <App/>, document.getElementById('app')
);





