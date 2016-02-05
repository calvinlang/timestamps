get '/youtube/:video_id' do
  if current_user
    @video = Video.find(params[:video_id])
    @notes = current_user.notes.where(video_id: params[:video_id])
	 erb :'youtube/show'
  else
    redirect "/"
  end
end

post '/youtube' do
  @video = Video.create!(params[:video])
  redirect "/youtube/#{@video.id}"
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
    redirect "google.com"
  end
end

put 'youtube/:id/edit' do
  redirect '/login' unless session[:user_id]
  @note = Note.find(params[:id])
  if request.xhr?
    @note.update_attributes()
  else
    redirect "/youtube/#{@note.video_id}"
  end
end

delete '/youtube/:id' do
  redirect '/login' unless session[:user_id]
  @note = Note.find(params[:id])
  p params
  p "*******"
  if request.xhr?
    @note.delete
    # erb :"/youtube/show"
  else
    redirect "/youtube/#{@note.video_id}"
  end
end


