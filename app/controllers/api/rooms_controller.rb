class Api::RoomsController < ApplicationController

  skip_before_filter :verify_authenticity_token

  before_action do
    if @current_user.nil?
      # redirect_to sign_in_path
      render json: {authenticated: false}, status: 401
    end
  end

  def show
     @room = Room.find_by id: params[:id]
  end

end
