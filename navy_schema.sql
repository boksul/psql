select 'hello, PG';

create database navy;
  \c navy;

create table fleet (
  id integer PRIMARY KEY,
  name varchar(50)
  );

create table ship (
  id integer PRIMARY KEY,
  name varchar(50),
  date_built varchar(50),
  fleetid integer
  );

create table sailor (
  id integer PRIMARY KEY,
  name varchar(50),
  dob varchar(10)
  );

create table assignment (
  id integer PRIMARY KEY,
  sailorid integer,
  shipid integer,
  sailor_rank integer,
  start_date varchar(10),
  end_date varchar(10),
  active integer,
  rankid integer
  );

create table rank (
  id integer PRIMARY KEY,
  name varchar(50)
  );