class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
    render :index
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
