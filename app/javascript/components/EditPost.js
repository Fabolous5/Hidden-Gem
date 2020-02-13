import React from "react"
import MainApp from './MainApp'
import ActiveStorageProvider from 'react-activestorage-provider'
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';

class EditPost extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          post:{}
        }
        this.getPost()
    }
    handleSubmit = (post)=>{
      this.setState({ post: post})
    }
    getPost = () =>{
        const { id } = this.props.match.params
        fetch(`/posts/${id}`)
        .then((response)=> {
            if(response.ok){
                return response.json()
            }
        })
        .then((post)=>{
            this.setState({post:post})
        })
    }

    render () {
     const{ post } = this.state
     return (
       <React.Fragment>
       <h1>Post: {post.event_name} </h1>
         { post && post.photo_url &&
           <div>
             <h2>The photo is: </h2>
             <img src={post.photo_url} />
           </div>
         }
         <ActiveStorageProvider
           endpoint={{
             path: `/posts/${post.id}`,
             model: 'Post',
             attribute: 'photo',
             method: 'PUT',
           }}
           onSubmit={this.handleSubmit}
           render={({ handleUpload, uploads, ready }) => (
             <div>
               <input
                 type="file"
                 disabled={!ready}
                 onChange={e => handleUpload(e.currentTarget.files)}
               />

               {uploads.map(upload => {
                 switch (upload.state) {
                   case 'waiting':
                     return <p key={upload.id}>Waiting to upload {upload.file.name}</p>
                   case 'uploading':
                     return (
                       <p key={upload.id}>
                         Uploading {upload.file.name}: {upload.progress}%
                       </p>
                     )
                   case 'error':
                     return (
                       <p key={upload.id}>
                         Error uploading {upload.file.name}: {upload.error}
                       </p>
                     )
                   case 'finished':
                     return (
                       <p key={upload.id}>Finished uploading {upload.file.name}</p>
                     )
                 }
               })}
             </div>
           )}
         />
       </React.Fragment>
     );
   }
 }

 export default EditPost
