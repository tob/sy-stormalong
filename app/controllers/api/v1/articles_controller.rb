class Api::V1::ArticlesController < Api::V1::BaseController
  def index
    respond_with Article.all
  end

  def create
    respond_with :api, :v1, Article.create(article_params)
  end

  def destroy
    respond_with Article.destroy(params[:id])
  end

  def update
    article = Article.find(params[:id])
    Article.update_attributes(article_params)
    respond_with article, json: article
  end

  private
  def article_params
    params.require(:article).permit(:id, :title, :body)
  end
end
