class ArticlesController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

def index
  @articles = Article.all
  @article = Article.new
end
# Lorenzo first guess for show
def show
  # @articles = Article.all
  @article = Article.find(params[:id])
  @photos = @article.photos
end

def create
  @article =  Article.create(article_params)
end

def destroy
  @article = Article.destroy(params[:id])
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
