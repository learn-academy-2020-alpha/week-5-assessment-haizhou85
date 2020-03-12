# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: M is model, V is View, C is controller, user send request to controller, controller manipulates model, model generate data for the view, view send back to user.

  Researched answer:
  
    The Model View Controller (MVC) design pattern specifies that an application consist of a data model, presentation information, and control information. The pattern requires that each of these be separated into different objects.
    
    The Model contains only the pure application data, it contains no logic describing how to present the data to a user.
    
    The View presents the model’s data to the user. The view knows how to access the model’s data, but it does not know what this data means or what the user can do to manipulate it.
    
    The Controller exists between the view and the model. It listens to events triggered by the view (or another external source) and executes the appropriate reaction to these events. In most cases, the reaction is to call a method on the model. Since the view and the model are connected through a notification mechanism, the result of this action is then automatically reflected in the view.



2. What is a gem?

  Your answer: gem is a library 

  Researched answer: A gem is a library built by the ruby community. It contains classes and modules that we can use in our applications. 


3. Why is it important to have validations in your application?

  Your answer: to ensure data is clean and usable

  Researched answer: 
  
    Validations are used to ensure that only valid data is saved into your database. For example, it may be important to our application to ensure that every user provides a valid email address and mailing address. 



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: Person can have many computers, each computer is belong to some person. Computer would hold the foreign key.

  Researched answer:
  Person can have many computers, one computer can belong to one person. Computer would hold the foreign key.



5. What is object-relational mapping?

  Your answer: it is a tool for developers to manipulate database in other programming languages.

  Researched answer: ORM (Object-relational mapping) is a programming technique for converting data between incompatible systems using object-oriented programming languages. ORM is a tool that allows developers to write SQL queries using Rails.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes
- json
- API
- Endpoints
- Strong params
