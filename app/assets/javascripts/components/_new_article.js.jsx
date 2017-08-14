var NewArticle= React.createClass({
  handleClick() {
    var title = this.refs.title.value;
    var body = this.refs.body.value;
      $.ajax({
        url: '/api/v1/articles',
        type: 'POST',
        data: { article: { title: title, body: body } },
        success: (article) => {
          this.props.handleSubmit(article);
        }
      });
    },

  render() {
   return (
    <div> <input ref='title' placeholder='Enter the title of the article' />
    <input ref='body' placeholder='Enter a dead body' />
    <button onClick={this.handleClick}>Submit</button> </div>
    )
  }
});
