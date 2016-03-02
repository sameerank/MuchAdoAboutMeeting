class Api::UsersController < ApplicationController

  before_action :require_sign_in!

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :name, :location, :gender, :bio, :avatar_url)
  end
end
