# Building the Backend of an E-Commerce Website

1. Authenticate and Authorise a User --> Access Token
2. 

#### Concept of Authentication and Authorisation
- Authentication: Who am I?
- Authorisation: What can I do?

Earlier, there was no security but later on, things started coming:
1. Basic Auth/Username and Password Authentication and Authorisation: Provide username and password everytime

*Challenges/Security Risks*:

(1) Everytime the user performs an activity, he/she is exposing username and password everytime i.e. secrets are overly exposed everytime.

(2) It is easy to impersonate.

2. Token-based Authentication: Register by username and password --> Success --> Login via username and password --> Access Code (You can decide the TTL of access code)

> TTL: Time to live..
> After TTL, user has to login again.

> Note: Access Tokens are used for servers and they have expiry time.

- **Salt-based Hashing**: In order to encrypt the password, some random text is added which is further encrypted to make it more complicated to crack.

3. Multifactor Authentication: Use multiple ways of authentication and authorisation.
> Using username and password first and then OTP for the second time.

