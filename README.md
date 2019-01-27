## The FemiList

If you are someone who wants to Netflix and chill but also challenge the patriarchy at the same time, then the FemiList is for you. This project is inspired by my interest in media representations of gender (and my inclination to share that interest with anyone willing to listen). The app is a collaborative effort, made with fellow General Assembly grad and best friend Aubrey Northam (https://github.com/aubreynortham).

The FemiList allows users to search by movie title to see general information about a film in addition to its Bechdel rating, which rates a film based on female character development. Two separate third-party APIs are used to gather this data, the documentation for those can be found here:

Open Movie Database (OMDb API) http://www.omdbapi.com/

Bechdel Test API http://bechdeltest.com/api/v1/doc

The app itself is hosted here: https://mfournier91.github.io/FemiList/
![The FemiList App](http://i.imgur.com/Sy2QvWF.jpg)

## Technologies Used
HTML, CSS, JQuery, ReactJS, JSON, third-party APIs, GitHub

### Note to Self for Future Deploys
To run a build with secret key:
`$ REACT_APP_API_SECRET=yourKey npm run build`
Then, to allow the direct browser navigation to app subdirectories (rather than just app navigation via react router) copy the index file from the build into a 404 file
`cp build/index.html build/404.html`
Then follow the steps provided by react scripts to complete the deploy
