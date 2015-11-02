# interact
Interactive interview app 

# Run below command under interact folder
node server.js

# Access the start page using below URL
http://localhost:3000/web/index.html


# Bankend Server
Interact backend uses OpenTok Java SDK and Spring Framework to expose REST API.

**Requirements**

* JDK 1.8.x
* Tomcat 1.7.x or higher

To compile the application, run "mvn clean install" under server\interact. 
Copy the generated interact.war from target folder and deploy on tomcat.

