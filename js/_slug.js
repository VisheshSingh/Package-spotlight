const slug = require("slug");

const val = "The Net Ninja";
function slugify(val) {
  return slug(val, {
    lower: true,
    replacement: "_"
  });
}

console.log(slugify(val));
