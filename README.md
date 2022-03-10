# express-typescript-clean

This is a repository of a sample REST API application to manage users by using the clean architecture.

## Usage

### install
```
cd express-typescript-clean
npm install
```

### build and run on memory database
```
make
```

### build and run on mysql - todo
```
make mysql
```

```
curl -XPUT localhost:3000/user/1 -H "Content-Type: application/json" -d '{"id":1,"name":"hogehoge"}'
```

## Todo
- [ ] clean up and git push
- [ ] CRUD for user (on memory)
  - [x] findAll
  - [x] findById
  - [x] create
  - [x] delete
  - [x] update
- [x] CRUD for user (on mysql)
  - [x] findAll
  - [x] findById
  - [x] create
  - [x] delete
  - [x] update
- [x] openapi integration
- [x] connect to mysql
- [x] unit test
- [x] int test
- [ ] e2e test
- [ ] build and run as a container (buildpacks)
- [ ] github actions

