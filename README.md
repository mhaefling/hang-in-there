# Hang in There  

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)

#### Motivational Poster Generator
- A lot of people seek motivation by looking for motivational content.
- This App allows a user to add image url's from anywhere, and add their own motivational quotes and titles to create motivational posters or randomly generate motivational posters. 

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

1. Create a directly on your local machine where you would like the app to be located.
2. Navigate to that directly in your terminal.
3. Clone this project by typing `git clone https://github.com/mhaefling/hang-in-there.git` in your terminal
4. CD into that project directly.
5. Open the "Index.html" file in your web browswer.

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off. gifs preferred!)

- Checkout the section to create your own posters!
![Screen Recording 2024-12-10 at 2](https://github.com/user-attachments/assets/b611b799-a43d-433a-9bf0-cce64a86d91a)



### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

- We started this project on Monday 12/2/2024.
- Was able to complete all iterations of the project on 12/9/2024
- Currently in Mod2

### Contributors:
[//]: <> (Who worked on this application? Link to your GitHub. Consider also providing LinkedIn link)

- Author: Matt Haefling \n
https://github.com/mhaefling \n
www.linkedin.com/in/matthew-haefling

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)

- Learning the basics of Front-End Development.
- JavaScript, HTML, CSS, Chrome Dev Tools, VS Code

- JavaScript - QuerySelectors, EventListerns, Functions, Loops
- CSS - Selectors, FlexBox
- HTML structures, child, parent, garnd-parents

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

1. When reloading the saved posters section and the unmotivational posters section because of the way the section is being displayed iterating through the array those elements are stored in and generating new html elements on the fly, it was causing duplicate images to be displayed everytime those sections were loaded.
- I resolved this problem by clearing the grids of the saved poster and unmotivational poster sections every time those sections get loaded.

2. Deleting unmotivational posters was a challenge.  Trying to figure out how to provide each poster a unique id so that you had a way to idenitify which poster needed to be removed from the array when double clicked.
- During the forEach for the unmativational posters section that creates each mini poster I assigned each element a unique class # using the classCounter variable and increasing the classCounter by 1 on each iteration. So each posters class contains a class with its index value in the array they're stored in.
