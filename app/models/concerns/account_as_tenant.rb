# frozen_string_literal: true

module AccountAsTenant
  extend ActiveSupport::Concern

  included do
    belongs_to :account
    acts_as_tenant :account
    validates_presence_of :account

    define_method "#{ActsAsTenant.fkey}=" do |integer|
      write_attribute(ActsAsTenant.fkey.to_s, integer)
      integer
    end

    define_method "#{ActsAsTenant.tenant_klass}=" do |model|
      super(model)
      model
    end
  end
end
