# NETFAIRTECH

The service is deployed on Heroku and it is using mongoDB Atlas(cloud service) as its database.

For pushing notifications, [sendgrid](https://sendgrid.com/), an ESP(Email Service Provider) is being used.

### Heroku Link

[https://vivek-netfairtech.herokuapp.com](https://vivek-netfairtech.herokuapp.com)

### Routes

> Register Endpoint
```
POST   https://vivek-netfairtech.herokuapp.com/users
```

> Login Enpoint
```
POST   https://vivek-netfairtech.herokuapp.com/users/login
```

> Logout Enpoint
```
POST   https://vivek-netfairtech.herokuapp.com/users/logout
```

> LogoutAll Endpoint
```
POST   https://vivek-netfairtech.herokuapp.com/users/logoutAll
```

> Delete user endpoint
```
DELETE   https://vivek-netfairtech.herokuapp.com/users/me
```

### Authorization

When login or signup is done, an authentication token is returned from the server which must be produced before accessing the Delete/Logout/LogoutAll endpoints. In case of
producing an invalid authentication token, `{ error: "Please authenticate" }` will return from the server.

### Sendgrid Service (ESP)

If registered through a valid Email ID, upon registration a Welcome Email will be sent to your registered email from [kumarvivek8290@gmail.com](kumarvivek8290@gmail.com). Also,
a cancellation email will be sent once a user with valid email address deletes his account.
