var AllArticles = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(article) {
    this.props.onUpdate(article);
  },

  render() {

    const articles = this.props.articles.map((article) => {
      return (
        <div key={article.id}>
          <Article article={article} handleDelete={this.handleDelete.bind(this, article.id)} handleUpdate={this.onUpdate}/>
        </div>
      )
    });

   return(
     <div>
      {articles}
     </div>
   )
  }
});
