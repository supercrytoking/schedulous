# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'POST /signup', type: :request do
  let(:url) { '/api/signup' }
  let(:params) do
    {
      user: {
        name: 'The Name',
        email: 'user@example.com',
        password: 'password',
        account_attributes: {
          name: 'My Account'
        }
      }
    }
  end

  context 'when user is unauthenticated' do
    before { post url, params: params }

    it 'returns 200' do
      expect(response.status).to eq 200
    end

    it 'returns a new user' do
      json_response = JSON.parse(response.body)

      expect(json_response['email']).to eq 'user@example.com'
    end
  end

  context 'when user already exists' do
    before do
      create :user, email: params[:user][:email]
      post url, params: params
    end

    it 'returns bad request status' do
      expect(response.status).to eq 400
    end
  end
end
