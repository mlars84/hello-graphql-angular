# Hello GrahpQL
- Front End Masters GraphQL workshop (10/10 & 10/11 2017)
- Minimal GraphQL example with Angular

## Built With
- Angular, Node, Express, GraphQL.

## Getting Starting
- $ npm (or yarn) install
- $ npm/yarn start
- open localhost:4200

## Notes
- Strong understanding of how to consume and work with a GraphQL API on the client.
- Strong understanding of how to convert a RESTful client side application to use GraphQL.
- Agenda
  - GraphQL big picture
  - first GraphQL client application
  - shcemas and types
  - consuming Data with GraphQL Queiries
  - writing Data with mutations
  - GraphQL tooling
  - practical expample: REST to GraphQL
  
### Limitations of REST
  - endpoint for every single thing that returns every single thing. UNTIL you need some other thing.
  - then you need to basically start over. could require another hundered* calls.
  - 1 student: 1 call, 2 courses: 1 call, 15 lessons: 30 calls, 1 grade/lesson: 30 calls, etc.
  - massive objects that need to be parsed. REST API over or under fill your data
  - [API Governance](https://www.sparkpost.com/blog/api-versioning-best-practices/)
  - API Design is hard!

### In a Perfect world:
  - declare your data needs like you think about it (objects, not endpoints)
  - know in advance what you could fetch
  - be decoupled from the server
  - each component would declare it's own data needs and will merge into one round trip.
  - single endpoint / something declarative
  - communicates intent
  - ask for just what you need

### GraphQL
  - Query language. It is flexible, performant (batch multiple calls into a single call), 
  leverages your existing code (implement and integrate into any existing code base), has 
  powerful dev tools (GraphiQL), can evolve without versions (you can depracate and evlove without
  versions and killing the entire endpoint).

### Apollo (rather than Relay)
  - integrates with pretty much everyting
  - small, open source, client only
  - can be integrated gradually
  - sophisticated caching helps network interactions feel instant
  - pluggable immutable cache (redux, etc.)
  - modern standard
  - client for most frameworks (Angular, React, Vue, etc.)  
  - works with observables [RXJS](http://reactivex.io/rxjs/)

### First Client Application
  - dip toes into water
  - basic GraphQL application using json-graphql-server ()
  - playground for covering the fundamentals
  - [Best Practices](http://graphql.org/learn/best-practices/)
  - write queries in GraphiQL and paste them into app.component.ts.
- app.component.ts 
  - import request
  - set base url
  - define query
  - define interface that says what our query looks like
  - call request
  - type response and assign it to students

### Schemas and Types
  - Type System
    - 
  - Schema
  - Query and Mutation Types
  - Scalar

### Consuming Data with Queries
  - Fields
     - id, name, etc.
  - Arguments
    ```
    query {
      Course(id: 1) {
        id
        name
        description
      }
    }
    ```
  - Aliases
    ```
    query {
      firstStuden: Student(id: 4) {
        id
        firstName
        lastName
      }
      lastStudent: Student (id:5) {
        id
        firstName
        lastName
      }
    }
    ```
  - Nested Queries
    ```
    query {
      Student(id: 4) {
        id
        firstName
        lastName
        Courses {
          id 
          name
        }
      }
    }
    ```
  - Fragments 
    ```
    query {
      Studen(id:4) {
        id
        firstName
        Courses {
          ...course (spread operator)
        }
      }
    }

    fragment course on Course {
      id
      name
      level
    }
    ```
  - Filters - Sorting, Pagination, etc.:
    ```
    query {
      sorted: allCourses(sortField: "name", sortOrder: "asc") {
        id
        name
      }
      paginated: allCourses(page:0, perPage:3) {
        id
        name
      }
    }
    ```

### Writing Data with Mutations
  - Mutations are almost identical to queries with the exception that they are named operations which take variables as arguments.
  - 


### C.I.D.E.R:
- component class
- import
- decoration 
- enhance the component
- R?
