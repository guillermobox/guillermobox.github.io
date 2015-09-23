---
layout: document
---

This is markdown
================

This is the content of the article

  - This is a list
  - With several elements
  - Easy to write, easy to read

I'm using, Yes, we are using `cc` to *compile* here, and the result is:

{% highlight C linenos linespans=linea %}
#include <stdio.h>
#include <stdlib.h>

int function(int a, int b)
{
	return a+b;
};

int main() {
	/* This is a comment, ignore me please */
	double x, y;

	printf("Default value for x: %lf\n", x);
	function(4, 7);
	
	return 0;
}
{% endhighlight %}

