var subjectObject = {

  "Biology": {
    "Botony": ["Enquiry", "Place Order", "Return"],
    "Nursing": ["Enquiry", "Place Order", "Return"],
    "Zoology": ["Enquiry", "Place Order", "Return"]
  },
  "Commerce": {
    "B Com": ["Enquiry", "Place Order", "Return"],
    "BBA": ["Enquiry", "Place Order", "Return"],
	"MBA": ["Enquiry", "Place Order", "Return"]
  },
    "Computer Science": {
    "AI": ["Enquiry", "Place Order", "Return"],
    "ML": ["Enquiry", "Place Order", "Return"],
	"Language": ["Enquiry", "Place Order", "Return"]
  },
    "Natural Science": {
    "Life Science": ["Enquiry", "Place Order", "Return"],
    "Physical Science": ["Enquiry", "Place Order", "Return"],

  },
    "Political Science": {
    "BA History": ["Enquiry", "Place Order", "Return"],
    "MA History": ["Enquiry", "Place Order", "Return"],

  },


}
window.onload = function() {
  var subjectSel = document.getElementById("subject");
  var topicSel = document.getElementById("topic");
  var chapterSel = document.getElementById("chapter");
  for (var x in subjectObject) {
    subjectSel.options[subjectSel.options.length] = new Option(x, x);
  }
  subjectSel.onchange = function() {
    //empty Chapters- and Topics- dropdowns
    chapterSel.length = 1;
    topicSel.length = 1;
    //display correct values
    for (var y in subjectObject[this.value]) {
      topicSel.options[topicSel.options.length] = new Option(y, y);
    }
  }
  topicSel.onchange = function() {
    //empty Chapters dropdown
    chapterSel.length = 1;
    //display correct values
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
    }
  }
}

