class VideosController < ApplicationController
	def new
		p "*******"
		@video = Video.new
	end

end