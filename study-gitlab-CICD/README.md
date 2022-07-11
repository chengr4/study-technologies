# Study Gitlab CI/CD

> :information_source: In order to run the pipeline using the gitlab.com infra, you need to verify the account in advance

## Q/A

Q: What is a job?

A: A job is a set of commands we want to execute

Q: What is `&`?

A: The & marks an alias for the node

```yml
development: &default # &default aliases the development node as "default"
  adapter: postgresql
  database: dev_development
```

Q: What is `*`?

A: `*` references the aliased node with the name, eg:

```yml
*default # aliased node with the name "default"
```

Q: What is `<<:`?

A: The `<<:` inserts the content of that node.

> Can be overrided

## References

1. https://gitlab.com/gitlab-course-public/freecodecamp-gitlab-ci/-/blob/main/docs/course-notes.md
2. [What do the `&`, `<<`, `*` mean in this database.yml file?](https://stackoverflow.com/questions/6651275/what-do-the-mean-in-this-database-yml-file)
