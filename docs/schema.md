# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
email           | string    | not null
location        | string    | not null
bio             | text      | not null
avatar_url      | string    | not null
created_at      | datetime  | not null
updated_at      | datetime  | not null

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
organizer_id| integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | text      | not null

## events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
organizer_id| integer   | not null, foreign key (references users), indexed
group_id    | integer   | not null, foreign key (references group), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name       | string    | not null

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
event_id    | integer   | not null, foreign key (references event), indexed
date        | datetime  | not null

## taggings (join table)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
event_id    | integer   | not null, foreign key (references events), indexed
tag_id      | integer   | not null, foreign key (references tag), indexed

## users_groups (join table)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id    | integer   | not null, foreign key (references group), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## users_events (join table)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
event_id    | integer   | not null, foreign key (references group), indexed
user_id     | integer   | not null, foreign key (references users), indexed
