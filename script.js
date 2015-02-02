function compare_by_time(e1, e2) {
	if (e1.updated_at < e2.updated_at) {
		return 1;
	} else {
		return -1;
	}
};

function callme(data, status, xhr){
  var div = $("#git-repos");
  var template = $("#template-github").html();
  var realdata = [];
  $.each(data, function(index, elem) {
    if (elem.fork == false) {
      realdata.push(elem);
    }
  });
  realdata.sort(compare_by_time);
  $("#git-repos").append(
     Mustache.render(template, {"repos":realdata}));
  $("li.github_repo").mouseenter( function (ev) {
	$("div.github_links", ev.target).show();
  });
  $("li.github_repo").mouseleave( function (ev) {
	$("div.github_links", ev.target).hide();
  });
};

$(document).ready( function () {
  Mustache.tags = ["[[", "]]"];
  $.ajax({
    dataType: "json",
    url: "https://api.github.com/users/guillermobox/repos",
    headers: {
      Accept: "application/vnd.github.v3+json",
    },
    success: callme,
  });
});

