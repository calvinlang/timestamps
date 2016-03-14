class VideosController < ApplicationController
	def new
		p "******"
		@video = Video.new
	end

	def create
		p params
	end

end