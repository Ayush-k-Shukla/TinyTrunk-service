## Things still pending (BE)

### High Priority

1. before storing check if same url encoded before (if yes then return that url)
2. enforce unique url genration
3. setup the cron job to empty the DB in case of autoclear
4. Add the proper status message and code
5. Add delete request (delete the url if exists)
6. write tests (Unit)

### Less Priority

1. Add the rate limiter based on the IP address
2. setup the CI/CD for deployment and probably use docker
3. implement own hashing algo instead of sort id
4. for a IP address add a max limit of request can be generated
