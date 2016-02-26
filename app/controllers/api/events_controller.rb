class Api::EventsController < ApplicationController

  before_action :require_sign_in!, only: [:update, :create, :delete]

  def index
    @events = Event.all
  end

  def show
    @event = Event.find_by(id: params[:id])
  end

  private
  def event_params
    params.require(:event).permit(:title, :description, :start_time, :end_time,
    :location, :host_id, :group_id)
  end
end
