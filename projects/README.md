# How to add a project

1. Copy the template folder and rename it to your project name.
2. Add a landscape teaser image called `teaser.jpg`. (you can use another
   extension, just update the link in the HTML)
3. Update the `index.html` file in your project folder with your project info.
   The fields which need to be updated are marked with square brackets. You can
   add/remove sections/content/styling as you wish - just don't change existing
   classes in `projects.css` unless you are sure you know what you're doing as
   this will affect all the other project pages.
4. Copy paper bibtex from your favorite source and make sure it looks nice.
5. To embed a youtube video, go to the video page and select `Share` and
   `Embed`. It will give you an `iframe` snippet to copy and paste. We only need
   the source url that is in that snippet; copy and paste it into the `src`
   attribute of the iframe tag in the template. (Don't add the default youtube
   iframe - I've added some custom styling to the iframe in the template.)
6. To add a link to your project to the home page, add a thumbnail image to your
   project folder. Copy and paste one of the existing entries in the home page
   html. Make sure it links to the appropriate project folder. Use relative
   links because the base URL will change when hosted.
