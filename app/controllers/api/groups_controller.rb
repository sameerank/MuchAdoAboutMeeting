class Api::GroupsController < ApplicationController
  before_action :require_sign_in!, only: [:update, :create, :delete, :show]

  def index
    @groups = Group.all
  end

  def show
    @group = Group.find_by(id: params[:id])
  end

  def create
    @group = Group.new(group_params)
    @group.organizer_id = current_user.id
    if @group.banner_url.nil?
      @group.banner_url = "http://lorempixel.com/800/200/animals/"
    end

    if @group.save
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end

  end

  def update
    @group = Group.find_by(id: params[:id])
    if @group.update_attributes(group_params)
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end


  def destroy
    @group = Group.find_by(id: params[:id])
    @group.destroy
    render :index
  end

  private
  def group_params
    params.require(:group).permit(:title, :description, :location, :banner_url, :organizer_id)
  end
end
