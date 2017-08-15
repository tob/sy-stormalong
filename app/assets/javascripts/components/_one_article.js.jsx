var OneArticle = React.createClass({

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(article) {
    this.props.onUpdate(article);
  },

  render() {
    var { id, title, body } = this.props.article
    return(
      <div>
        <p>{title}</p>
        <p>{body}</p>
        <div>
          {this.props.photos.map((photo) => {
            return (
              <div className='images' key={photo.id}>
                <img src={photo.image.url} />
              </div>
              )
          })}
        </div>
      </div>
     )
    }
});
