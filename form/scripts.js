function checkLengths() {
  let pipeline = document.getElementById("pipeline").value;
  let project = document.getElementById("project").value;
  let bucket = document.getElementById("bucket").value;
  let cred = document.getElementById("cred").value;
  let run = document.getElementById("run").value;

  let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (pipeline.length < 5)
    document.getElementById("error").innerHTML = "Pipeline name should be at least 5 characters in length";
  else if (project.length < 5)
    document.getElementById("error").innerHTML = "Project name should be at least 5 characters in length";
   else if (bucket.length < 5)
    document.getElementById("error").innerHTML = "Bucket name should be at least 5 characters in length";
   else if (cred.length < 5)
    document.getElementById("error").innerHTML = "Credentials should be at least 5 characters in length";

  else if (format.test(pipeline))
    document.getElementById("error").innerHTML = "Pipeline name should not contain special characters";
  else if (format.test(project))
    document.getElementById("error").innerHTML = "Project name should not contain special characters";
  else if (format.test(bucket))
    document.getElementById("error").innerHTML = "Bucket name should not contain special characters";
  else if (format.test(cred))
    document.getElementById("error").innerHTML = "Credentials should not contain special characters";

  else if (pipeline[0] == '+' || pipeline[0] == '-' || pipeline[0] == '_')
    document.getElementById("error").innerHTML = "Pipeline name cannot start with +, - or _";
  else if (project[0] == '+' || project[0] == '-' || project[0] == '_')
    document.getElementById("error").innerHTML = "Project name cannot start with +, - or _";
  else if (bucket[0] == '+' || bucket[0] == '-' || bucket[0] == '_')
    document.getElementById("error").innerHTML = "Bucket name cannot start with +, - or _";
  else if (cred[0] == '+' || cred[0] == '-' || cred[0] == '_')
    document.getElementById("error").innerHTML = "Credentials cannot start with +, - or _";

  else if (isNaN(run))
    document.getElementById("error").innerHTML = "Run every field should be filled with a number"
}
