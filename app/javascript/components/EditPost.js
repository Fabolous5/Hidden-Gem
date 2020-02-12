import React from "react"
import MainApp from './MainApp'

class EditPost extends React.Component {
    constructor(props){
        super(props)
        console.log(props);
        this.state = {

        }
        this.getPost()
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
            this.setState({post})
        })
    }

    render(){
        return(
            <React.Fragment>
                {this.state.post &&
                    <h1>{this.state.post.event_name}</h1>
                }
                {!this.state.post &&
                    <h2>loading</h2>
                }
            </React.Fragment>
        )
    }
}

export default EditPost
