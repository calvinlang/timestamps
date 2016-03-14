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

	def note_time_converter(time)
		seconds = time[-2..-1].to_i
		minutes_in_seconds = time[0..-4].to_i * 60
		return seconds + minutes_in_seconds
	end
	helper_method :note_time_converter

	def parse_youtube(url)
	   regex = /(?:.be\/|\/watch\?v=|\/(?=p\/))([\w\/\-]+)/
	   url.match(regex)[1]
	end
	helper_method :parse_youtube



  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
end
