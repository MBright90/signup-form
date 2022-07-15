# signup-form

  A simple sign-up form created as part of my learning through 'The Odin Project' (www.theodinproject.com). Prior to creating this page I had 
 researched HTML5 client side validation and targeted a personal stretch goal of including regex and javascript validation too.

 /// -------- Thoughts on my process and issues I encountered -------- ///

My first step in creating the website was to create a functional design. Although I chose to create it initially as a desktop sized page, I knew that at the end of the project I would make it responsive. With this in mind, I lay out the page into two main sections: the image section and the form section. I used flex-box as my primary positioning system due to the ease of centering and evenly positioning elements. I also took advantage of the flex-box wrap attribute when positioning the .form-rows as this allowed me an easy responsive set up while ensuring the page itself looked great at all times.

One issue I encountered during my development of this page was the validation of the password. I created a function using JS to check that the confirm-password field matched the choose-password field. However, after inspecting the input element I quickly realized that I was unable to use 'input.validity = valid' as a method to create my own validation requirement. Upon further research, I found and read about the setCustomValidity method and used this to validate the input.

Early on I had known that user feedback would be of utmost importance in this project, and that I did not want the user to have to wait until they had attempted to submit the form to see if they had been successful. To do this I added the :valid pseudo-class to each of the inputs. I added a check mark which appears the moment that the input is deemed as valid. This avoids having the user be faced with red boxes on first entering the page, and becoming frustrated that they are being told something is wrong before they have had a chance to do anything. I also changed the :focus outline to green upon validation as further indication.

In choosing a password I wanted the user to be able to see the requirements expected of their choice, without needlessly cluttering up the page when the password is not being worked upon. I used javascript to change the display type of this list to only show when one of the password fields is being edited. Working further on this list I came up with an idea to change the color of each requirement when that requirement is met. To do this, I chose to create a regex dataset attribute for each individual li item. I researched how to use the RegExp object in JS and worked out how to pass the pattern from my dataset variable into a valid RegExp object, before comparing this to the current value of the password and setting the color of the li accordingly.

/// -------- Initial commit README --------////

Creating a basic sign up form for a fictional website. The intention of this project is to continue to develop design and positioning of html elements, in addition to improving my understanding of the use of html forms and client-side validation.

