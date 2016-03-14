class SessionsController < ApplicationController

  def uid
  end

  def new
    @user = User.new
    render "sessions/new", layout: false
  end

  def create
    user = User.find_by(username: params[:user][:username])
    if user && user.authenticate(params[:user][:password])
      session[:user_id] = user.id
      @session = session[:user_id]
      respond_to do |format|
        format.js { render nothing: true }
        format.html { render nothing: true }
      end
    else
      return 406
    end
  end

  def destroy
    session[:user_id] = nil
    respond_to do |format|
        format.html { render nothing: true }
    end
  end

  private
    def login_params
      params.require(:user).permit(:username, :password)
    end
end