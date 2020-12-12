import React, {Component} from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import '../../Blog/Posts/Posts.css'
import { Link } from 'react-router-dom';


class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  }

  componentDidMount() {
    axios.get('/posts')
    .then(response => {
      const posts = response.data.slice(-4,-1);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Mylara'
        }
      });
      this.setState({posts: updatedPosts})
    })
    .catch(error => {
      this.setState({error: true})
    });
  }

  postSelectHandler = (id) => {
    this.setState({selectedPostId:  id})
  }

  render() {
    let posts = <p style={{textAlign: 'center', color: 'red'}}> Something went wrong !!</p>
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Link to={'/posts/'+post.id}  key={post.id} >
          <Post 
            title={post.title} 
            author={post.author} 
            clicked={() => this.postSelectHandler(post.id)}
          />
        </Link>
      })
    }
    return(
      <section className="Posts">
        {posts}
      </section>
    )
  }
}

export default Posts;