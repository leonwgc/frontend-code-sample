// comment box sample
var React = require('react');
var ReactDOM = require('react-dom');

var CommentForm = React.createClass({
  getInitialState: function() {
    return { user: '', comment: '' };
  },
  handleUserChange: function(e) {
    this.setState({ user: e.target.value });
  },
  handleCommentChange: function(e) {
    this.setState({ comment: e.target.value });
  },
  postComment: function() {
    this.props.submit(this.state.user, this.state.comment);
    this.setState({ user: '', comment: '' });
  },
  render: function() {
    return (
      <div>
        <input type="text" name='user' value={this.state.user} onChange={this.handleUserChange}/>
        <input type="text" name='comment' value={this.state.comment} onChange={this.handleCommentChange}/>
        <input type="button" value="submit" onClick={this.postComment}/>
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var elements = this.props.data.map(function(value, i) {
      return (
        <div key={i}>
          <p>{value.comment}</p>
          <p>{value.user} --posted at {value.date}</p>
        </div>
      );
    });

    return (
      <div>
        {elements}
      </div>
    );
  }
});

var CommentBox = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  handleSubmit: function(user, comment) {
    var data = this.state.data;
    data.push({ user: user, comment: comment, date: (new Date()).toLocaleDateString() });
    this.setState({ data: data });
  },
  render: function() {
    return (
      <div>
        <div>please fill: </div>
        <CommentForm submit={this.handleSubmit} />
        <CommentList data={this.state.data}/>
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox/>,
  document.getElementById('example')
);