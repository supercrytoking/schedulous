# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, path: 'api', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'api/sessions',
    registrations: 'api/registrations'
  }

  get 'login', to: 'authentications#login'
  get 'signup', to: 'authentications#signup'

  namespace :api do
    resources :plans, only: %i[index show create update destroy]
    resources :people, only: %i[index show create destroy] do
      collection do
        get :autocomplete
      end
    end
    resources :programs, only: %i[index show create update destroy]
    resources :program_instances, only: %i[index show]
    resources :program_reservations, only: %i[index create] do
      member do
        patch :cancel
        patch :checked_in
      end
    end
    resources :team_members, only: %i[index]
    get '/profile', to: 'profile#index'
    resources :schedule, only: %i[index show create destroy]
  end

  get "/stripe", to: "stripe#index"
  get "/stripe/callback", to: "stripe#callback", as: "stripe_callback"

  get '*path', to: 'react#index', via: :all

  root to: redirect('/login')
end
