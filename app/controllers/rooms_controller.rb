class RoomsController < ApplicationController

  before_action :authenticate_user!

  before_action do
    @current_user = User.find_by id: session[:user_id]
    if @current_user.blank?
      redirect_to login_path
    end
  end

  def index
  end

  def show
  end

  def new
  end

  def create
  end

  def delete
  end
end
