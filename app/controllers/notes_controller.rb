class NotesController < ApplicationController
	def new
	end

	def create
		
	end

	def destroy
		@note = Note.find(params[:id])
		@note.destroy 
		render :nothing => true, :status => 200, :content_type => 'text/html'
	end

	private
	def note_to_delete
		@id = params.permit(:id)
		return @id
	end
end