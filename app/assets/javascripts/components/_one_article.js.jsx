var OneArticle = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(article) {
    this.props.onUpdate(article);
  },


  render() {
    var article = {id: id , title: title , body: body};
    var id = this.props.article.id;
    var title = this.props.article.title;
    var body = this.props.article.body;
    var photos = this.props.photos.map((photo) => {
      return (
        <div key={photo.id}>
          <img src={photo.image.url} />
        </div>
      )
    });

     return(
       <div>
         {/* <Article article={article} handleDelete={this.handleDelete.bind(this, article.id)} handleUpdate={this.onUpdate} /> */}
         {title}
         {body}
         {photos}
       </div>
     )
    }
});
