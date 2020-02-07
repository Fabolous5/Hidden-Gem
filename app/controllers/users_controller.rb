class UsersController < ApplicationController

    def index
        users = User.all
        render json: users

    end

    def create
        user = User.create(user_params)
        render json: user
    end

    def user_params
        params.require(:user).permit(
            :email,
            :encrypted_password,
            :reset_password_token,
            :reset_password_sent_at,
            :remember_created_at,
            :created_at,
            :updated_at,
            :first_name,
            :postal_code,
            :last_name,
            :date_of_birth,
            :reset_password_token)
    end

    def destroy
        user = User.find(params[:id])
          if user.destroy
              render json: user
          else
              render json: user.errors
          end
    end

    def update
        user = User.find(params[:id])
          if User.update user_params
              render json: user
          else
              render json: user.errors
          end
    end

  def show
      user = User.find(params[:id])
      render json: user
  end

end
