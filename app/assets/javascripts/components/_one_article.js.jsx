var OneArticle = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(article) {
    this.props.onUpdate(article);
  },


  render() {

     return(
       <div>
         <Article article={this.props.article} handleDelete={this.handleDelete.bind(this, article.id)} handleUpdate={this.onUpdate} />
       </div>
     )
    }
});
