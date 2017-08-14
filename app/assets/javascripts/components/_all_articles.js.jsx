var AllArticles = React.createClass({

     render() {
      var articles= this.props.articles.map((article) => {
       return (
          <div key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
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
