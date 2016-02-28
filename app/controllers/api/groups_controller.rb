class Api::GroupsController < ApplicationController
  before_action :require_sign_in!, only: [:update, :create, :delete]

  def index
    @groups = Group.all
  end

  def show
    @group = Group.find_by(id: params[:id])
  end

  private
  def group_params
    params.require(:group).permit(:title, :description, :location, :banner_url, :organizer_id)
  end
end
