var Body = React.createClass({
  getInitialState() {
    return { articles: [] }
  },

  // componentDidMount() {
  //   $.getJSON('/api/v1/articles.json', (response) => { this.setState({ articles: response }) });
  // },

  handleSubmit(article) {
     var newState = this.state.articles.concat(article);
     this.setState({ articles: newState })
   },


 render() {
  return (
   <div>
   <NewArticle handleSubmit={this.handleSubmit}/>

   <AllArticles articles={this.state.articles}/>

  </div>
   )
  }
});
