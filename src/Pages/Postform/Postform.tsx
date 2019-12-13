import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Postform extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      title: '',
      description: '',
      selectedFile:null
    }
    
    this.titleChangedHandler = this.titleChangedHandler.bind(this);
    this.descriptionChangedHandler = this.descriptionChangedHandler.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  titleChangedHandler = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  descriptionChangedHandler = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleFormSubmit(event: any) {
    event.preventDefault()
    const fd = new FormData();
    fd.append('file', this.state.selectedFile);
    let data = {
      title: this.state.title,
      description: this.state.description,
      formdata : fd,
      selectedFile: this.state.selectedFile
    }    
    console.log('formsubmit',data);
    
    this.props.onAddedPost(data);
  }
  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Create Post</h1>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={this.titleChangedHandler}
            value={this.state.title || ''} /><br></br><br></br>
          <textarea
            placeholder="Description"
            name="description"
            onChange={this.descriptionChangedHandler}
            value={this.state.description || ''}
          /><br></br><br></br>
          <input type="file" name="file" onChange={this.onChangeHandler}/><br></br><br></br>

        <Link to="/allpost">
          <button type="submit" onClick = {()=>this.showAll(this.state)}>Submit</button>
        </Link>
        </form>       
      </div>
    );
  }
  showAll(arg0: any) {    
    this.props.buttonToggle(arg0)
  }
  onChangeHandler=(event:any)=>{    
    const data = new FormData()
    data.append('file', this.state.selectedFile);
    axios.post("https://api.imgur.com/3/upload", data, { // receive two parameter endpoint url ,form data 
    headers: {
      'Content-Type': 'multipart/form-data'     
  },
  })
  .then(res => { // then print response status
    console.log(res.statusText)
  })
}
}
const mapStateToProps = (state: any) => {
  return {
    posts: state.posts   
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddedPost: (data: any) => { dispatch({ type: 'ADD_DATA', data: data }) },
    buttonToggle: (posts: any) => { dispatch({ type: 'BTN_TRIGGER', posts: posts }) }
  }

};
export default connect(mapStateToProps, mapDispatchToProps)(Postform);