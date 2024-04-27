-- Your SQL goes here
CREATE TABLE "storages"(
	"id" SERIAL NOT NULL PRIMARY KEY,
	"name" VARCHAR NOT NULL,
	"description" TEXT,
	"hostname" VARCHAR,
	"ip" INET,
	"user" VARCHAR,
	"password" VARCHAR,
	"protocol" INT2,
	"protocol_version" INT2
);

