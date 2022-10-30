class ApplicationController < ActionController::API
  include ActionController::Cookies
  
private

def authorize
  @current_hiker = Hiker.find_by(id: session[:hiker_id])
  render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_hiker
end

def authAddLike
  hk = Hike.find(params[:id])
  @current_hiker = Hiker.find_by(id: session[:hiker_id])
  render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_hiker

end

def render_not_found_response
  render json: { error: "ID not found" }, status: :not_found
end

def authAdmin
  @current_hiker = Hiker.find_by(id: session[:hiker_id])
  render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_hiker.admin === true

end

def authorize_comment
  ids = []
  @current_hiker = Hiker.find_by(id: session[:hiker_id]) 
  @current_hiker.hikerhikes.each do |hh| 
    ids << hh.id 
  end
  render json: { errors: ["Not authorized"] }, status: :unauthorized unless ids.include?(params[:hikerhike_id])
end

# def render_not_found(exception)
#   render json: {error: exception.message}, status: :not_found
# end
# def render_unprocessable_entity(exception)
#   render json: exception.record.errors, status: :unprocessable_entity  
# end
end
