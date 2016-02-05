# get '/users' do
#   @users = User.all
#   erb :'/users/index'
# end

get '/users/new' do
  erb :'/users/new'
end

post '/users' do
  @user = User.new(params[:user])
  if @user.save
    session[:user_id] = @user.id
    redirect '/'
  else
    @errors = @user.errors.full_messages
    erb :'/users/new'
  end
end

get '/users/:id' do
  @user = current_user
  erb :'/users/show'
end

delete '/users/:id' do
  redirect '/login' unless session[:user_id]
  @video = Video.find(params[:id])
  # @notes = Notes.find_by(video_id: @video.id)
  if request.xhr?
    @video.delete
    # @notes.delete
  else
    redirect "/users/#{session[:user_id]}"
  end
end
