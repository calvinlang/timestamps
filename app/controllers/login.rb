get "/login" do
  erb :"sessions/login"
end

post"/login" do
  user = User.find_by(email: params[:email])
  if user && user.password == params[:password]
    session[:user_id] = user.id
    redirect '/'
  else
    @errors = "Sorry, the credentials provided do not match"
    erb :"sessions/login"
  end
end

get "/logout" do
  session.delete(:user_id)
  redirect "/"
end
