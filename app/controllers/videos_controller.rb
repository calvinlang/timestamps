class VideosController < ApplicationController
	def new
		@video = Video.new
	end

	def create
		@video = Video.new(video_params)
		@video.save
		redirect_to video_path(@video)
	end

	def show
		@video = Video.find(params[:id])
		@notes = @video.notes
	end

	private

	def video_params
		params.require(:video).permit(:link, :title, :category)
	end
end