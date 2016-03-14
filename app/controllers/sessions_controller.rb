class SessionsController < ApplicationController

  def new
    @user = User.new
    render "sessions/new"
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id

      redirect_to '/'
    else
      return 406
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to "/"
  end

  private
    def login_params
      params.require(:user).permit(:username, :password)
    end
end