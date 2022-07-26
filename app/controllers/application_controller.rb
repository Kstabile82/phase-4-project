class ApplicationController < ActionController::API
  include ActionController::Cookies
  # include ActionController::Caching

  
private

  def authorize
    @current_hiker = Hiker.find_by(id: session[:hiker_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_hiker
  end

  def render_not_found_response
    render json: { error: "Not found" }, status: :not_found
  end

  def authAdmin
    @current_hiker = Hiker.find_by(id: session[:hiker_id])
    # @current_hiker = Hiker.find_by(id: session)

    render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_hiker.admin === true

  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

# def render_not_found(exception)
#   render json: {error: exception.message}, status: :not_found
# end


end
