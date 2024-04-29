-- Your SQL goes here
CREATE TABLE "storages"(
	"id" SERIAL NOT NULL PRIMARY KEY,
	"name" VARCHAR NOT NULL,
	"description" TEXT,
	"hostname" VARCHAR,
	"ip" VARCHAR,
	"path" TEXT,
	"user" VARCHAR,
	"password" VARCHAR,
	"protocol" INT4,
	"protocol_version" INT4
);

