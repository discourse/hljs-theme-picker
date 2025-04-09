# frozen_string_literal: true

RSpec.describe "Core features", type: :system do
  before do
    SiteSetting.authorized_extensions_for_staff = "css"
    upload_theme_or_component
  end

  it_behaves_like "having working core features"
end
