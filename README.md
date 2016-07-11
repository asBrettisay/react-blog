## React Blog Overview

### What are we building

####

* We will be building a REACT blog feed page and a profile page
* The following images are of the finished design. The black diamond for this project will be to match the designs.

### Blog-Feed

####

<img src="http://i.imgur.com/oMwsnug.jpg" width="100%" height="100%"></img>



### Blog-Profile
####
<img src="http://i.imgur.com/KV9PVdC.jpg" width="100%" height="100%"></img>

####

--------

## 1) Setting Up Our Project

### Setting Up Our Project

####

* You may want to take a moment to get your editor comfortable with JSX.
  * For Atom, `apm install react language-babel`.
  * For Sublime Text, search for `Babel` in Package Control.
  * For VS Code, with admin rights `npm install typings -global` then `typings install --ambient react-global`
* Some JSX gotchas:
  * Don't try to comment your JSX.
  * Don't try `if` statements in your JSX.
  * All tags must be closed (including void tags like `hr` and `img`).
    * But, all tags can be _self_ closing (eg `<div />`), which is nice.
* There are some really nifty DevTools extensions for working with React:
  * [Show Me The React](https://chrome.google.com/webstore/detail/show-me-the-react/iaebolhfcmodobkanmaahdhnlplncbnd)
  * [Official React DevTools Extension](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  * [Official Tools Addon for Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
* Some additional React resources:
  * [SurviveJS](https://survivejs.com/), a very in-depth beginner's guide to React
  * [React Tidbits](https://github.com/zacanger/react-tidbits): demos, boilerplates, and more links.


Go ahead and check out your directory structure now. It should look something like this:
Folder structure as we know by now is really important. This is especially the case with REACT.
Good folder structure in REACT can help developers reason about their project a lot easier and faster.

```
app
  components
    Home
        Home.css
        Home.jsx
    Blog-intro-container
        Blog-image
            Blog-link
                Blog-link.css
                Blog-link.js
            Blog-image.css
            Blog-image.js
        Blog-meta
            Blog-meta.css
            Blog-meta.js
    Profile-container
        Image-block
            Image-block.css
            Image-block.js
        Profile
          Profile-container.css
          Profile-container.js

  config
    routes.js
  utils
    helpers.js
  App.js
public
  styles
    base
        fonts.css
        normalize.css
        reset.css
  bundle.js
  index.html
.gitignore
package.json
README.md
server.js
webpack.config.js

```

We're breaking out all our source into subdirectories by _component_. This is a common pattern in modern front-end
JS, and one that keep organization very logical and convenient as an app grows.

* You'll want to `npm install` right away.

### Smart/Container vs Dumb/Presentational Components
####
We'll be building two types of components.

* Smart (or Container) components:
  * Describe how things work
  * Fetch data and provide data
  * Call actions
* Dumb (or Presentational) components:
  * Describe how things look
  * Have no app dependencies
  * Receive only props (providing data and callbacks)
  * Rarely have state (just UI state)

We're using this convention because it makes our app easier to reason about, makes UI components
more reusable, and keeps most of our logic in the Smart components.

### Npm Install
####
* Run npm install to get all the dependencies we need


### Webpack
####
Webpack is a build tool primarily intended for front-end code.
There are other systems you can use to work with React, but it's worth taking the time to learn Webpack.

* The webpack.config.js file is already completed and looks like this

```

module.exports = {
  entry: "./app/App.js",
  output: {
    filename: "public/bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
      {test: /\.png$/, loader: 'url', exclude: /node_modules/}
    ]
  }
};

```

Now, you should be able to run `webpack` without anything breaking!


### App (Entry Point)
####

* Our `App.js` will serve as the entry point for all of our code.
* You'll want to set this up to import everything else.

```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory  } from 'react-router';
import routes from './config/routes';

ReactDOM.render(
    <Router history={ hashHistory }>{routes}</Router>,
    document.getElementById('app')
)

```

* Note that we're targeting the element with an ID of `app`.
* Our entire React app will live inside that `div` in our `index.html`.



### Running the project
####
* As you are building the application you will need to be running webpack, http-server and nodemon
* Webpack is used to bundle your javascript
* nodemon is to run the server
* http-server is used so we can make api calls to our server and run the app on localhost

* Run webpack -w first, second run nodemon server.js and final run http-server



## 1) Blog-feed

### Blog-Feed
####
<img src="http://i.imgur.com/oMwsnug.jpg" width="100%" height="100%"></img>


### Home Component

####

Our home component is the container component that holds our Blog-intro-container so let's se that up first.

* In the Home.js file import import React, and require('./Home.css') at the top of the file.
* We also should import the Blog-intro-container even though we havent set it up yet, so import BlogIntro from '../Blog-intro-container/Blog-intro-container';
* Using the ES6/es2015  class syntax create the Home component. Is looks like this:  class Home extends React.Component { }
* Make sure export default Home under your React.Component
* This component is going to be really simple, all we need to do is invoke the render method  render() and inside the render method return a div with className main-home-container. Inside the main-home-container include the
 <BlogIntro /> intro component

####

```javascript


import React from 'react';
import BlogIntro from '../Blog-intro-container/Blog-intro-container';

class Home extends React.Component {

 Write your render method that returns the BlogIntro component

}


export default Home



```

####

```javascript

import React from 'react';
import BlogIntro from '../Blog-intro-container/Blog-intro-container';
import {getUserInfo,getPosts} from '../../utils/helpers'

class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cardData: [],
            userInfo: {},
            intro: ''
        }
    }

    render(){
        return (
            <div>
                <BlogIntro />
            </div>
        )
    }

}


export default Home




```


### Importing dependencies: Blog-intro-container Component

####

Our BlogIntroContainer component is the container component that holds our Blog-image component and our Blog-meta component so there is a lot going lets get to it!

* In the Blog-intro-container.js file import import React, and require('./Blog-intro-container.css') at the top of the file.
* Because this component is going to be doing a lot of the heavy lift we need to import a few more things
* Import usersBlogData from utils/helpers
* Now that we have our helper functions let import the components we need
* Import BlogImage from './Blog-image/Blog-image';
* Import BlogMeta from './Blog-meta/Blog-meta';
* Now that we have all our components and helpers we need lets create the BlogIntroContainer

####

```javascript


import React from 'react';
import {usersBlogData} from '../../utils/helpers'
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';



```

### Creating the  BlogIntroContainer Component

####

* Using the ES6/es2015  class syntax create the BlogIntroContainer component. Is looks like this:  class BlogIntroContainer extends React.Component { }
* Make sure to export default BlogIntroContainer under your React.Component. This will make our component available to import in other modules "exactly like we are doing in the Home component"
* Inside the BlogIntroContainer React.Component at the top add a constructor method that takes props as a parameter

####

```
import React from 'react';
import {usersBlogData} from '../../utils/helpers'
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';



class BlogIntroContainer extends React.Component {
    constructor method goes here

 }


export default BlogIntroContainer

```

####

```

import React from 'react';
import {usersBlogData} from '../../utils/helpers'
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';



class BlogIntroContainer extends React.Component {
     constructor(props){}

 }


export default BlogIntroContainer

```

### Setting up the state BlogIntroContainer Component

####

* Directly under the constructor method add a super method that takes props as a parameter. We are passing props into super so we can have access to props inside our constructor using the this keyword
* Now we need to set up the default state of our component this is usually done with empty data. Under the super(props) set the state by creating a object on this.state.
* Inside the this.state object add a property called  usersBlogData with the value as a empty array


####


```javascript

   import React from 'react';
   import {usersBlogData} from '../../utils/helpers'
   import BlogImage from './Blog-image/Blog-image';
   import BlogMeta from './Blog-meta/Blog-meta';

   class BlogIntroContainer extends React.Component {
         constructor(props){
              super method goes here

              set the default state using this.state
           }

    }


   export default BlogIntroContainer

```

####


```javascript

import React from 'react';
import {usersBlogData} from '../../utils/helpers'
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';

class BlogIntroContainer extends React.Component {
       constructor(props){
             super(props);
             this.state = {
                 usersBlogData: []

             }
         }
 }


export default BlogIntroContainer

```

### Life Cycle  BlogIntroContainer Component

####

* This information will be covered on day 2 so for now just copy and paste the code below under your constructor function


```javascript

    componentDidMount(){
    this.init()
}

    init(){
        usersBlogData().then(function(data){
            this.setState({
                usersBlogData: data.data
            })
        }.bind(this));
    }


```


### Render Method BlogIntroContainer Component

####


* Create a render method that returns a div.
* As you can see in the image below we need to iterate over our usersBlogData so we can repeat our BlogImage and BlogMeta components for every item found in the  usersBlogData array
We can do this by using the javascript map method.

* Inside the newly created div create a map method that iterates over the userBlogData, add data parameter to the map method. This map method is going to return the BlogImage and BlogMeta components


```javascript

  render(){
        return (
            <div>
                {this.state.usersBlogData.map((data) => {
                    return (
                        <div key={data.id}>
                            <BlogMeta />
                            <BlogImage />
                        </div>
                    )
                })}

            </div>
        )
    }


```

<img src="http://i.imgur.com/N4dCaXv.jpg" width="100%" height="100%"></img>






### Passing data to the BlogMeta and BlogImage components

####


* On the BlogMeta component add an attribute called metaInfo that has a value of data
* On the BlogImage component add an attribute called blogInfo that has a value of data





```javascript

  render(){
        return (
            <div>
                {this.state.usersBlogData.map((data) => {
                    return (
                        <div key={data.id}>
                            <BlogMeta metaInfo={data} />
                            <BlogImage blogInfo={data} />
                        </div>
                    )
                })}

            </div>
        )
    }


```



### Creating the BlogImage Component

####

* Inside the Blog-image.js file import REACT, BlogLink and require the css file
* This component is going to be a dumb component it isn't as complicated as the BlogIntroContainer component because it's only receiving data and displaying it
* Using the ES6/es2015 syntax create a function called BlogImage that takes {blogInfo} as a parameter and returns a div that wraps a image tag and the BlogLink component
* By default Export the component
* Add a propType object on the BlogImage component that has a property blogInfo with the value set to React.PropTypes.object.isRequired



####



```javascript

  import React from 'react';
  import BlogLink from './Blog-link/Blog-link';

  const function name = (blogInfo object) => {
      return (


      <div>
          <img/>

            BlogLink component
      </div>
      );
  };




  BlogImage.propTypes = {
      blogInfo: React.PropTypes.object.isRequired
  };



  export default BlogImage


```


####



### Passing data to img tag

####

* Set the value of the source attribute on the image element to {blogInfo.image}


####

```
 <img className="blog-intro-img" src={blogInfo.image} alt=""/>

```


### Passing data to BlogLink component

####

* On the BlogLink component add a attribute called blogInfo that has a value of {blogInfo}


####


```javascript

 <BlogLink blogInfo={blogInfo} />


```




### Creating the BlogMeta Component

####

* Inside the Blog-meta.js file import REACT and require the css file
* This component is going to be a dumb component it isn't as complicated as the BlogIntroContainer component because it's only receiving data and displaying it
* Using the ES6/es2015 syntax create a function called BlogMeta that takes {metaInfo} as a parameter and returns a div.
8 Inside the newly created div you can start to display your data
* By default Export the component
* Add a propType object on the BlogMeta component that has a property metaInfo with the value set to React.PropTypes.object.isRequired


####



```javascript

 import React from 'react';


 const BlogMeta = ({metaInfo}) => {
     return (
         <div>
             <div>
             <h2> display properties on the metaInfo object</h2>
             <p> display properties on the metaInfo object  </p>
             <h2>display properties on the metaInfo object</h2>
             </div>
         </div>
     );
 };

 BlogMeta.propTypes = {
     metaInfo: React.PropTypes.object.isRequired
 };



 export default BlogMeta


```


####




```

 import React from 'react';


 const BlogMeta = ({metaInfo}) => {
     return (
         <div>
             <div>
             <h2>{metaInfo.username}</h2>

             </div>
         </div>
     );
 };

 BlogMeta.propTypes = {
     metaInfo: React.PropTypes.object.isRequired
 };



 export default BlogMeta



```






## 1) Blog-Profile


### Blog-Profile
####

<img src="http://i.imgur.com/KV9PVdC.jpg" width="100%" height="100%"></img>


### Creating the ProfileContainer Component

####

* Inside teh profile-container.js file import REACT, Profile from './Profile/Profile', PhotoGrid from './Image-block/Image-block', {getUserInfo,getPosts} from '../../utils/helpers' and require the css file
* Using the ES6/es2015  class syntax create the ProfileContainer component. Is looks like this:  class ProfileContainer extends React.Component { }
* Make sure to export default ProfileContainer under your React.Component. This will make our component available to import in other modules.
* Inside the ProfileContainer React.Component at the top add a constructor method that takes props as a parameter


####



### Setting up the state ProfileContainer Component

####

* Directly under the constructor method add a super method that takes props as a parameter. We are passing props into super so we can have access to props inside our constructor using the this keyword
* Now we need to set up the default state of our component this is usually done with empty data. Under the super(props) set the state by creating a object on this.state.
* Inside the this.state object add a property called  cardData with the value as a empty array. Add another property called userInfo with the value being a empty object.


####


```javascript

import React from 'react';
import Profile from './Profile/Profile';
import PhotoGrid from './Image-block/Image-block';
import {getUserInfo,getPosts} from '../../utils/helpers'

class  ProfileContainer extends React.Component {
    constructor(add props){
        super(add props);
        this.state = {
           set your state

        }
    }




}


export default ProfileContainer



```


####


```javascript

import React from 'react';
import Profile from './Profile/Profile';
import PhotoGrid from './Image-block/Image-block';
import {getUserInfo,getPosts} from '../../utils/helpers'

class  ProfileContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cardData: [],
            userInfo: {},

        }
    }


}


export default ProfileContainer



```


### Life Cycle  ProfileContainer Component

####

* This information will be covered on day 2 so for now just copy and paste the code below under your constructor function


```javascript

    componentDidMount(){
           getUserInfo(this.props.params.userid).then(function(data){
               this.setState({
                   userInfo: data.data
               })
           }.bind(this));

           getPosts().then(function(data){
               this.setState({
                   cardData: data.data
               })
           }.bind(this));

       }


```


### Render Method ProfileContainer Component

####


* Create a render method that returns a div.
* Inside the newly created div add the Profile component and add a attribute called user with the value being {this.state.userInfo}
* Inside the newly created div add the PhotoGrid component and add a attribute called cardData with the value being {this.state.cardData}




```javascript

render(){
        return (
            <div>
               Add components here
            </div>
        )
    }


```

####

```
render(){
        return (
            <div>
                <Profile user={this.state.userInfo} />
                <PhotoGrid cardData={this.state.cardData} />
            </div>
        )
    }

```



### Creating the Profile Component

####


* Inside the profile.js file import REACT and require the css file
* This component is going to be a dumb component it isn't as complicated as the ProfileContainer component because it's only receiving data and displaying it
* Using the ES6/es2015 syntax create a function called Profile that takes {user} as a parameter and returns a div
* By default Export the component
* Add a propType object on the Profile component that has a property user with the value set to  React.PropTypes.object.isRequired




####


### Displaying Data Profile Component

* Now that we have the skeleton of the component created we can display the data
* Inside the return statement you can start to display your data by acessing the properties on the user object

```javascript

import React from 'react';


const Profile = ({user}) => {
    return (
        <div>
            <div>
            <img src={user.image} alt={user.username}/>
            </div>
            <div>
                <h1> username property </h1>
                <p> intro property </p>
                <div>
                    <h1> likeCount property </h1>
                </div>
            </div>
        </div>
    );
};


Profile.propTypes = {
    user: React.PropTypes.object.isRequired
};



export default Profile


```


####



```javascript

import React from 'react';


const Profile = ({user}) => {
    return (
        <div>
            <div>
            <img src={user.image} alt={user.username}/>
            </div>
            <div>
                <h1>{user.username}</h1>
                <p>{user.intro}</p>
                <div>
                    <h1>{user.likeCount}</h1>
                </div>
            </div>
        </div>
    );
};


Profile.propTypes = {
    user: React.PropTypes.object.isRequired
};



export default Profile



```


### Creating the PhotoGrid Component

####


* Inside the image-block.js file import REACT and require the css file
* This component is going to be a dumb component it isn't as complicated as the ProfileContainer component because it's only receiving data and displaying it
* Using the ES6/es2015 syntax create a function called PhotoGrid that takes {cardData} as a parameter and returns a div
* By default Export the component
* Add a propType object on the PhotoGrid component that has a property cardData with the value set to  React.PropTypes.array.isRequired



####


### Displaying Data PhotoGrid Component

* Now that we have the skeleton of the component created we can display the data
* Inside the return statement you can start to display your data by accessing the properties on the {cardData} object
* You will need to use the javascript map method because we want to iterate over every item in the cardData array


<img src="http://i.imgur.com/wIfY6J8.jpg" width="100%" height="100%"></img>



```javascript

import React from 'react';


const PhotoGrid = ({cardData}) => {
    return (
        <div>
            <div>
                {cardData.map((data) => {
                    return (

                       Here you can add your container div with the image tag
                    )
                })}
            </div>
        </div>
    );
};


PhotoGrid.propTypes = {
    cardData: React.PropTypes.array.isRequired
};



export default PhotoGrid




```


####



```javascript

import React from 'react';


const PhotoGrid = ({cardData}) => {
    return (
        <div>
            <div>
                {cardData.map((data) => {
                    return (
                        <div key={data.id}>
                            <div>
                                <img src={data.link} alt={data.name}/>
                            </div>
                            <div>
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};


PhotoGrid.propTypes = {
    cardData: React.PropTypes.array.isRequired
};



export default PhotoGrid



```





## 2) Axios

### Helpers
####
* We are going to write a couple helper functions that we are going to use to get our data from our api
* Open helpers.js located in the utils folder
* import axios from 'axios'
* We need 3 functions getPosts, getUserInfo, userBlogData to get our application to work.


### getPosts
####
* create a function called getPosts that returns axios.get `http://localhost:8080/api/blogData`
* Make sure you export this function or you will not be able to import it into another file


```javascript

export function getPosts(){
 return axios.get(`http://localhost:8080/api/blogData`)
     .then(callback function {
       return data;
     })
     .catch(callback function{
         return data
     });

};


```

####


 ```javascript


export function getPosts (){
    return axios.get(`http://localhost:8080/api/blogData`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
            return data
        });

};

```



### getUserInfo

####

* create a function called getUserInfo that returns axios.get `http://localhost:8080/api/userInfo/${id}`
* Make sure you export this function or you will not be able to import it into another file


```javascript


export function getUserInfo(id) {
    return axios.get(`http://localhost:8080/api/userInfo/${id}`)
        .then(callback function {
            return data;
        })
        .catch(callback function {
            return data
        });

};

```


####

```javascript



export function getUserInfo (id) {
    return axios.get(`http://localhost:8080/api/userInfo/${id}`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
            return data
        });

};


```



### usersBlogData
####

* create a function called usersBlogData that returns axios.get `http://localhost:8080/api/usersBlogData`
* Make sure you export this function or you will not be able to import it into another file


```javascript


export function  usersBlogData  () {
    return axios.get(`http://localhost:8080/api/usersBlogData`)
        .then(callback function {
            return data;
        })
        .catch(callback function {
            return data
        });

};

```


####

```javascript



export function  usersBlogData () {
    return axios.get(`http://localhost:8080/api/usersBlogData`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
            return data
        });

};


```



### Importing Helper Functions

### Import Helpers in BlogIntroContainer
####
* inside the blog-intro-container component import the usersBlogData helper

### Import Helpers in ProfileContainer
####
* inside the Profile-container component import {getUserInfo,getPosts} helpers





## 2) Life Cycle

### componentDidMount BlogIntroContainer
####
* We need to make a api request to get the userBlogData but we dont want to do this until the component has mounted.
* Write a componentDidMount method that will invoke this.init
* Write a init method, inside this init method invoke the usersBlogData
* After the usersBlogData has been invoked use the .then syntax to resolve the promise. Inside the promise callback set the state using this.setState
* this.setState needs to have a usersBlogData property with the value equal to the data from the promise
* After the promise be sure to bind(this)

####

```javascript

 componentDidMount(){
        invoke init
    }


    init(){
       invoke the usersBlogData function and use the .then syntax to resolve the promise. Inside the promise callback set the state using this.setState
    }be sure to bind(this)


```

####



```javascript

   componentDidMount(){
         this.init()
     }


     init(){
         usersBlogData().then(function(data){
             this.setState({
                 usersBlogData: data.data
             })
         }.bind(this));
     }

```



### componentDidMount ProfileContainer
####
* We need to make two api requests but we don't want to do this until the component has mounted.
* Write a componentDidMount method that will invoke the getUserInfo and getPosts helper functions


### getUserInfo
####
* The getUserInfo function needs to get the user id from the url params.
* After the getUserInfo function has been invoked  .then syntax to resolve the promise. Inside the promise callback set the state using this.setState
* Inside this.setState add a property called userInfo with the value being the data from the promise callback


####

```javascript

    componentDidMount(){
        getUserInfo(get id from url params).then(callback function with data{
            this.setState({
                set the state here
            })
        }.bind(this));

    }



```

####


```javascript

    componentDidMount(){
        getUserInfo(this.props.params.userid).then(function(data){
            this.setState({
                userInfo: data.data
            })
        }.bind(this));


    }



```

### getPosts
####
* After the getPosts function has been invoked  .then syntax to resolve the promise. Inside the promise callback set the state using this.setState
* Inside this.setState add a property called cardData with the value being the data from the promise callback


####

```javascript

    componentDidMount(){
           getUserInfo(this.props.params.userid).then(function(data){
               this.setState({
                   userInfo: data.data
               })
           }.bind(this));

           getPosts().then(callback function {
               this.setState({
                  set state
               })
           }.bind(this));

       }

```

####


```javascript


    componentDidMount(){
           getUserInfo(this.props.params.userid).then(function(data){
               this.setState({
                   userInfo: data.data
               })
           }.bind(this));

           getPosts().then(function(data){
               this.setState({
                   cardData: data.data
               })
           }.bind(this));

       }



```


## 2)  Routing

### Setting up router
####

* Routing in React is a really vast topic, and there are a _lot_ of different ways to go about it.
* For this project, we'll use `react-router`.
* Inside of `app/config/routes.js` we'll set up very basic routing, so that our `Home` component loads and so you can navigate to the profile page
* You'll want to import React and your Home and ProfileContainer  components, and then a few things from `react-router`.
* import { Router, Route, IndexRoute,hashHistory } from 'react-router'

* Below is an example of what your routes.js should look like


```javascript

import React from 'react';
import Home from '../components/Home/Home';
import  ProfileContainer from '../components/Profile-container/Profile-container';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default (
    <Router history={ hashHistory }>
        <Route path="/" component={Home}>
            <IndexRoute component={Home}></IndexRoute>
        </Route>
        <Route path="/profile/:userid" component={ProfileContainer}></Route>
    </Router>

);


```



## 3)  Redux

### Installing Dependencies
####
* npm install --save redux
* npm install --save react-redux

### Setting up App.js
####
* We need to import of few things into our App.js file
* Import Provider from react-redux
* Import createStore from redux
* Import reducer from ./Redux/Like

### Creating the redux store in App.js
####
* Now that we have imported our dependencies we need to create a redux store
* Create a variable called store that is equal to createStore(reducer);


* Now that we have created the redux store we need to implement it on the Provider component
* The Provider component is going to wrap our Router component
* On the Provider component that is wrapping our Router component add an attribute called store that is equal to store "dont forget your { } brackets"

####

```javascript

ReactDOM.render(
    <Provider store={store}>
        <Router history={ hashHistory }>{routes}</Router>
    </Provider>,
    document.getElementById('app')
)

```


### Creating the reducer
####
* Now we need to go into our Like.js file and create the reducer that we will be dispatching actions to
* Create a variable called LIKE set it equal to 'LIKE'
* Create a variable called UNLIKE set it equal to 'UNLIKE'
* Create a variable called initialState that is equal to an object that has a property called like that has a the value of 'false'
* Now we need to actually create the reducer function
* export a function called reducer
* The reducer function takes state and action as parameters
* It looks like this

```javascript

export function reducer(state = initialState, action = {}) {}

```

* Now we need to write a javascript switch statement
* Inside the reducer function write a switch statement that takes action.type as an argument
* The first case is LIKE that returns like: "true"
* The second case is UNLIKE that return like: "false"
* Make sure your default return state after your case statements



####

```javascript

const LIKE = 'LIKE';
const UNLIKE = 'UNLIKE';

const initialState = {
    like: "false"
};

export function reducer(state = initialState, action = {}) {
   Write your switch statment here
}


```
####

```javascript

const LIKE = 'LIKE';
const UNLIKE = 'UNLIKE';

const initialState = {
    like: "false"
};

export function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LIKE:
            return {
                like:"true"
            };
        case UNLIKE:
            return {
                like: "false"
            };

        default:
            return state;
    }
}



```


### Creating the actions
####
* Inside the Like.js file under the reducer function we need to write two actions
* The first is likeBlog function that returns the type: LIKE
* The second is a unLikeBlog function that returns the type: UNLIKE


####

```javascript

export function likeBlog() {
    return {
        type: LIKE
    };
}

export function unLikeBlog() {
    return {
        type: UNLIKE
    };
}

```




### Implementing redux in Profile-container.js
####
* Import connect from 'react-redux'
* Import likeBlog and unLikeBlog from Like.js
* Under our component we need to add a few things to get redux to work
* Write a function called stateToProps that takes state as a parameter and returns a property called like that has a value of state.like
* Under the stateToProps function create a variable called connectedProfileContainer that is equal to connect(stateToProps, {likeBlog: likeBlog, unLikeBlog: unLikeBlog})(ProfileContainer)
* Change the export default from ProfileContainer to connectedProfileContainer


####

```javascript

function stateToProps(state){
    return {
        like: state.like
    }
}



var connectedProfileContainer = connect(stateToProps, {likeBlog: likeBlog, unLikeBlog: unLikeBlog})(ProfileContainer)

export default connectedProfileContainer



```


### Passing props to Profile
####
* Now that we need to pass some props to our Profile component

* On the profile component inside the ProfileContainer add these attributes like={this.props.like}, likeBlog={this.props.likeBlog}, unLikeBlog={this.props.unLikeBlog}

<Profile user={this.state.userInfo} like={this.props.like} likeBlog={this.props.likeBlog} unLikeBlog={this.props.unLikeBlog}/>






### Invoking likeBlog and unLikeBlog
####
* Inside the the Profile component create two buttons
* The first button should invoke likeBlog onClick
* The second button should invoke unLikeBlog onClick
* Add a h3 tag that will display the like property being passed in as props from redux
* You should now be able to change the like to false or true onClick

####

```javascript


const Profile = ({user, like, likeBlog, unLikeBlog}) => {
    return (
        <div>
            <div>
                <img src={user.image} alt={user.username}/>
            </div>
            <div>
                <h1>{user.username}</h1>
                <p>{user.intro}</p>
                <div>
                    <h1>{user.likeCount}</h1>
                    <h3>Like : {like}</h3>
                    <button onClick={Invoke the likeBlog}> LIKE </button>
                    <button onClick={Invoke the unlikeBlog}> UNLIKE </button>
                </div>
            </div>
        </div>
    );
};


```
####

```javascript


const Profile = ({user, like, likeBlog, unLikeBlog}) => {
    return (
        <div>
            <div>
                <img src={user.image} alt={user.username}/>
            </div>
            <div>
                <h1>{user.username}</h1>
                <p>{user.intro}</p>
                <div>
                    <h1>{user.likeCount}</h1>
                    <h3>Like : {like}</h3>
                    <button onClick={()=>likeBlog()}> LIKE </button>
                    <button onClick={()=>unLikeBlog()}> UNLIKE </button>
                </div>
            </div>
        </div>
    );
};


```


## Black Diamond:
### Match the styles to the designs
####
* Look at the designs that are included in this readme and match the styles


### Change the color or the heart icon when a blog is liked and unliked also update the count
####

* Update the color of the heart icon if a user likes the blog or unLikes the blog
* Update the count if the user likes or unLikes the blog

Good luck!


### Contributions
If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

### Copyright

© DevMountain LLC, 2016. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<img src="https://devmounta.in/img/logowhiteblue.png" width="250">



