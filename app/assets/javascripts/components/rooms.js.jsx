var RoomList = React.createClass({

  fetchPostsTimer: null,

  getInitialState(){
    return {
      room: {
          id: this.props.room.id,
        posts: []
      }
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

  fetchPosts(){
    var component = this;
    fetch("/api/rooms/" + this.state.room.id + ".json", {credentials: 'include'})
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        component.setState({
          room: json.room
        });
      })
  },

  render: function() {
    return <div>
      <h3>Posts</h3>

      {this.state.room.map(function(room){
        return <blockquote key={room.posts.id}>{room.posts.user.username} says: {room.posts.text}</blockquote>
      })}
    </div>;
  }
});
