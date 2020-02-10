class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end
    def post_params
        params.require(:post).permit( :event_name, :address, :category, :event_description, :start_time, :end_time, :date)
    end

    def create
        post = Post.create(post_params)
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
