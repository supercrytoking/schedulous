# frozen_string_literal: true

require 'rails_helper'

RSpec.shared_examples "Account as a Tenant" do
  before(:each) do
    ActsAsTenant.current_tenant = nil
  end

  it { is_expected.to belong_to :account }

  it "raises ActsAsTenant::Errors::NoTenantSet account is not present" do
    class_name = described_class.to_s.underscore

    ActsAsTenant.with_tenant(nil) do
      element = build(:"#{class_name}", account: nil)
      expect(element.invalid?).to be_truthy
    end
  end

  it "implements act_as_a_tenant" do
    expect(described_class.scoped_by_tenant?).to eq true
  end

  describe "queries scope by tenant by default if it is set" do
    before(:each) do
      @other_tenant = create(:account)
      class_name = described_class.to_s.underscore
      @element = create(:"#{class_name}")
      ActsAsTenant.with_tenant(@other_tenant) do
        @element_with_other_tenant = create(:"#{class_name}")
      end
    end
    it "executes a select and scopes with current account" do
      ActsAsTenant.with_tenant(@element.account) do
        expect(described_class.all).to include(@element)
        expect(described_class.all).not_to include(@element_with_other_tenant)
      end
    end
  end
end
