SAM        		= sam
LINTER     		= eslint
TARGET_DIR		= app
POSTMAN_CONF	= newman/meepa-api-master.postman_collection.json
REPO					= memory

export
DB_HOST_DEV			:= 127.0.0.1
MYSQL_USER			:= root
MYSQL_PASSWORD	:= root
MYSQL_DATABASE	:= sample
DB_PORT					:= 3306
TIMEZONE				:= Asia/Tokyo
REPOSITORY			:= memory

all: build test

lint:
	$(LINTER) $(TARGET_DIR)

build:
	npm run build

build-%:
	cp -p app/Dockerfile.${@:build-%=%} app/Dockerfile
	$(SAM) build --use-container

test: build
	# npm test
	#npx jest --forceExit
	npx jest

inttest:
	newman run $(POSTMAN_CONF)

run:
	npm start

push:
	$(DOCKER) push $(DOCKER_CR):$(VERSION)

clean:
	$(DOCKER) rm -f $(TAG)
