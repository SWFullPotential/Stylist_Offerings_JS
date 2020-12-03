Rails.application.routes.draw do
  get '/hairservices/ordered', to: 'hairservices#ordered'
<<<<<<< HEAD
=======
  
>>>>>>> b342d87a47da638f07250bb2b66a471905b78e0e
  resources :hairservices
  resources :hairstylists

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
