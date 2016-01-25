---
layout: post
title:  "First Jekyll Post!"
date:   2016-01-24 20:00:59 -0800
categories: jekyll update
---
While the fine folks at Jekyll say you "Up and running in seconds" that's more
like a teaser, as in "You could win". I was not up and running in seconds.

http://jekyllrb.com/docs/installation/


Unfortunately, Ubuntu installs Ruby 1.9 while we need Ruby >= 2.0 for Jekyll
so `apt-get` won't do. I used the Ruby Version Manager (RVM) which turned out
to be a hassle to install. I got curl error: 77. Solution is below:

http://stackoverflow.com/questions/3160909/how-do-i-deal-with-certificates-using-curl-while-trying-to-access-an-https-url


After running a `$bundle update/bundle install` it broke my `jekyll serve` that
had been working previously.

So I made sure I had Node.JS installed...

https://nodejs.org/en/download/package-manager/

And a few hours later...voila!
