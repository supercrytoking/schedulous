# frozen_string_literal: true

# Pin npm packages by running ./bin/importmap

pin "application", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin '@rails/ujs', to: 'https://ga.jspm.io/npm:@rails/ujs@6.1.4-1/lib/assets/compiled/rails-ujs.js'
