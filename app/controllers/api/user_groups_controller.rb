class Api::UserGroupsController < ApplicationController
  before_action :require_sign_in!

  def create
    @user_group = UserGroup.new(group_params)
    @user_group.user_id = current_user.id

    if @user_group.save
      render :show
    else
      render json: @user_group.errors.full_messages, status: 422
    end
  end


  def destroy
    @user_group = UserGroup.find_by(id: params[:id])
    @user_group.destroy
    render :index
  end

  private
  def group_params
    params.require(:user_group).permit(:user_id, :group_id)
  end
end
