function callme(data, status, xhr){
  var div = $("#git-repos");
  var template = $("#template-github").html();
  var realdata = [];
  $.each(data, function(index, elem) {
    if (elem.fork == false) {
      realdata.push(elem);
    }
  });
  $("#git-repos").html(
     Mustache.render(template, {"repos":realdata}));
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

