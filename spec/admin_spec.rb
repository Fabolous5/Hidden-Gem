require 'rails_helper'

describe "Posts API", type: :request do
    it "gets a list of Posts" do
        get '/posts'
        json = JSON.parse(response.body)
        expect(response).to have_http_status(:ok)
    end

    it "creates a post" do
         post_params = {
           post: {
             event_name: "Beach Party",
             address: "111 Beach place",
             category: "Activity" ,
             event_description: "this is a cool party for cool people...",
             start_time: "8:00 P.M",
             end_time: "12:00 A.M",
             date:"01/01/2020"
           }
         }

         post '/posts', params: post_params
         expect(response).to have_http_status(:ok)
         new_post = Post.first
         expect(new_post.event_name).to eq('Beach Party')
         expect(new_post.address).to eq('111 Beach place')
         expect(new_post.category).to eq('Activity')
         expect(new_post.event_description).to eq('this is a cool party for cool people...')
         expect(new_post.start_time).to eq('8:00 P.M')
         expect(new_post.end_time).to eq('12:00 A.M')
         expect(new_post.date).to eq('01/01/2020')

       end

       it "removes a post from table" do
            post = Post.create(
                event_name: 'Beach Party',
                address: '111 Beach place',
                category: 'Activity',
                event_description: 'this is a cool party for cool people...',
                start_time: '8:00 P.M',
                end_time: '12:00 A.M',
                date: '01/01/2020')
            expect { delete "/posts/#{post.id}" }.to change { Post.count }.by(-1)
        end

        it "updates a post" do
            post = Post.create(
                event_name: 'Beach Party',
                address: '111 Beach place',
                category: 'Activity',
                event_description: 'this is a cool party for cool people...',
                start_time: '8:00 P.M',
                end_time: '12:00 A.M',
                date: '01/01/2020')
       post_params = {
         post: {
             event_name: 'Beach Party',
             address: '111 Beach place',
             category: 'Activity',
             event_description: 'this is a cool party for cool people...',
             start_time: '9:00 P.M',
             end_time: '12:00 A.M',
             date: '01/01/2020'
         }
       }

       put "/posts/#{post.id}", params: post_params
       post.reload
       expect(post.start_time).to eq '9:00 P.M'
   end


      it "shows a post" do
          post = Post.create(
              event_name: 'Beach Party',
              address: '111 Beach place',
              category: 'Activity',
              event_description: 'this is a cool party for cool people...',
              start_time: '9:00 P.M',
              end_time: '12:00 A.M',
              date: '01/01/2020')
          get "/posts/#{post.id}"
      end

end
RSpec.describe Post, type: :model do
    pending "add some examples to (or delete) #{__FILE__}"
end
