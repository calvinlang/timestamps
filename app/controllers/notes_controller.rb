class NotesController < ApplicationController
	def new
	end

	def create
		@note = current_user.notes.new
		# Will need to refactor the CSS and JS.
		@note.video_id = params[:video][:id]
		@note.time = params["video-timestamp-return"]
		@note.body = params[:body]
		if @note.save
			render :partial => '/notes/show', locals: {note: @note}
		else
			return 200
		end
	end

	def destroy
		@note = Note.find(params[:id])
		@note.destroy 
		render :nothing => true, :status => 200, :content_type => 'text/html'
	end

	private
	def note_to_delete
		@id = params.permit(:id)
	end


end