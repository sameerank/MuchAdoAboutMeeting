class Api::EventsController < ApplicationController

  before_action :require_sign_in!, only: [:update, :create, :delete]

  def index
    @events = Event.all
  end

  def show
    @event = Event.find_by(id: params[:id])
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end

  end

  def update
    @event = Event.find_by(id: params[:id])
    if @event.update_attributes(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end


  def destroy
    @event = Event.find_by(id: params[:id])
    @event.destroy
    render :index
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :start_time, :end_time,
    :location, :host_id, :group_id)
  end
end
