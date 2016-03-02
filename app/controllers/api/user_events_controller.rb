class Api::UserEventsController < ApplicationController
  before_action :require_sign_in!

  def create
    @user_event = UserEvent.new(event_params)
    @user_event.user_id = current_user.id

    if @user_event.save
      render :show
    else
      render json: @user_event.errors.full_messages, status: 422
    end
  end


  def destroy
    @user_event = UserEvent.find_by(id: params[:id])
    @user_event.destroy
    render :index
  end

  private
  def event_params
    params.require(:user_event).permit(:user_id, :event_id)
  end
end
