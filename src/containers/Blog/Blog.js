import React, { Component } from 'react';
import './Blog.css';
import { Route, NavLink } from 'react-router-dom';
import Posts from '../../containers/Blog/Posts/Posts';
import NewPost from '../Blog/NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost';

class Blog extends Component {		
    render () {
			return (
				<div className='Blog'>
					<header>
						<nav>
							<ul>
								<li><NavLink to='/' exact>HOME</NavLink></li>
								<li><NavLink to={{
									pathname: 'new-post',
									hash: '#submit'
								}} exact>New Post</NavLink></li>
							</ul>
						</nav>
					</header>
					<Route path="/" exact component={Posts}/>
					<Route path="/new-post" exact component={NewPost}/>
					<Route path="/posts/:id" exact component={FullPost}/>
				</div>
			);
    }
}

export default Blog;