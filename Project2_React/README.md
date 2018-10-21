# IT2810 Web development Project-2 Group 41

The group consist of Oscar Vik, Martin Johansen and Kristoffer Gjerde.

In this project we created an online exhibit with user-controlled combinations of audio, 
graphics and text. This was implemented as a single page application (SPA) with React and data 
that loads automatically with ajax.

The exhibition has responsive web design where layout, scaling and interaction capabilities 
customize the device type and size of the screen. We are proud of the product we made and we 
think it fits the requirements  as it should.

## Content and functionality
The user is able to choose from 3 categories of images, 3 categories of audio and 3 categories of text,
and based on these choices, we generate an exhibition with 4 combinations of an image, text and 
audio. Each combination appears in separate section with a tab display.
The user is able to change to the categories of his choice and gets a new exhibit upon changes.

We followed the three points in the requirements:
1. The graphics are all svg-files (xml-data)
2. The sounds are saved as .mp3 files and played in the HTML5 audio-tag
3. The texts are saved in a json-file that contains poems, songs and haiku

Files are stored locally (in the public folder) along with other source files in this task. Here we 
have grouped these files by media type and category in directories so that it is 
easy for us generate URLs for the files based on user selections. These files are
also uploaded on github.

The complexity of the content and the artistic spirit is not that advanced, but that is not the goal with
this project either. 

## Technologies
**React**   
Our solution is based on React (and JSX) where we used the create-react-app to get started. In most cases 
we have used classes that extends react component instead of using stateless functional components. This is 
because we felt that it was convenient to save the state in our components.

In this project we where not suppose to use other libraries like redux and mobx to handle the state. 
Therefore the use of callback functions has been a really important part of this project. Also we where 
not allowed to use any other react libraries for UI components, so everything is made from scratch. 

**Ajax**   
All the svg images and text from json file are dynamically loaded with AJAX requests. Here we chose 
to use axios, because this is one of the most used module for doing requests likes this and very easy to
get started with.

The files are only loaded once when they are being used. Every time the user choose a category, the
four items that the user can choose between are loaded. When the user choose a tab, the content is already
loaded and ready to display. So changing the tabs will not result in new AJAX request, but only show the
content that has already been loaded.

The media player was simply added with the HTML5 audio tag, and we did not need to do implement any
special method for loading the mp3 files. All we did here where changing the source path in the audio tag.

**Responsive Web Design**  
/Oscar

## Testing   



## Sources
**SVG-Files**
* https://www.flaticon.com/

**Texts**
* http://dikt.org/
* http://examples.yourdictionary.com/examples-of-haiku-poems.html
* https://www.barnesanger.no/alle-barnesanger.html

**Sounds**
* http://soundbible.com/tags-short.html
* https://www.zapsplat.com/

