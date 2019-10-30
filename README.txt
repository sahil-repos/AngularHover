##########################################
@author:Mohammed Sahil, Trainee, Nagarro
##########################################
The assignment below assumes that you have Node (v10+) installed and @angular/cli installed.

Instructions
1)install npm dependencies first
run the command in the assignment01 folder :
         npm install

2)to run the project
	ng serve --open






############################################
project:
solution to problem statments Assignment 1 and 
Assignment 2 in Angular Assignment for
 DotNetFreshers batch 2019




Assignment-1

1.	Install bootstrap via “npm install –save bootstrap”
2.	Create a new component named “users” using @angular/cli.
3.	Integrate bootstrap in the project.
4.	Inside the component, create a model which fetches list of users from an endpoint – https://jsonplaceholder.typicode.com/users via $http service.
5.	Bind list of users using <table> tag. Use bootstrap classes to style the table.
6.	Use <ng-template> tag to display a message in case no users are available.
7.	Bind name, username and email properties in the table.

Assignment-2

1.	Create a directive named “highlighter” using @angular/cli.
2.	This directive should be responsible to do the following:
a.	Add a yellow background to email in the above table if user places her mouse over an email in the table.
b.	Remove that yellow background from email if user moves her mouse out of that same email.
 