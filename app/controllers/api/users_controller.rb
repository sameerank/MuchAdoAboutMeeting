class Api::UsersController < ApplicationController

  before_action :require_sign_in!

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(id: params[:id])
  end
end
