import React from 'react';



export default class Task extends React.Component {
	
	
  constructor(){
    super();
    this.state={
      works:JSON.parse(localStorage.getItem('works'))
    };
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
 
	
  render() {
   return <div>
<h1>suka</h1>
 <ul>
    {this.state.works.map(function(work, index){
      return(
       
<li key={index}>
        <button className="delete" data-key={index} onClick={this.delete.bind(this)}>
          &times;
        </button>
 
        <input
          data-key={index}
          type="checkbox"
          readOnly
          onClick={this.handleClick.bind(this)}
        />
 
        <span className="text">{work}</span>
      </li>
      )
    }, this)}
</ul>
</div>
  }
}

