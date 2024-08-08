import React, { Component } from 'react'
import PropTypes from 'prop-types';

class User extends Component {
  // static defaultProps={
  //   name:"bilgi yok",
  //   salary:"bilgi yok",
  //   department:"bilgi yok"
  // }
  // böylede yapılabilir iki farklı yöntemi var
  
  constructor(props){
    super(props)
    this.onClickEvent=this.onClickEvent.bind(this);
  }

  onClickEvent(e){
    console.log(this);
  }

  render() {
    // Destructing
    const {name,department,salary} = this.props;
    return (
       <div className='col-md-8 mb-4'>
          <div className="card">
            <div className='card-header d-flex justify-content-between'>
              <h4 className='d-inline' onClick={this.onClickEvet}>{name}</h4>
              <i class="fa-solid fa-trash" style={{cursor : 'pointer'}}></i>
            </div>
          </div>
          <div className='card-body'>
            <p className='card-text'>Maaş:{salary}</p>
            <p className='card-text'>Department:{department}</p>
          </div>
       </div>
    )
  }
}

export default User;