class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end
    # def user_index
    #     @posts = current_user.posts
    # end
    def post_params
        params.require(:post).permit(:user_id, :event_name, :address, :category, :event_description, :start_time, :end_time, :date, :photo)
    end
    def create
        post = Post.create(post_params.merge(user_id: current_user.id))
            render json: post
    end
    def destroy
        post = Post.find(params[:id])
          if post.destroy
              render json: post
          else
              render json: post.errors
          end
    end
    def update
        post = Post.find(params[:id])
          if Post.update post_params
              render json: post
          else
              render json: post.errors
          end
    end
    def show
        post = Post.find(params[:id])
        render json: post
    end
    def new
        post = Post.new(params[:id])
        render json: post
    end
end
