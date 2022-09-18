class ApplicationController < ActionController::API
  include ActionController::Cookies
  
private

def authorize
  @current_hiker = Hiker.find_by(id: session[:hiker_id])
  render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_hiker
end

# def render_not_found_response
#   render json: { error: "ID not found" }, status: :not_found
# end

# def render_not_found(exception)
#   render json: {error: exception.message}, status: :not_found
# end
# def render_unprocessable_entity(exception)
#   render json: exception.record.errors, status: :unprocessable_entity  
# end
end
