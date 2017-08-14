var AllItems = React.createClass({
  getInitialState() {
    return { articles: [] }
  },

  componentDidMount() {
  $.getJSON('/api/v1/articles.json', (response) => { this.setState({ articles: response }) });
    console.log('Component mounted');
     },


     render() {
      var articles= this.state.articles.map((article) => {
       return (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.body}</p> </div>
          )
      });

     return( <div> {articles} </div> ) }


});
