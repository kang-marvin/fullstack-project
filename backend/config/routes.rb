Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  namespace :api do
    scope :v1 do
      get "/cats", to: "cats#index"
    end
  end
end
