require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get resume" do
    get pages_resume_url
    assert_response :success
  end

end
