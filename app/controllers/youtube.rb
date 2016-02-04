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

end
