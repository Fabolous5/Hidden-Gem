class ApplicationController < ActionController::Base
    before_action :confirgure_permitted_parameters, if: :devise_controller?
    protected

    def confirgure_permitted_parameters
        devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :postal_code, :age])
    end
end
