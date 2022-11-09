class HikersController < ApplicationController
   before_action :authorize, only: [:show, :destroy, :update]
   before_action :authAdmin, only: :update 
   wrap_parameters format: [] 
   

    def index
        render json: Hiker.all, status: 200
    end

    def create
        hiker = Hiker.create!(hiker_params)
        session[:hiker_id] = hiker.id
        render json: hiker, status: 200 
        rescue ActiveRecord::RecordInvalid => invalid 
            render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def update
        hiker = Hiker.find_by(id: params[:id])
        hiker.update!(hiker_params)
        render json: hiker
      end

    def show
        hiker = Hiker.find_by(id: session[:hiker_id])
        render json: hiker
        rescue ActiveRecord::RecordInvalid => invalid 
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def destroy
       hiker = Hiker.find(params[:id])
       hiker.destroy
       session[:hiker_id] = nil
    end

    private 
    def find_hiker
        Hiker.find(params[:id])
    end
    
    # def authorize
    #     return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :hiker_id
    # end

    def hiker_params
        params.permit(:hikername, :password, :password_confirmation, :hikerhikes, :admin)
        # params.require(:hiker).permit(:hikername, :password, :password_confirmation, :hikerhikes, :admin)

    end

   
end
