!SLIDE title-slide

# Engines: how do you hack provided views?


!SLIDE

# "we need one more link down there"


!SLIDE title-slide

<img src="angry-frown.png" height="400px" />


!SLIDE

# copy and override a whole view file


!SLIDE title-slide

### "we have updated our views"

<img src="angry-desk-flip.png" height="400px" />


!SLIDE

# hooks


!SLIDE code

    @@@ HTML
    <tbody>
      <% @users.each do |user|%>
        <tr id="<%= dom_id user %>">
          <%- locals = {:user => user} %>
          <%= hook :admin_users_index_rows, locals do %>
            <td width="350px"><%=link_to user.email, object_url(user) %></td>
          <% end %>
          <td>
            <%= hook :admin_users_index_row_actions, locals do %>
              <%= link_to_edit user %> &nbsp;
              <%= link_to_delete user %>
            <% end %>
          </td>
        </tr>
      <% end %>
    </tbody>



!SLIDE title-slide

<img src="rage-unhappy.png" height="400px" />


!SLIDE

# "object-oriented" views generators


!SLIDE code

    @@@ Ruby
    class Cart::Login < User::Form
      def to_html
        h3 :'.login'
        p :'.blurbs.login'
        p :'.blurbs.register'
        super
      end

      protected

        def form_arguments
          [User.new, { :as => resource_name, :url => session_path(resource_name), :html => { :class => 'sign_in' } }]
        end
    end


!SLIDE title-slide

<img src="neutral-why.png" height="400px" />


!SLIDE

# other ideas?


!SLIDE

## manipulating DOM tree javascript-side


!SLIDE code
    

    @@@ Javascript
    $('h3').insertBefore($('.prehead'));


!SLIDE title-slide

## has anyone considered this idea seriously?

<img src="cool_story_bro.jpg" height="400px" />


!SLIDE

# The foundation of our problem

## DOM is *a tree*
### if you ignore that, you're heading for fail

<img src="failroad.jpg" height="300px" />