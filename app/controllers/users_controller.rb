class UsersController < ApplicationController

  def new
    render "users/new"
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to "/"
    else
      return 406
    end
  end

  def show
    @user = current_user
    @user_videos = current_user.videos.distinct
    @video = Video.new
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @user }
      end
    end
  end

  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
  def set_user
      @user = User.find(params[:id])
  end

  def user_params
    params.permit(:email, :username, :password)
  end
end