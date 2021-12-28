---
title: How to create aliases to use Git CLI more
description: "Let's be productive and use shortcuts!"
date: 2021-12-28
##heroImage: "/images/.jpg"
##heroAlt:
meta:
  keywords:
    - Git
    - CLI
---

## What are Git aliases

Have you ever wondered if you could skip typing `git add /path/to/filename && git commit "my message" && git push`?
That's what git aliases are for.

## How to create an alias

Using the `git config` command, we can declare globally the aliases. For example:

```sh
git config --global alias.todo "! git grep --extended-regexp -I --line-number --break --heading --color=auto 'TODO|FIXME'"
```

## What are example of aliases that can be helpful

### My aliases

#### Add via direct git config edition

```bash
git config --global --edit
```

#### Add via CLI

```bash
## List existing aliases
git config --global alias.alias "! git config --get-regexp alias"
## Hard reset
git config --global alias.hr "! git reset --hard HEAD"
## Soft reset
git config --global alias.sr "! git reset --soft HEAD^"
## Hard reset and pull
# Can't add the following.
# Maybe edit the git config file directly as the alias should work...
# Maybe an escape issue?
git config --global alias.hrp "!f() { git hr && git pull }; f"
```

## Articles I read while researching the topic

[https://bitbucket.org/durdn/cfg/src/master/.gitconfig?at=master](https://bitbucket.org/durdn/cfg/src/master/.gitconfig?at=master)

[https://www.durdn.com/blog/2012/11/22/must-have-git-aliases-advanced-examples/](https://www.durdn.com/blog/2012/11/22/must-have-git-aliases-advanced-examples/)

[https://www.atlassian.com/blog/git/advanced-git-aliases](https://www.atlassian.com/blog/git/advanced-git-aliases)

[https://stackoverflow.com/questions/3321492/git-alias-with-positional-parameters](https://stackoverflow.com/questions/3321492/git-alias-with-positional-parameters)

[https://borntocode.fr/git-alias-etre-un-bon-developpeur-faineant/](https://borntocode.fr/git-alias-etre-un-bon-developpeur-faineant/)
