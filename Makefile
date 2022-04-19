.PHONY: login
login:
	aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 446481105531.dkr.ecr.us-east-2.amazonaws.com
	
.PHONY: vault
vault:
	docker-compose -f docker/vault/docker-compose.yml up -d --build vault 

.PHONY: api
api:
	docker-compose -f docker/api/docker-compose.yml up -d

.PHONY: postgres
postgres:
	docker-compose -f docker/db/docker-compose.yml up -d

.PHONY: down
down:
	docker-compose -f docker/api/docker-compose.yml down --volumes --timeout 0 
	docker-compose -f docker/vault/docker-compose.yml down --volumes --timeout 0

.PHONY: yarn
yarn:
	yarn install && yarn account

.PHONY: account
account:
	yarn account

.PHONY: sign
sign:
	yarn sign

.PHONY: up
up: login vault api 
