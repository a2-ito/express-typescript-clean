SAM        		= sam
LINTER     		= eslint
TARGET_DIR		= app
POSTMAN_CONF	= newman/meepa-api-master.postman_collection.json
REPO					= memory

export
DB_HOST_DEV			:= 127.0.0.1
MYSQL_USER			:= testuser
MYSQL_PASSWORD			:= password
MYSQL_ROOT_PASSWORD	:= root
MYSQL_DATABASE			:= sample
DB_PORT					:= 3306
TIMEZONE				:= Asia/Tokyo
REPOSITORY			:= memory

all: build unittest inttest

lint:
	$(LINTER) $(TARGET_DIR)

build:
	npm run build

build-container:
	pack build --builder=gcr.io/buildpacks/builder itotest

run-container:
	docker run -it -ePORT=8080 -p 8080:8080 itotest

test: build
	# npm test
	npx jest

unittest:
	npx jest unit

inttest:
	npx jest integration

e2etest:
	npx jest app/tests/e2e/test.test.ts

run: build
	npm start

run-mysql:
	docker-compose up -d

down-mysql:
	docker-compose down

restart-mysql: down-mysql run-mysql

push:
	$(DOCKER) push $(DOCKER_CR):$(VERSION)

clean:
	$(DOCKER) rm -f $(TAG)
