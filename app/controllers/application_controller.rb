class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :postal_code, :date_of_birth])
    end

    before_action :configure_permitted_parameters, if: :devise_controller?
    protected

    # def this_user
    #     current_user ? current_user.first_name : "Fake"
    # end
    # def user
    #     u = User.friendly.find_by(first_name: params[:first_name] )
    #     u.first_name if current_user
    # end


end
