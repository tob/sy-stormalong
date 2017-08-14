class ArticlesController < ApplicationController

def index
  @articles = Article.all
  @article = Article.new
end
# Lorenzo first guess for show
def show
  @article = Article.find(params[:id])
  @photos = @article.photos
end

def create
  @article =  Article.create(article_params)
end

def destroy
  @ariticle = Article.destroy(params[:id])
end

def update
  @article = Article.find(params["id"])
  @article.update(article_params)
end

private
def article_params
  params.require(:article).permit(:id, :title, :body, :photos)
end

end
