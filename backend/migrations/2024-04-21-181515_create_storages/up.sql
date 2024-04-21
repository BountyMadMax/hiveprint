-- Your SQL goes here
CREATE TABLE "storages"(
	"id" INT4 NOT NULL PRIMARY KEY,
	"name" VARCHAR NOT NULL,
	"description" TEXT NOT NULL,
	"hostname" INET NOT NULL,
	"user" VARCHAR NOT NULL,
	"password" VARCHAR NOT NULL,
	"protocol" SMALLINT NOT NULL,
	"protocol_major_version" SMALLINT NOT NULL,
	"protocol_minor_version" SMALLINT NOT NULL
);

