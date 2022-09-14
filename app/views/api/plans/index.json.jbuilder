# frozen_string_literal: true

json.array! @plans, partial: 'api/plans/record', as: :plan
