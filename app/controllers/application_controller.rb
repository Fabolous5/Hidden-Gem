class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    def configure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :postal_code, :date_of_birth])
    end
    before_action :configure_permitted_parameters, if: :devise_controller?
    protected



end
