# TopShip

## Documentation of TopShip

## Author 🚀

> ADEBAYO EMMANUEL TOLUWANIMI
---

## Technologies

- Node JS
- Express
- Typeorm
- Docker

---

## Database

- [Postgres](https://www.postgresql.org/) (TypeORM)

---

## Install NodeJS

To Install NodeJS, kindly go to [Nodejs](https://nodejs.com) and follow the necessary instructions required depending on
your PC Operating System

## MACOS

using a [package](https://nodejs.org/en/#download) simply download the installer

using [homebrew](https://github.com/Homebrew/legacy-homebrew)

```markdown
brew install node
```

---

## Windows

using a [package](https://nodejs.org/en/#download) simply download the installer

using [chocolatey](http://chocolatey.org/) to install Node

```markdown
cinst nodejs
```

---

## To install Postgres

For Windows users, you can kindly follow this
tutorials [here](https://learnsql.com/blog/how-to-install-postgresql-on-windows-in-5-minutes/) to install Postgres on
your local PC which explains how to create a database

For Mac users, you can kindly follow this tutorials [here](https://www.robinwieruch.de/postgres-sql-macos-setup)  to
install Postgres on your local PC which explains how to create a database


---

## Setup Database

To setup your database for the project, after creation kindly open the ormconfig.js file in the  folder of the
project and replace with your credentials

```markdown
    database: 'your database name',
    port: 5432,
    host: 'your host, localhost or host address',
    username: 'your username',
    password: 'your password'
```

### OR

Create a .env file in the root directory and add your databae details. It should have the following properties

```markdown
DATABASE_HOST= DATABASE_USERNAME= DATABASE_PASSWORD= DATABASE_NAME= DATABASE_PORT=
```

Kindly replace these values with the appropriate values based on your Database environment
---

## Start Development

Kindly clone the repo `https://github.com/toluwaanimi/topship_task.git`

### Installation

To install the necessary packages, in your folder directory kindly run

```markdown
npm i

# or

yarn add
```

* To continuously watch for changes
    * ```markdown 
      npm run dev
      ```

* To build your app for production
    * ```markdown
      npm run build
         ```


* To run your app server for production
    * ```markdown
      npm run start
         ```

---

## Implementation Required

BASE URL
> https://topship-task.herokuapp.com/

### 1.List Movies -> GET
> /movies
<ul>
  <li><b>movieId</b>: This displays the id of the movie</li> 
  <li><b>title</b>: This displays the title of the movie</li> 
  <li><b>openingCrawl</b>: This displays the opening crawl of the movie</li> 
  <li><b>releaseDate</b>: This displays the release date of the movie</li> 
  <li><b>noComments</b>: This displays the no of anonymous comments on the movie</li> 
</ul>

### 2. Add Anonymous Comment -> GET
> /comment?movieId=1&comment=hello come here
<ul>
  <li><b>movieId</b>: This is the id of the movie associated with the comment from anonymous</li>
  <li><b>comment</b>: This is the comment from anonymous</li>
</ul>

### 3. Filter and Search for Character Lists per Page

> /character?gender=male&order=asc&sortType=height&page=2
<ul>
  <li><b>page</b>: This is the page number to call data from in the character list from the base API (https://swapi.dev/). This is mandatory and the default value is 1.</li>
  <li><b>sortType</b>: This can either be name or height. The parameter to sort the object by. This is mandatory and the default value is name</li>
  <li><b>order</b>: This can either be asc or desc. asc stands for ascending order, desc stands for descending order. This is mandatory and the default value is asc</li>
  <li><b>gender</b>: This can be male, female. You can filter the result using any of these values. This is optional</li>
  <li><b>search</b>: This is a keyword used to search the result. This is optional</li>
</ul>

The response from the API call consists of:
<ui>
  <li><b>count</b>: This displays the number of characters in the list</li>
  <li><b>total_height</b></li>
    <ul>
      <li><b>cm</b>: The value of the total height in cm</li>
      <li><b>ft_in</b>: The value of the total height in feet and inches</li>
    </ul>

### 4. List All Comment associated to a Particular Movie in Reverse Chronological Order

> /comment/movies/:id
<ul>
  <li><b>id</b>: This displays the id of the comment</li> 
  <li><b>movie_id</b>: This displays the movie_id associated with the comment</li> 
  <li><b>comment</b>: This displays the comment by the anonymous</li> 
  <li><b>ipAddress</b>: This displays the ip address of the anonymous</li> 
  <li><b>createdTime</b>: This displays the UTC time number from 1970 till when the comment was made by the anonymous</li>
  <li><b>createdDate</b>: This displays the date the comment of the anonymous</li>
</ul>

### 5. List All Comments in Reverse Chronological Order -> GET
> /comments
<ul>
  <li><b>id</b>: This displays the id of the comment</li> 
  <li><b>movieId</b>: This displays the movie_id associated with the comment</li> 
  <li><b>comment</b>: This displays the comment by the anonymous</li> 
  <li><b>ipAddress</b>: This displays the ip address of the anonymous</li> 
  <li><b>createdTime</b>: This displays the UTC time number from 1970 till when the comment was made by the anonymous</li>
  <li><b>createdDate</b>: This displays the date the comment of the anonymous</li>
</ul>
