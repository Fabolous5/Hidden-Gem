# require 'rails_helper'
#
# describe "Users API", type: :request do
#     it "gets a list of Users" do
#         user = User.create(
#             :email,
#             :encrypted_password,
#             :reset_password_token,
#             :reset_password_sent_at,
#             :remember_created_at,
#             :created_at,
#             :updated_at,
#             :first_name,
#             :postal_code,
#             :last_name,
#             :date_of_birth,
#             :reset_password_token)
#
#         get '/users'
#         json = JSON.parse(response.body)
#         expect(response).to have_http_status(:ok)
#     end
#
#    #  it "creates a user" do
#    #       user_params = {
#    #         user: {
#    #           event_name: "Beach Party",
#    #           address: "111 Beach place",
#    #           category: "Activity" ,
#    #           event_description: "this is a cool party for cool people...",
#    #           start_time: "8:00 P.M",
#    #           end_time: "12:00 A.M",
#    #           date:"01/01/2020"
#    #         }
#    #       }
#    #
#    #       user '/users', params: user_params
#    #       expect(response).to have_http_status(:ok)
#    #       new_user = User.first
#    #       expect(new_user.event_name).to eq('Beach Party')
#    #       expect(new_user.address).to eq('111 Beach place')
#    #       expect(new_user.category).to eq('Activity')
#    #       expect(new_user.event_description).to eq('this is a cool party for cool people...')
#    #       expect(new_user.start_time).to eq('8:00 P.M')
#    #       expect(new_user.end_time).to eq('12:00 A.M')
#    #       expect(new_user.date).to eq('01/01/2020')
#    #
#    #     end
#    #
#    #     it "removes a user from table" do
#    #          user = User.create(
#    #              event_name: 'Beach Party',
#    #              address: '111 Beach place',
#    #              category: 'Activity',
#    #              event_description: 'this is a cool party for cool people...',
#    #              start_time: '8:00 P.M',
#    #              end_time: '12:00 A.M',
#    #              date: '01/01/2020')
#    #          expect { delete "/users/#{user.id}" }.to change { User.count }.by(-1)
#    #      end
#    #
#    #      it "updates a user" do
#    #          user = User.create(
#    #              event_name: 'Beach Party',
#    #              address: '111 Beach place',
#    #              category: 'Activity',
#    #              event_description: 'this is a cool party for cool people...',
#    #              start_time: '8:00 P.M',
#    #              end_time: '12:00 A.M',
#    #              date: '01/01/2020')
#    #     user_params = {
#    #       user: {
#    #           event_name: 'Beach Party',
#    #           address: '111 Beach place',
#    #           category: 'Activity',
#    #           event_description: 'this is a cool party for cool people...',
#    #           start_time: '9:00 P.M',
#    #           end_time: '12:00 A.M',
#    #           date: '01/01/2020'
#    #       }
#    #     }
#    #
#    #     put "/users/#{user.id}", params: user_params
#    #     user.reload
#    #     expect(user.start_time).to eq '9:00 P.M'
#    # end
#    #
#    #
#    #    it "shows a user" do
#    #        user = User.create(
#    #            event_name: 'Beach Party',
#    #            address: '111 Beach place',
#    #            category: 'Activity',
#    #            event_description: 'this is a cool party for cool people...',
#    #            start_time: '9:00 P.M',
#    #            end_time: '12:00 A.M',
#    #            date: '01/01/2020')
#    #        get "/users/#{user.id}"
#    #    end
#    #
# end
# RSpec.describe User, type: :model do
#     pending "add some examples to (or delete) #{__FILE__}"
# end
