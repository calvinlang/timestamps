class ApplicationController < ActionController::Base
	def index
		render 'layouts/index'
	end

	def logged_in?
	session[:user_id] == nil ? false : true
	end
	helper_method :logged_in?

	def current_user
	@user = User.find(session[:user_id]) if logged_in?
	end
	helper_method :current_user

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
