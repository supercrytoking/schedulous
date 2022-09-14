# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'POST /login', type: :request do
  let(:user) { create(:user) }
  let(:url) { '/api/login' }
  let(:params) do
    {
      user: {
        email: user.email,
        password: user.password
      }
    }
  end

  context 'when params are correct' do
    before do
      post url, params: params
    end

    it 'returns 200' do
      expect(response).to have_http_status(200)
    end

    it 'returns the user' do
      json_response = JSON.parse(response.body)
      expect(json_response['email']).to eq(user.email)
    end
  end

  context 'when login params are incorrect' do
    # logger.debug "Person attributes hash: #{@person.attributes.inspect}"
    logger.debug "Person attributes hash: #{@response}"

    before { post url }

    it 'returns unathorized status' do
      expect(response.status).to eq 401
    end
  end
end

RSpec.describe 'DELETE /logout', type: :request do
  let(:url) { '/api/logout' }

  it 'returns 204, no content' do
    delete url
    expect(response).to have_http_status(204)
  end
end
