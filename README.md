# ReactDemo
 A proof of concept Maven build running a React frontend

### Running the latest code
* To start a tomcat server at http://localhost:8080 containing the Java API and a copy of the React app
* Java backend API demo endpoint can be seen at http://localhost:8080/api/hello
  

```.env
mvn spring-boot:run
```

### Developing the react front end
The React frontend at http://localhost:3000 can run in dev mode on port 3000, and still talk to the ( running as above) Spring backend running on 8080
```.env
cd reactApp
yarn run start
```

http://localhost:3000/api/hello is redirected to the Tomcat created by `mvn spring-boot:run`








