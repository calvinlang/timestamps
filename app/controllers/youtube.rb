get '/youtube/:video_id' do
  if current_user
    @video = Video.find(params[:video_id])
    @notes = current_user.notes.where(video_id: params[:video_id])
	 erb :'youtube/show'
  else
    redirect "/"
  end
end

post '/youtube/:video_id' do
  @note = current_user.notes.new(params[:note])
  @note.video_id = params[:video_id]
  if @note.save
    if request.xhr?
      erb :"/youtube/_note_show", layout: false, locals: {note: @note}
    else
      redirect "/youtube/#{params[:video_id]}"
    end
  else
    redirect "/youtube/#{params[:video_id]}"
  end
end


