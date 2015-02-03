---
---

function render_github_error(data, status, xhr) {
  $("#git-repos").append("<div class=\"panel-body\">Error connecting to github API</div>");
};

function render_github_repos(data, status, xhr){
  var div = $("#git-repos");
  var template = $("#template-github").html();
  var regexp = /git:\/\/github\.com\/([^\/]+)\/([^\/]+)/;
  var regmap = "ssh://git@github.com:/$1/$2/";
  function compare_by_time(e1, e2) {
    return (e1.pushed_at < e2.pushed_at) ? 1 : -1;
  }

  data = $.map(data, function (elem, index) {
    if (elem.fork === true) return null;
    elem.git_url = elem.git_url.replace(regexp, regmap);
    elem.updated_time = moment(elem.pushed_at, moment.ISO_8601).fromNow();
    return elem;
  });

  data.sort(compare_by_time);
  div.append(Mustache.render(template, {"repos":data}));

  $("div>ul>li").hover(
      function (ev) { $("div.github_links", ev.delegateTarget).show(); },
      function (ev) { $("div.github_links", ev.delegateTarget).hide(); }
      );
};

$(document).ready( function () {
  Mustache.tags = ["[[", "]]"];
  $.ajax({
    dataType: "json",
    url: "https://api.github.com/users/{{site.author.github}}/repos",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
    success: render_github_repos,
    error: render_github_error,
  });
});

