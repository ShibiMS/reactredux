import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllPost extends Component<any, any> {
  constructor(props: any){
      super(props)      
      this.state = {
        posts: {
            title:"",
            description:""
        },
        showOnedit:true
    }
    this.handleChange = this.handleChange.bind(this);
  }
    render() {
      const showedit = this.state.showOnedit;
    return (
    <div>
      <h1>All Posts</h1>
      <table>
          
              <thead>
          <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
          </tr> 
          </thead>   
          <tbody>      
          <tr>
             {showedit? (<td>{this.props.posts.title}</td>):
              (
              <td>
                <input type = "text"
                       name = "title" 
                       value = {this.state.posts.title?this.state.posts.title : this.props.posts.title}
                       onChange = {this.handleChange} />
              </td>
              )
              }
              {showedit?
              (<td>{this.props.posts.description}</td>):
              (<td>
                <input type  = "text"
                        name = "description" 
                        value = {this.state.posts.description?this.state.posts.description : this.props.posts.description}
                        onChange = {this.handleChange}
                />
              </td>)
             }
              {showedit? (<td><button onClick={()=>this.editPost(this.props.posts)}>Edit</button></td>):
              (<td><button onClick={()=>this.updatePost()}>Update</button></td>)}
          </tr>
          </tbody>
      </table>
    </div>
    );
   }

   handleChange(event: any) {    
    this.setState({ posts: { ...this.state.posts, [event.target.name]: event.target.value } })
    console.log('click work', this.state.posts); 
    
  }
   editPost(row:any){
     console.log('editpost',row);
     this.setState({showOnedit: false});
   }
   updatePost(){
    console.log('editupdatepost',this.state); 
    this.setState({showOnedit: true});
    this.props.editbutton(this.state.posts);
  }
}
const mapStateToProps = (state: any) => {
  console.log('Allpoststatemapstatetoprop',state);  
  return {
    posts: state.posts,   
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {   
    editbutton: (posts: any) => { dispatch({ type: 'BTN_UPDATE', posts: posts }) }
  }

};
export default connect(mapStateToProps,mapDispatchToProps)(AllPost);