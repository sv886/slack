var PostList = React.createClass({

  fetchPostsTimer: null,

  getInitialState(){
    return {
      posts: [],
      pageSize: 10,
      page: 0,
    }
  },

  componentDidMount(){
    this.fetchPosts();
    this.fetchPostsTimer = setInterval(this.fetchPosts, 3000);
  },

  componentWillUnmount(){
    // Clean up after ourselves to prevent memory leaks
    clearInterval(this.fetchPostsTimer);
  },

  prevPage(e){
    e.preventDefault()
    this.setState({page: this.state.page-1})
  },

  nextPage(e){
    e.preventDefault()
    this.setState({page: this.state.page+1})
  },

  fetchPosts(){
    var component = this;
    fetch("/api/posts.json", {credentials: 'include'})
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        component.setState({
          posts: json.posts
        })
      })
  },

  render: function() {
    var page = this.state.page,
        size = this.state.pageSize,
        posts = this.state.posts,
        prevLink = <a href="#" onClick={this.prevPage}>prev</a>,
        nextLink = <a href="#" onClick={this.nextPage}>next</a>,
        maxPage = Math.ceil(posts.length / size) - 1


    return <div>
      <h3>Posts</h3>

      {posts.slice(page*size, (page+1)*size).map(function(post){
        return <blockquote key={post.id}>{post.user.username} says: {post.text}</blockquote>
      })}

      <div>
        {page !==0 ? prevLink : ''}

        {page === maxPage ? '' : nextLink}
      </div>

    </div>;
  }
});
